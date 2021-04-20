<template>
  <q-page class="Portfolio">
  	<masonry
  		:cols="{ default: 3, 700: 2 }"
  		:gutter="6">
  		<div class="Portfolio__imageWrapper" v-for="image in images" :key="image.id">
  			<q-img class="Portfolio__image" :src="image.image" @click="openFullscreen(image)"/>
  			<q-btn
  				class="Portfolio__link"
  				:href="image.link"
  				type="a"
  				target="_blank"
  				icon="open_in_new"
  				color="white"
  				flat round dense
  			/>
  		</div>
  	</masonry>

  	<q-dialog v-model="fullscreen">
      <q-img :src="fullscreen_image" />
    </q-dialog>
  </q-page>
</template>



<script>

export default {
  name: 'Portfolio',
  data: () => ({
  	images: [
  		{
  			id: 1,
  			image: 'https://loremflickr.com/320/440/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 2,
  			image: 'https://loremflickr.com/320/340/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 3,
  			image: 'https://loremflickr.com/320/540/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 4,
  			image: 'https://loremflickr.com/320/260/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 5,
  			image: 'https://loremflickr.com/320/245/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 6,
  			image: 'https://loremflickr.com/320/500/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 7,
  			image: 'https://loremflickr.com/320/280/cat',
  			link: 'https://www.twitter.com'
  		},
  		{
  			id: 8,
  			image: 'https://loremflickr.com/320/400/cat',
  			link: 'https://www.twitter.com'
  		}
  	],

  	fullscreen: false,
  	fullscreen_image: null
  }),
  methods: {
  	openFullscreen (image) {
  		this.fullscreen_image = image.image
  		this.fullscreen = true
  	}
  }
}
</script>

<style lang="scss">
// $
.Portfolio {
	@include content-width;
	padding: 40px 0;
}

.Portfolio__imageWrapper {
	margin-bottom: 6px;
	position: relative;
}

.Portfolio__image {
	cursor: zoom-in;
	background-color: $light-gray;
}

.Portfolio__link {
	position: absolute;
	font-size: 10px;
	bottom: 8px;
	right: 8px;
}
</style>
