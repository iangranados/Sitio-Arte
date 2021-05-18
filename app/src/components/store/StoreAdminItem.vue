<template>
  <div class="StoreAdminItem">
    <div>
      <q-img :src="item.link" class="StoreAdminItem__image" />
      <div class="StoreAdminItem__content">
        <p class="StoreAdminItem__title"><b>Title:</b><br />{{ item.title }}</p>
        <p class="StoreAdminItem__price"><b>Price:</b><br />{{ item.price }}</p>
        <p class="StoreAdminItem__category"><b>Category:</b><br />{{ item.category }}</p>
      </div>
    </div>
    <div class="StoreAdminItem__actions">
      <q-btn @click="onModify" icon="edit" size="14px" flat dense round />
      <q-btn
        @click="onDelete"
        icon="delete"
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
  name: "StoreAdminItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDelete() {
      this.$q
        .dialog({
          component: () => import("./DeleteStoreItemDialog.vue"),
          parent: this,
          item: this.item,
        })
        .onOk(() => {
          this.$emit("reload-Store");
        });
    },
    onModify() {
      this.$q
        .dialog({
          component: () => import("./ModifyStoreItemDialog.vue"),
          parent: this,
          item: this.item,
        })
        .onOk(() => {
          this.$emit("reload-Store");
        });
    },
  },
};
</script>

<style lang="scss">
// $
.StoreAdminItem {
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

.StoreAdminItem__image {
  height: 100px;
  width: 100%;
}

.StoreAdminItem__content {
  margin-top: 5px;
  margin-bottom: 15px;
}

.StoreAdminItem__url {
  @include font(12px, normal, $dark);
  word-break: break-all;
  margin: 0 0 5px;
}

.StoreAdminItem__actions {
  text-align: right;
}
</style>
