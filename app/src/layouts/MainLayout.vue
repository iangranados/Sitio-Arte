<template>
  <q-layout view="hhh lpR fFf">

    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    Footer: () => import('components/general/Footer'),
    Header: () => import('components/general/Header')
  },
  data () {
    return {
    }
  }
}
</script>
