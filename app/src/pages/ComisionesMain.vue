<template>
  <q-page class="Comisiones">
  	<div class="Comisiones__section">
  		<div class="Comisiones__actions">
				<q-btn class="Comisiones__btn" label="Ver comisiones activas" outline color="primary"/>
				<q-btn class="Comisiones__btn" to="/comisiones/ordenar" label="Ordenar comision" unelevated color="primary" />
			</div>
			<p class="Comisiones__disclaimer">
				*Asegúrate de revisar las reglas en la página de inicio antes de ordenar
				una comisión
			</p>
		</div>
		<q-separator color="light-gray" />
		<div class="Comisiones__section">
			<div class="Comisiones__Category row q-col-gutter-lg">
				<div class="Category__description col-xs-12 col-md-7">
					<h2 class="SectionTitle">Twitch Emotes / FB Stickers</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus
						fugiat itaque? Excepturi laborum saepe consequatur iste recusandae
						aspernatur molestias sit ex itaque
					</p>
					<ul>
						<li>Precio: $$$</li>
						<li>Incluye png, psd, jpg</li>
					</ul>
				</div>
				<div class="Category__placeholder col-xs-12 col-md-5">
					<q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
				</div>
			</div>
		</div>
		<q-separator color="light-gray" />
		<div class="Comisiones__section">
			<div class="Comisiones__Category row q-col-gutter-lg">
				<div class="Category__description col-xs-12 col-md-7">
					<h2 class="SectionTitle">Twitch Badges</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus
						fugiat itaque? Excepturi laborum saepe consequatur iste recusandae
						aspernatur molestias sit ex itaque
					</p>
					<ul>
						<li>Precio: $$$</li>
						<li>Incluye png, psd, jpg</li>
					</ul>
				</div>
				<div class="Category__placeholder col-xs-12 col-md-5">
					<q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
				</div>
			</div>
		</div>
		<q-separator color="light-gray" />
		<div class="Comisiones__section">
			<div class="Comisiones__Category row q-col-gutter-lg">
				<div class="Category__description col-xs-12 col-md-7">
					<h2 class="SectionTitle">Full body</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus
						fugiat itaque? Excepturi laborum saepe consequatur iste recusandae
						aspernatur molestias sit ex itaque
					</p>
					<ul>
						<li>Precio: $$$</li>
						<li>Incluye png, psd, jpg</li>
					</ul>
				</div>
				<div class="Category__placeholder col-xs-12 col-md-5">
					<q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
				</div>
			</div>
		</div>
  </q-page>
</template>

<script>
export default {
  name: 'ComisionesMain'
}
</script>

<style lang="scss">
// $
.Comisiones {
	@include content-width;
}

.Comisiones__section {
	padding: 50px 20px;
}

.Comisiones__actions {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.Comisiones__btn {
	border-radius: 15px;
	letter-spacing: 1px;
	width: 100%;
	margin-bottom: 15px;
	font-weight: 20px;
	@media (min-width: $breakpoint-md-min){
		width: 47%;
	}
}

.Comisiones__disclaimer {
	text-align: right;
	font-size: 12px;
}

.Category__description {
	.SectionTitle {
		font-size: 20px;
		margin-bottom: 10px;
		@media (min-width: $breakpoint-md-min) {
			font-size: 24px
		}
	}
	p, ul>li {
		@media (min-width: $breakpoint-md-min) {
			font-size: 16px
		}
	}
}

.Category__placeholder {
	display: flex;
	align-items: center;
}
</style>
