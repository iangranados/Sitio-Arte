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
        <Kanban title="Solicitudes pendientes" :items="pending" />
        <Kanban title="Lista de espera(aprobados)" :items="approved" />
        <Kanban title="En progreso" :items="doing" />
        <Kanban title="Completado" :items="done" :loading="false" />
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
    // this.loadComisiones()
  },
  data: () => ({
    loading: false,
    error: null,

    pending: [
      {
        title: "Twitch badges - Johnny",
        status: "pending",
      },
      {
        title: "Twitch badges - otherguyXD",
        status: "pending",
      },
      {
        title: "Twitch badges - MarieStreams",
        status: "pending",
      },
      {
        title: "Twitch badges - Formeee",
        status: "pending",
      },
      {
        title: "Twitch badges - Ninja",
        status: "pending",
      },
      {
        title: "Twitch badges - otherguy",
        status: "pending",
      },
      {
        title: "Twitch badges - username",
        status: "pending",
      },
      {
        title: "Twitch badges - Johnny",
        status: "pending",
      },
    ],

    approved: [
      {
        title: "Twitch badges - Johnny",
        status: "approved",
      },
      {
        title: "Twitch badges - otherguyXD",
        status: "approved",
      },
      {
        title: "Twitch badges - MarieStreams",
        status: "approved",
      },
      {
        title: "Twitch badges - Formeee",
        status: "approved",
      },
      {
        title: "Twitch badges - Ninja",
        status: "approved",
      },
      {
        title: "Twitch badges - otherguy",
        status: "approved",
      },
      {
        title: "Twitch badges - username",
        status: "approved",
      },
      {
        title: "Twitch badges - Johnny",
        status: "approved",
      },
    ],

    doing: [
      {
        title: "Twitch badges - Johnny",
        status: "doing",
        progress: 30,
        hasComments: true,
      },
      {
        title: "Emotes - Mary",
        status: "doing",
        progress: 65,
        hasComments: false,
      },
    ],

    done: [
      {
        title: "Twitch badges - Kisekii",
        status: "done",
        progress: 100,
        hasComments: true,
        finalThumb: require("../assets/images/kanban_thumb.png"),
      },
    ],
  }),
  methods: {
    loadPortfolio () {
      this.loading = true;
      this.$axios
        .get("/galeria")
        .then((response) => {
          if (response.status === 200 && Array.isArray(response.data)) {
            this.portfolio = response.data;
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
