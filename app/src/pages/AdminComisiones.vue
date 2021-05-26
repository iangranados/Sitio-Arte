<template>
  <q-page class="AdminComisiones" :style-fn="myTweak">
    <h1 class="AdminComisiones__title">Administrar comisiones</h1>
    <div v-if="!!error" class="text-center">
      <h2 class="AdminComisiones__error">{{ error }}</h2>
    </div>
    <div v-else-if="!!loading" class="text-center">
      <q-spinner size="40px" color="primary" />
    </div>
    <q-scroll-area v-else horizontal class="AdminComisiones__ScrollArea">
      <div class="AdminComisiones__content">
        <Kanban title="Solicitudes pendientes" :items="commissions_pending" @reload="loadCommissions"/>
        <Kanban title="Lista de espera(aprobados)" :items="commissions_approved" @reload="loadCommissions"/>
        <Kanban title="En progreso" :items="commissions_doing" @reload="loadCommissions"/>
        <Kanban title="Completado" :items="commissions_done" @reload="loadCommissions"/>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "AdminComisiones",
  components: {
    Kanban: () => import("../components/comissions/Kanban.vue"),
  },
  mounted () {
    this.loadCommissions()
  },
  data: () => ({
    loading: false,
    error: null,
    commissions_full: []
  }),
  methods: {
    loadCommissions () {
      this.loading = true;
      this.$axios
        .get("/comisionesPrivileged")
        .then((response) => {
          if (response.status === 200 && Array.isArray(response.data)) {
            this.commissions_full = response.data;
            this.error = null;
          } else {
            this.error = "Algo salió mal, intenta otra vez :c";
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          this.error = "Algo salió mal, intenta otra vez :c";
        });
    },
    myTweak(offset) {
      return {
        minHeight: offset ? `calc(100vh - ${offset}px)` : "100vh",
        height: offset ? `calc(100vh - ${offset}px)` : "100vh",
      };
    },
  },
  computed: {
    commissions_pending: function () {
      return this.commissions_full.filter(c => c.status === "Pending")
    },
    commissions_approved: function () {
      return this.commissions_full.filter(c => c.status === "Approved")
    },
    commissions_doing: function () {
      return this.commissions_full.filter(c => c.status === "Working On")
    },
    commissions_done: function () {
      return this.commissions_full.filter(c => c.status === "Completed")
    },
  }
};
</script>

<style lang="scss">
// $
.AdminComisiones {
  padding: 50px 24px;

  @media (min-width: $breakpoint-md-min) {
    padding: 70px 50px;
  }
}

.AdminComisiones__title {
  @include font(26px, bold, $primary);
  margin: 0 0 35px;
}

.AdminComisiones__error {
  @include font(24px, bold, $red-lips);
  margin: 0;
}

.AdminComisiones__ScrollArea {
  height: calc(100% - 30px);
  width: 100%;
}

.AdminComisiones__content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  height: 100%;
}
</style>
