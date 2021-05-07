<template>
  <q-dialog
    ref="TokenRequestDialog"
    class="TokenRequestDialog"
    @hide="onDialogHide"
    persistent
  >
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Your Token</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="token"
          autofocus
          @keyup.enter="prompt = false"
		  label="Token"
        />
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
  name: "TokenRequestDialog",
  data() {
    return {
	  token: "",
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
  },
};
</script>

<style lang="scss">
// $

</style>
