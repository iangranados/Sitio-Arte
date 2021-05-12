<template>
   <q-dialog v-model="prompt" >
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your Token</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Submit" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'OrderSuccessDialog',
  props: {
    confirmationCode: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      state: 'initial',
      email: null
    }
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.OrderSuccessDialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.OrderSuccessDialog.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss">
// $
.OrderSuccessDialog{

  .OrderSuccessDialog__content {
    background-color: white;
    border-radius: 15px;
    padding: 45px 30px 50px;
    text-align: center;
    width: 600px;
    max-width: 80vw;

    @media (min-width: $breakpoint-md-min) {
      padding: 50px 50px 58px;
    }
  }

  .OrderSuccessDialog__image {
    width: 40%;
  }

  .OrderSuccessDialog__title {
    @include font(24px, bold, $primary);
    margin-bottom: 10px;
    @media (min-width: $breakpoint-md-min) {
      font-size: 26px;
    }
  }

  p {
    font-size: 14px;
  }

  .OrderSuccessDialog__confirmationCode {
    @include font(26px, bold, $gray);
    margin: 10px 0 35px;
    @media (min-width: $breakpoint-md-min) { 
      font-size: 28px;
    }
  }

  .OrderSuccessDialog__btn {
    border-radius: 10px;
    letter-spacing: 1px;
  }

}
</style>
