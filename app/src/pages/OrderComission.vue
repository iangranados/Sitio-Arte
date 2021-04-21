<template>
  <q-page class="OrderComission">
  	<h1 class="SectionTitle">Ordenar nueva comision</h1>
		<q-form @submit="onSubmit" class="OrderComission__Form">
			<div class="FormSection">
				<h2 class="FormSection__title">Sobre ti</h2>
				<q-input
					class="Form__field"
					outlined
					v-model="name"
					label="Nombre o nickname (para saber cómo decirte)"
					:rules="[
						val => !!val || 'Este campo es requerido'
					]"
				/>
				<div class="row q-col-gutter-x-lg">
					<q-select
						class="Form__field col-xs-12 col-md-6"
						outlined
						v-model="contact_type"
						:options="contact_options"
						label="Medio de contacto preferido"
						:rules="[
							val => !!val || 'Este campo es requerido'
						]"
					/>
					<q-input
						class="Form__field col-xs-12 col-md-6"
						outlined
						v-model="contact_username"
						label="Username de contacto (Discord, Twitter...)"
						:rules="[
							val => !!val || 'Este campo es requerido'
						]"
					/>
				</div>
			</div>
			<div class="FormSection">
				<h2 class="FormSection__title">Sobre la comisión</h2>
				<div class="row q-col-gutter-x-lg">
					<q-select
						class="Form__field col-xs-12 col-md-6"
						outlined
						v-model="category"
						:options="category_options"
						label="Tipo de comisión"
						:rules="[
							val => !!val || 'Este campo es requerido'
						]"
					/>
				</div>
				<q-input
					class="Form__field"
		      v-model="description"
		      label="Describe lo que buscas..."
		      outlined
		      type="textarea"
		      :rules="[
						val => !!val || 'Este campo es requerido'
					]"
		    />
			</div>

      <div class="FormSubmit">
        <q-btn
          type="submit"
          class="Form__btn"
          label="Ordenar Comisión"
          color="primary"
          :loading="loading"
          unelevated
        />
      </div>
    </q-form>
  </q-page>
</template>



<script>
export default {
  name: "OrderComission",
  data: () => ({
    name: null,
    contact_type: null,
    contact_username: null,
    category: null,
    description: null,

    contact_options: ["Discord", "Instagram", "Twitter", "Correo"],
    category_options: ["Emotes", "Badges", "Full-body", "Custom"],

    loading: false,
  }),
  methods: {
  	onSubmit () {
  		this.loading = true

  		let req = { 
  			name: this.name, 
  			contact: this.contact_type,
  			username: this.contact_username,
  			tipo: this.category,
  			description: this.description
  		};

  		this.$axios.post('/crearComision', req).then(response => {
  			let token = response.data?.token;
  			if (!!token) {
  				this.$q.dialog({
  					component: () => import('../components/comissions/OrderSuccessDialog.vue'),
						parent: this,
						confirmationCode: token
  				})
  			} else {
	  			this.$q.notify({
		        type: 'negative',
		        message: `Algo salió mal, intenta otra vez :c`
		      })
  			}
  			this.loading = false
  		}).catch((e) => {
  			console.error(e)
  			this.loading = false
  			this.$q.notify({
	        type: 'negative',
	        message: `Algo salió mal, intenta otra vez :c`
	      })
  		})
  	}
  }
}
</script>

<style lang="scss">
// $
.OrderComission {
  @include content-width;
  padding: 30px 20px;
}

.OrderComission__Form {
  margin-bottom: 50px;
}

.FormSection {
  margin-bottom: 30px;
}

.FormSection__title {
  @include font(18px, bold, $gray);
  margin: 0 0 5px;
}

.Form__field {
  margin-bottom: 20px;
  .q-field__control {
    border-radius: 10px;
  }
}
.FormSubmit {
  text-align: right;
}

.Form__btn {
  width: 100%;
  letter-spacing: 1px;
  border-radius: 10px;
  font-size: 16px;
  @media (min-width: $breakpoint-md-min) {
    width: 47%;
  }
}
</style>
