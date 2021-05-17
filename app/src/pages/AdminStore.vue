<template>
  <q-page class="AdminStore">
    <h1 class="AdminStore__title">Tienda</h1>
    <div class="text-right AdminSore__actions">
      <q-btn @click="onAddNewImage" class="AdminStore__btn" label="Subir nueva oferta" color="primary" no-caps unelevated/>
    </div>
    <div v-if="!!error" class="text-center">
      <h2 class="AdminStore__error">{{ error }}</h2>
    </div>
    <div v-else-if="!!loading" class="text-center">
      <q-spinner size="40px" color="primary" />
    </div>
    <div v-else class="AdminStore__list row q-col-gutter-md">
      <div class="col-xs-12 col-sm-4 col-md-3" v-for="item in portfolio" :key="item._id">
        <PortfolioAdminItem :item="item" @reload-portfolio="loadPortfolio" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AdminPortafolio",
  components: {
    PortfolioAdminItem: () => import('../components/store/StoreAdminItem.vue')
  },
  mounted () {
    this.loadPortfolio()
  },
  data: () => ({
    loading: false,
    error: null,

    portfolio: []
  }),
  methods: {
    loadPortfolio () {
    //   this.loading = true;
    //   this.$axios
    //     .get("/galeria")
    //     .then((response) => {
    //       if (response.status === 200 && Array.isArray(response.data)) {
    //         this.portfolio = response.data;
    //         this.error = null;
    //       } else {
    //         this.error = "Algo salió mal, intenta otra vez :c";
    //       }
    //       this.loading = false;
    //     })
    //     .catch((e) => {
    //       this.loading = false;
    //       this.error = "Algo salió mal, intenta otra vez :c";
    //     });
    },
    onAddNewImage () {
    //   this.$q.dialog({
    //     component: () => import("../components/store/AddStoreItemDialog.vue"),
    //     parent: this
    //   }).onOk(() => {
    //     this.loadPortfolio()
    //   });
    }
  }
};
</script>

<style lang="scss">
// $
.AdminStore {
  padding: 50px 24px;

  @media (min-width: $breakpoint-md-min) {
    padding: 70px 50px;
  }
}

.AdminStore__title {
  @include font(26px, bold, $primary);
  margin: 0 0 35px;
}

.AdminStore__actions {
  margin-bottom: 35px;
}

.AdminStore__btn {
  border-radius: 10px;
  letter-spacing: 1px;
}

.AdminStore__error {
  @include font(24px, bold, $red-lips);
  margin: 0;
}

.AdminStore__list {
}
</style>
