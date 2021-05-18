<template>
  <q-dialog ref="ModifyStoreItemDialog" @hide="onDialogHide">
    <q-card class="ModifyStoreItemDialog">
      <q-card-section class="row items-center q-pb-none">
        <div class="ModifyStoreItemDialog__title">Modificar datos</div>
        <q-space />
        <q-btn icon="close" color="red-lips" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-form @submit="onFormSubmit">
          <q-img
            class="ModifyStoreItemDialog__thumbnail"
            v-if="item.link"
            :src="item.link"
          />

          <q-select
            class="Form__field"
            v-model="category"
            :options="options"
            label="Categoria"
            outlined
            :rules="[(val) => !!val || 'Campo requerido']"
            :disable="loading"
          />

          <q-input
            class="Form__field"
            v-model="title"
            name="title"
            id="title"
            type="text"
            label="Titulo"
            :rules="[(val) => !!val || 'Campo requerido']"
            :disable="loading"
            outlined
          />
          <q-input
            class="Form__field"
            v-model="price"
            name="price"
            id="price"
            type="number"
            label="Precio"
            :rules="[(val) => !!val || 'Campo requerido']"
            :disable="loading"
            outlined
          />
          <div class="row justify-between q-mt-lg">
            <q-btn
              v-close-popup
              class="ModifyStoreItemDialog__btn"
              label="Cancelar"
              color="gray"
              :disable="loading"
              outline
            />
            <q-btn
              class="ModifyStoreItemDialog__btn"
              type="submit"
              label="Guardar"
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
  name: "ModifyStoreItemDialog",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      url: this.item.link || null,
      title: this.item.title,
      category: this.item.category,
      price: this.item.price,
      loading: false,

      options: ["Full body", "Portrait", "other"],
    };
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.ModifyStoreItemDialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.ModifyStoreItemDialog.hide();
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
  },
};
</script>

<style lang="scss">
// $
.ModifyStoreItemDialog {
  padding: 25px 24px;
  min-width: 90vw;

  @media (min-width: $breakpoint-md-min) {
    padding: 20px 30px;
    min-width: 600px;
  }
  .ModifyStoreItemDialog__title {
    @include font(24px, bold, $primary);
  }

  .ModifyStoreItemDialog__thumbnail {
    height: 200px;
    width: 100%;
    margin-bottom: 20px;
  }

  .ModifyStoreItemDialog__btn {
    border-radius: 10px;
    letter-spacing: 1px;
    min-width: 48%;
    font-size: 16px;
  }
}
</style>
