<template>
  <q-dialog ref="AddStoreItemDialog" @hide="onDialogHide">
    <q-card class="AddStoreItemDialog">
      <q-card-section class="row items-center q-pb-none">
        <div class="AddStoreItemDialog__title">Agregar Oferta a Tienda</div>
        <q-space />
        <q-btn icon="close" color="red-lips" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-form @submit="onFormSubmit">
          <q-img
            class="AddStoreItemDialog__thumbnail"
            v-if="file_url"
            :src="file_url"
          />

          <q-file
            class="Form__field"
            v-model="file"
            @input="urlFromFile"
            name="file"
            id="file"
            label="Sube un archivo"
            outlined
            accept=".jpg, .png, image/*"
            @rejected="onRejected"
            :rules="[(val) => !!val || 'Campo requerido']"
            :disable="loading"
          >
            <template v-slot:prepend>
              <q-avatar>
                <q-icon name="attach_file" />
              </q-avatar>
            </template>
          </q-file>

          <q-select
            class="Form__field"
            v-model="selectedType"
            :options="category_options"
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
            
            label="Precio"
            :rules="[(val) => !!val || 'Campo requerido']"
            :disable="loading"
            outlined
          />

          <div class="text-right">
            <q-btn
              class="AddStoreItemDialog__btn"
              type="submit"
              label="Agregar"
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
  name: "AddStoreItemDialog",
  data() {
    return {
      file: null,
      file_url: null,
      title: null,
      
      loading: false,
      price: null,
      selectedType: null,
    };
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.AddStoreItemDialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.AddStoreItemDialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onFormSubmit() {
      this.loading = true;
      const formData = new FormData();
      formData.append("img", this.file);
      formData.append("titulo", this.title);
      formData.append("categoria", this.selectedType);
      formData.append("precio", this.price);
      this.$axios
        .post("/crearItem", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 201) {
            this.$q.notify({
              type: "positive",
              message: `Imagen agregada exitosamente.`,
            });
            this.$emit("ok");
            this.hide();
          } else {
			  console.log(response);
            this.$q.notify({
              type: "negative",
              message: `Oops, algo salió mal. Intenta otra vez.`,
            });
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          this.$q.notify({
            type: "negative",
            message: `Oops, algo salió mal. Intenta otra vez.`,
          });
        });
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

    loadStore() {
      this.loading = true;



      this.$axios
        .get("/store")
        .then((response) => {
          if (response.status === 200 && Array.isArray(response.data)) {
            this.Store = response.data;
            this.error = null;
          } else {
            this.error = "Algo salió mal, intenta otra vez :c";
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          this.error = "Algo salió mal, intenta otra vez :c";
        });
    },
   
  },
  computed: {
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
.AddStoreItemDialog {
  padding: 30px 24px;
  min-width: 90vw;

  @media (min-width: $breakpoint-md-min) {
    padding: 40px 30px;
    min-width: 600px;
  }
  .AddStoreItemDialog__title {
    @include font(24px, bold, $primary);
  }

  .AddStoreItemDialog__thumbnail {
    height: 200px;
    width: 100%;
    margin-bottom: 20px;
  }

  .AddStoreItemDialog__btn {
    border-radius: 10px;
    letter-spacing: 1px;
    min-width: 200px;
    font-size: 16px;
  }
}
</style>
