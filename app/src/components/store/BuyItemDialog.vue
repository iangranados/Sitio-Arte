<template>
  <q-dialog ref="BuyItemDialog" @hide="onDialogHide">
    <q-card class="BuyItemDialog">
      <q-card-section class="row items-center q-pb-non ">
        <div class="BuyItemDialog__title">Solicitar Compra</div>
        <q-space />
        <q-btn icon="close" color="red-lips" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <div class="row justify-around items-center informationRow">
          <q-img
            class="BuyItemDialog__thumbnail"
            v-if="item.img"
            :src="item.img"
          />

          <div class="text">
            <h3>{{ this.item.categoria }}</h3>
            <h1>{{ this.item.titulo }}</h1>
          </div>

          <p>Precio: {{ this.item.precio }}</p>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onFormSubmit">
          <div class="row justify-around q-mt-lg">
            <q-input
              class="Form__field col-8"
              v-model="correo"
              name="correo"
              id="correo"
              label="Correo electronico"
              :rules="[(val) => !!val || 'Campo requerido']"
              :disable="loading"
              outlined
            />

            <q-btn
              class="BuyItemDialog__btn"
              type="submit"
              label="Solicitar"
              color="primary"
              :loading="loading"
              unelevated
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "BuyItemDialog",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      url: this.item.img || null,
      title: this.item.titulo,
      category: this.item.categoria,
      price: this.item.precio,
      loading: false,
      correo: null,
    };
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.BuyItemDialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.BuyItemDialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onFormSubmit() {
      // this.loading = true;
      // const values = {
      //   link: this.link,
      // title: this.title,
      //   price:this.price,
      //   category:this.category
      // };
      // this.$axios
      //   .patch("modificarImagen/" + this.item._id, values)
      //   .then((response) => {
      //     if (response.status === 202) {
      //       this.$q.notify({
      //         type: "positive",
      //         message: `Cambios guardados.`,
      //       });
      //       this.$emit("ok");
      //       this.hide();
      //     } else {
      //       this.$q.notify({
      //         type: "negative",
      //         message: `Oops, algo salió mal. Intenta otra vez.`,
      //       });
      //     }
      //     this.loading = false;
      //   })
      //   .catch((e) => {
      //     this.loading = false;
      //     this.$q.notify({
      //       type: "negative",
      //       message: `Oops, algo salió mal. Intenta otra vez.`,
      //     });
      //   });
    },

    urlFromFile() {
      if (FileReader && this.file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.file_url = reader.result;
        };

        reader.readAsDataURL(this.file);
      }
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: "Archivo inválido",
      });
    },
  },

  computed: {
    thumbnail: function () {
      return this.file_url || this.item.image;
    },
    category_options_loading() {
      return this.$store.state.types.loading;
    },
    category_options() {
      return this.$store.getters["types/typesAsListOfStrings"];
    },
  },
  mounted() {
    if (this.category_options.length <= 0) {
      this.$store.dispatch("types/loadTypes").catch(() => {
        this.$q.notify({
          type: "negative",
          message: `Couldn't load commissions info. Try again later.`,
        });
      });
    }
  },
};
</script>

<style lang="scss">
// $
.BuyItemDialog {
  padding: 25px 24px;
  min-width: 90vw;

  @media (min-width: $breakpoint-md-min) {
    padding: 20px 30px;
    min-width: 70vw;
  }
  .BuyItemDialog__title {
    @include font(24px, bold, $primary);
  }

  .BuyItemDialog__thumbnail {
    height: 200px;
    // width: 100%;
    max-width: 30%;
    margin-bottom: 20px;
  }

  .BuyItemDialog__btn {
    border-radius: 10px;
    letter-spacing: 1px;
    // min-width: 48%;
    font-size: 16px;
  }
}

.text {
  h1 {
    // width: 1920px;

    // height: 1080px;

    // padding: 54px 0 0;

    // border: solid 1px #707070;
    height: 21px;

    margin: 8px 117px 99px 0px;

    font-family: Gotham;

    font-size: 20px;

    font-weight: normal;

    font-stretch: normal;

    font-style: normal;

    line-height: 1.1;

    letter-spacing: normal;

    text-align: left;
  }
  h3 {
    font-family: Gotham;

    font-size: 16px;

    font-weight: 500;

    font-stretch: normal;

    font-style: normal;

    line-height: 1.38;

    letter-spacing: normal;

    text-align: left;
    color: grey;
  }
}
</style>
