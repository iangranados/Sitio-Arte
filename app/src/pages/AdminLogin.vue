<template>
  <q-page class="LoginForm">
    <div class="LoginForm__wrapper">
      <h2 class="LoginForm__title">Inicia sesión</h2>
      <q-form @submit="onSubmit">
        <q-input
          class="Form__field"
          outlined
          v-model="text"
          label="Nombre de Usuario"
          :rules="[
            val => !!val || 'Campo requerido'
          ]"
        />
        <q-input
          class="Form__field"
          outlined
          type="password"
          v-model="password"
          label="Contraseña"
          :rules="[
            val => !!val || 'Campo requerido'
          ]"
        />

        <div class="FormSubmit">
          <q-btn
            type="submit"
            class="Form__btn"
            label="Iniciar Sesión"
            color="primary"
            :loading="loading"
            unelevated
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AdminLogin",
  data: () => ({
    text: null,
    password: null,

    loading: null
  }),
  methods: {
    onSubmit() {
      let req = {
        email: this.text,
        password: this.password
      };
      
      this.$axios
        .post("/admin/login", req)
        .then((response) => {
          if (response.status === 200)
          {
            localStorage.setItem('adminToken', res.data.token)
            router.push("/admin")
          }
          else
          {
            this.$q.notify({
              type: "negative",
              message: `Incorrect email or password`
            });
          }
          this.loading = false;
        })
    },
  },
};
</script>

<style lang="scss">
// $
.LoginForm {
  @include content-width;

  .FormSubmit {
    margin-top: 50px;
    text-align: center;
  }

  .Form__btn {
    width: 100%;
    letter-spacing: 1px;
    border-radius: 10px;
    font-size: 16px;
    @media (min-width: $breakpoint-md-min) {
      width: 90%;
    }
  }
}
.LoginForm__wrapper {
  padding: 50px 25%;
}
.LoginForm__title {
  @include font(26px, bold, $primary);
  margin-top: 0;
  margin-bottom: 50px;
  text-align: center;
}

</style>
