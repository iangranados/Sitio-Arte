<template>
  <q-header class="Header" height-hint="98">
    <div class="Header__nav mobile-hide">
      <q-btn
        class="Header__nav-btn"
        :class="{'Header__nav-btn--active': $route.path == '/'}"
        label="Inicio"
        to="/"
        outline
        rounded
      />
      <q-btn
        class="Header__nav-btn"
        :class="{'Header__nav-btn--active': $route.path == '/portafolio'}"
        label="Portafolio"
        to="/portafolio"
        padding="sm md"
        outline
        rounded
      />
      <q-btn
        class="Header__nav-btn"
        :class="{'Header__nav-btn--active': $route.path == '/comisiones'}"
        label="Comisiones"
        to="/comisiones"
        outline
        rounded
      />
      <q-btn
        class="Header__nav-btn"
        :class="{'Header__nav-btn--active': $route.path == '/tienda'}"
        label="Tienda"
        to="/tienda"
        outline
        rounded
      />
    </div>
  </q-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.Header {
  background-color: white;
  color: $gray;
}

.Header__nav {
  padding: 30px 0;
  margin: 0 auto; 
  width: $content-width;
  min-width: fit-content;
  justify-content: space-between;
  border-bottom: 1.5px solid $light-gray;

  display: none;

  @media (min-width: $breakpoint-md-min) {
    display: flex;
  }
}

.Header__nav-btn {
  min-width: 130px;
  font-size: 12px;
  letter-spacing: 3px;
  margin: 0 10px  
}

.Header__nav-btn--active {
  color: $rose-pink;
}

</style>
