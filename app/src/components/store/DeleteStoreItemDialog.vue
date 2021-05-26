<template>
  <q-dialog ref="DeleteStoreItemDialog" @hide="onDialogHide">
    <q-card class="DeleteStoreItemDialog">
      <q-card-section class="row items-center q-pb-none">
        <div class="DeleteStoreItemDialog__title">Eliminar oferta</div>
        <q-space />
        <q-btn icon="close" color="red-lips" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <p>
          ¿Estás segura de querer eliminar esta oferta de tu tienda? Ya no
          habría vuelta atrás si la eliminas.
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          class="DeleteStoreItemDialog__btn"
          label="Cancelar"
          color="gray"
          :disable="loading"
          outline
          v-close-popup
        />
        <q-btn
          @click="onDeleteItem"
          class="DeleteStoreItemDialog__btn"
          label="Eliminar"
          color="red-lips"
          :loading="loading"
          unelevated
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "DeleteStoreItemDialog",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.DeleteStoreItemDialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.DeleteStoreItemDialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onDeleteItem() {
      this.loading = true;

      this.$axios
        .delete("borrarItem/" + this.item._id)
        .then((response) => {
          if (response.status === 200) {
            this.$q.notify({
              type: "positive",
              message: `Imagen eliminada.`,
            });
            this.$emit("ok");
            this.hide();
          } else {
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
  
    loadStore: function() {
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
    if (this.tipos.length <= 0) {
      this.$store.dispatch('types/loadTypes')
        .catch(() => {
          this.$q.notify({
            type: 'negative',
            message: `Couldn't load commissions info. Try again later.`
          })
        })
    }
  },
};
</script>

<style lang="scss">
// $
.DeleteStoreItemDialog {
  padding: 24px;
  min-width: 90vw;

  @media (min-width: $breakpoint-md-min) {
    padding: 28px 30px;
    min-width: 600px;
  }
  .DeleteStoreItemDialog__title {
    @include font(24px, bold, $primary);
  }

  p {
    font-size: 16px;
  }

  .DeleteStoreItemDialog__btn {
    border-radius: 10px;
    letter-spacing: 1px;
    min-width: 200px;
    font-size: 15px;
  }
}
</style>
