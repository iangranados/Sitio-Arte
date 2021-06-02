<template>
  <q-page class="LoginForm">
    <div class="LoginForm__wrapper">
      <h2 class="LoginForm__title">Log in</h2>
      <q-form @submit="onSubmit">
        <q-input
          class="Form__field"
          outlined
          v-model="email"
          label="Email"
          :rules="[
            val => !!val || 'Email is required'
          ]"
        />
        <q-input
          class="Form__field"
          outlined
          type="password"
          v-model="password"
          label="Password"
          :rules="[
            val => !!val || 'Password is required'
          ]"
        />

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
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AdminLogin",
  data: () => ({
    email: null,
    password: null,

    loading: null
  }),
  methods: {
    onSubmit() {
      this.loading = true;

      this.$store.dispatch('auth/login', {email: this.email, password: this.password})
        .then(() => {
          this.loading = false;
          this.$q.notify("Logged in");
          this.$router.push('/admin')
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.status === 400) {
            this.$q.notify({
              type: 'warning',
              message: 'Incorrect password or username.'
            })
          } else {
            this.$q.notify({
              type: 'warning',
              message: 'Something went wrong. Try again later.'
            })
          }
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
