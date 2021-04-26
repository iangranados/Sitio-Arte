<template>
  <q-dialog ref="OrderSuccessDialog" class="OrderSuccessDialog" persistent>
		<div class="OrderSuccessDialog__content">
				<q-img class="OrderSuccessDialog__image" src="~assets/images/order_success.png" alt="Solicitud de comisión enviada" />
				<h2 class="OrderSuccessDialog__title">Solicitud de comisión enviada</h2>
				<p>
					Tu solicitud será revisada y se te notificará cualquier duda o detalle.
        </p>
        <p>
          Por favor guarda el siguiente <strong>token de acceso</strong> para poder darle seguimiento a tu solicitud en la sección de Comisiones Activas
				</p>
				<h3 class="OrderSuccessDialog__confirmationCode">{{ confirmationCode }}</h3>
				<q-btn v-close-popup to="/comisiones/board" class="OrderSuccessDialog__btn" label="Ir a Comisiones activas" unelevated color="primary" />
		</div>
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
