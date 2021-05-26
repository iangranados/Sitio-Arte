<template>
  <div class="StoreClientItem">
    <div>
      <q-img :src="item.img" class="StoreClientItem__image" />
      <div class="StoreClientItem__content">
        <p class="StoreClientItem__title"><b>Title:</b><br />{{ item.titulo }}</p>
        <p class="StoreClientItem__price"><b>Price:</b><br />{{ item.precio }}</p>
        <p class="StoreClientItem__category"><b>Category:</b><br />{{ item.categoria }}</p>
      </div>
    </div>
    <div class="StoreClientItem__actions">
      <q-btn
        @click="onBuy"
        icon="shopping_cart"
        size="14px"
        color="red-lips"
        flat
        dense
        round
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreClientItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
//   mounted:{

//   },
  methods: {
    onBuy() {
      this.$q
        .dialog({
          component: () => import("./BuyItemDialog.vue"),
          parent: this,
          item: this.item,
        })
        // .onOk(() => {
        //   this.$emit("reload-Store");
        // });
    },
    // onModify() {
    //   this.$q
    //     .dialog({
    //       component: () => import("./ModifyStoreItemDialog.vue"),
    //       parent: this,
    //       item: this.item,
    //     })
    //     .onOk(() => {
    //       this.$emit("reload-Store");
    //     });
    // },
  },
};
</script>

<style lang="scss">
// $
.StoreClientItem {
  border-radius: 5px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border: 1px solid $light-gray;
  padding: 10px 8px;
  margin-bottom: 7px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.StoreClientItem__image {
  height: 100px;
  width: 100%;
}

.StoreClientItem__content {
  margin-top: 5px;
  margin-bottom: 15px;
}

.StoreClientItem__url {
  @include font(12px, normal, $dark);
  word-break: break-all;
  margin: 0 0 5px;
}

.StoreClientItem__actions {
  text-align: right;
}
</style>
