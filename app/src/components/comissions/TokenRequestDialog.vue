<template>
  <q-dialog
    ref="TokenRequestDialog"
    @hide="onDialogHide"
  >
    <q-card class="TokenRequestDialog" style="min-width: 350px">
      <q-toolbar>
        <q-space />
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        <h3 class="TokenRequestDialog__title">{{item.title}}</h3>
        <p>
          Enter the token you received when ordering this commission to see its details and progress.
        </p>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="processToken" class="TokenRequestDialog__form">
          <q-input
            class="TokenRequestDialog__input"
            v-model="token"
            label="Access Token"
            :error="error"
            :rules="[(val) => !!val || 'Please enter an Access Token']"
            dense
  		      outlined
          />

          <q-btn
            class="TokenRequestDialog__btn"
            label="See Commission"
            color="primary"
            type="submit"
            padding="sm"
            :loading="loading"
            unelevated
          />
      </q-form>
      </q-card-section>
	</q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "TokenRequestDialog",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      token: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.TokenRequestDialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.OrderSuccessDialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    processToken() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        console.log(this.token)
        this.$emit("ok", this.item);
        this.onDialogHide()
      }, 2000);
		  
    },
  },
};
</script>

<style lang="scss">
// $
.TokenRequestDialog {
  border-radius: 12px !important;

  .TokenRequestDialog__title {
  	@include font(24px, bold, $primary);
    margin: 0 0 12px;
  }

  .TokenRequestDialog__form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .TokenRequestDialog__input {
    flex-basis: 100%;
    width: 100%;
    margin-bottom: 12px;
    
    @media (min-width: $breakpoint-md-min) {
      flex-basis: 62%;
      width: 62%;
      margin-bottom: 0;
    }
    .q-field__control {
      border-radius: 10px
    }
  }

  .TokenRequestDialog__btn {
    border-radius: 10px;
    letter-spacing: 1px;
    font-size: 14px;
    @media (min-width: $breakpoint-md-min) {
      width: 35%;
      flex-basis: 35%;
    }
  }
}
</style>
