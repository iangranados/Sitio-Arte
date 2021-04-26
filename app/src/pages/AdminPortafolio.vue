<template>
  <q-page class="AdminPortafolio">
    <h1 class="AdminPortafolio__title">Portafolio</h1>
    <div class="text-right AdminPortafolio__actions">
      <q-btn @click="onAddNewImage" class="AdminPortafolio__btn" label="Subir nueva imágen" color="primary" no-caps unelevated/>
    </div>
    <div class="AdminPortafolio__list row q-col-gutter-md">
      <div class="col-xs-12 col-sm-4 col-md-3" v-for="item in portfolio" :key="item.id">
        <PortfolioAdminItem :item="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AdminPortafolio",
  components: {
    PortfolioAdminItem: () => import('../components/portfolio/PortfolioAdminItem.vue')
  },
  data: () => ({
    portfolio: [
      {
        id: 1,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/240/cat'
      },
      {
        id: 2,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/241/cat'
      },
      {
        id: 3,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/321/240/cat',
      },
      {
        id: 4,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/242/cat'
      },
      {
        id: 5,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/322/240/cat'
      },
      {
        id: 6,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/243/cat'
      },
      {
        id: 7,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/323/240/cat'
      },
      {
        id: 8,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/244/cat'
      },
      {
        id: 9,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/324/240/cat'
      },
      {
        id: 10,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/240/cat'
      },
      {
        id: 11,
        lastUpdate: '04/23/20 - 13:01',
        url: 'https://www.own3d.tv/es/producto/twitch-sub-emote-mercy-love-overwatch/',
        image: 'https://loremflickr.com/320/245/cat'
      },
    ]
  }),
  methods: {
    onAddNewImage () {
      this.$q.dialog({
        component: () => import("../components/portfolio/AddPortfolioItemDialog.vue"),
        parent: this
      });
    }
  }
};
</script>

<style lang="scss">
// $
.AdminPortafolio {
  padding: 50px 24px;

  @media (min-width: $breakpoint-md-min) {
    padding: 70px 50px;
  }
}

.AdminPortafolio__title {
  @include font(26px, bold, $primary);
  margin: 0 0 35px;
}

.AdminPortafolio__actions {
  margin-bottom: 35px;
}

.AdminPortafolio__btn {
  border-radius: 10px;
  letter-spacing: 1px;
}

.AdminPortafolio__list {
}
</style>
