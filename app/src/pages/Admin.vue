<template>
  <q-page class="login-form">
    <h2 class="inicia">Inicia sesión</h2>
    <q-form @submit="onSubmit">
      <q-input
        outlined
        class="q-mb-md"
        v-model="text"
        label="Nombre de Usuario"
      />
      <q-input outlined class="q-mb-lg" v-model="password" label="Contraseña" />

      <div class="FormSubmit">
        <q-btn
          type="submit"
          class="Form__btn"
          label="Login"
          color="primary"
          :loading="loading"
          unelevated
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "AdminLogin",
  methods: {
    onSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.$q.dialog({
          component: () =>
            import("../components/comissions/OrderSuccessDialog.vue"),
          parent: this,
          confirmationCode: "01236789",
        });
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
// $
.inicia {
  width: 442px;

  height: 31px;

  //   margin: 66px 749px 60px 729px;

  font-family: Gotham;

  font-size: 28px;

  font-weight: 500;

  font-stretch: normal;

  font-style: normal;

  line-height: 0.43;

  letter-spacing: normal;

  //   text-align: center;

  color: #ff8181;
}

.login-form {
  @include content-width;
}
</style>
