<template>
  <q-page class="ClientStore">
    <div v-if="!!error" class="text-center">
      <h2 class="ClientStore__error">{{ error }}</h2>
    </div>
    <div v-else-if="!!loading && offers.length <= 0" class="text-center">
      <q-circular-progress indeterminate size="40px" color="primary" />
    </div>
    <div v-else class="ClientStore__list row q-col-gutter-md">
      <div
        class="col-xs-12 col-sm-4 col-md-3"
        v-for="item in offers"
        :key="item._id"
      >
        <StoreAdminItem :item="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ClientStore",
  components: {
    StoreAdminItem: () => import("../components/store/StoreClientItem.vue"),
  },
  data: () => ({}),
  methods: {
    loadStore: function () {},
  },
  mounted: function () {
    this.$store.dispatch("tienda/loadTienda");
  },
  computed: {
    loading() {
      return this.$store.state.tienda.loading;
    },
    error() {
      return this.$store.state.tienda.error;
    },
    offers() {
      return this.$store.state.tienda.offers;
    },
  },
};
</script>

<style lang="scss">
// $
.ClientStore {
  @include content-width;
  padding: 40px 0;
}

.ClientStore__imageWrapper {
  margin-bottom: 6px;
  position: relative;
}

.ClientStore__image {
  cursor: zoom-in;
  background-color: $light-gray;
  min-height: 100px;
}

.ClientStore__link {
  position: absolute;
  font-size: 10px;
  bottom: 8px;
  right: 8px;
}

.ClientStore__error {
  @include font(24px, bold, $red-lips);
  margin: 0;
}
</style>
