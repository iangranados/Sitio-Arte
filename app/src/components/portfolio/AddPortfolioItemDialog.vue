<template>
  <q-dialog ref="AddPortfolioItemDialog" >
		<q-card class="AddPortfolioItemDialog" >
        <q-card-section class="row items-center q-pb-none">
          <div class="AddPortfolioItemDialog__title">Agregar imagen</div>
          <q-space />
          <q-btn icon="close" color="red-lips" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form @submit="onFormSubmit">
            
            <q-file
              class="Form__field"
              v-model="file"
              @input="urlFromFile"
              name="file"
              id="file"
              label="Sube un archivo"
              outlined
              accept=".jpg, .png, image/*"
            >
              <template v-slot:prepend>
                <q-avatar>
                  <q-icon name="attach_file" />
                </q-avatar>
              </template>
            </q-file>

            <q-img class="AddPortfolioItemDialog__thumbnail" v-if="file_url" :src="file_url" />

            <q-input
              class="Form__field"
              v-model="url"
              name="url"
              id="url"
              label="URL (Twitter, Instagram, ...)"
              outlined
            />
            <div class="text-right">
              <q-btn type="submit" label="Agregar" color="primary" unelevated/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddPortfolioItemDialog',
  data () {
    return {
      file: null,
      file_url: null,
      url: null
    }
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.AddPortfolioItemDialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.AddPortfolioItemDialog.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    onFormSubmit () {
      let values = {
        file: this.file,
        url: this.url
      }
      console.log(values)
    },
    
    urlFromFile () {
      if(FileReader && this.file) {
        const reader = new FileReader()
        console.log('hola')
        reader.onload = () => {
          console.log(reader.result)
          this.file_url = reader.result
        }

        reader.readAsDataURL(this.file)
      }
    }
  }
}
</script>

<style lang="scss">
// $
.AddPortfolioItemDialog{
  padding: 30px 24px;
  min-width: 90vw;

  @media (min-width: $breakpoint-md-min) {
    padding: 40px 30px;
    min-width: 600px;
  }
  .AddPortfolioItemDialog__title {
    @include font(24px, bold, $primary);
  }

  .AddPortfolioItemDialog__thumbnail {
    height: 150px;
    width: 50%;
    margin-bottom: 20px;
  }
}
</style>
