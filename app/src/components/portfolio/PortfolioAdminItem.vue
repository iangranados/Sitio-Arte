<template>
  <div class="PortfolioAdminItem">
    <q-img :src="item.image" class="PortfolioAdminItem__image"/>
    <div class="PortfolioAdminItem__content">
      <p class="PortfolioAdminItem__timestamp">Última actualización: {{item.lastUpdate}}</p>
      <p class="PortfolioAdminItem__url"><b>URL:</b><br />{{item.url}}</p>
    </div>
    <div class="PortfolioAdminItem__actions">
      <q-btn icon="edit" size="14px" flat dense round />
      <q-btn icon="delete" size="14px" color="red-lips" flat dense round />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioAdminItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
// $
.PortfolioAdminItem {
  border-radius: 5px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border: 1px solid $light-gray;
  padding: 10px 8px;
  margin-bottom: 7px; 
}

.PortfolioAdminItem__image{
  height: 100px;
  width: 100%;
}

.PortfolioAdminItem__content {
  margin-top: 5px;
  margin-bottom: 15px;
}

.PortfolioAdminItem__timestamp {
  @include font(10px, normal, $gray);
  margin: 0 0 5px;
}

.PortfolioAdminItem__url {
  @include font(12px, normal, $dark);
  word-break: break-all;
  margin: 0 0 5px;
}

.PortfolioAdminItem__actions {
  text-align: right;
}
</style>
