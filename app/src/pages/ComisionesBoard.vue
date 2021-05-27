<template>
  <q-page class="ComisionesBoard" :style-fn="myTweak">
    <q-scroll-area horizontal class="Comisiones__ScrollArea">
      <div class="Comisiones__content">
        <Kanban title="Waiting List (Approved)" :items="approved" :loading="approvedLoading"/>
        <Kanban title="Working On" :items="doing" :loading="doingLoading" />
        <Kanban title="Completed" :items="done" :loading="doneLoading" />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "ComisionesBoard",
  components: {
    Kanban: () => import("../components/comissions/Kanban.vue"),
  },
  mounted () {
    this.loadApproved()
    this.loadInProgress()
    this.loadDone()
  },
  data: () => ({
    approvedLoading: false,
    approved: [],

    doingLoading: false,
    doing: [],

    doneLoading: false,
    done: [],
  }),
  methods: {
    loadApproved () {
      this.approvedLoading = true
      this.$axios.get('/comisionesStatus/Approved')
        .then(res => {
          if (res.status === 200) {
            this.approvedLoading = false
            this.approved = res.data
          } else { throw new Error() }
        })
        .catch(e => {
          this.$q.notify({
            type: 'negative',
            message: `Couldn't load commissions.`
          })
        })
    },
    loadInProgress () {
      this.doingLoading = true
      this.$axios.get('/comisionesStatus/Working On')
        .then(res => {
          if (res.status === 200) {
            this.doingLoading = false
            this.doing = res.data
          } else { throw new Error() }
        })
        .catch(e => {
          this.$q.notify({
            type: 'negative',
            message: `Couldn't load commissions.`
          })
        })
    },
    loadDone () {
      this.completedLoading = true
      this.$axios.get('/comisionesStatus/Completed')
        .then(res => {
          if (res.status === 200) {
            this.doneLoading = false
            this.done = res.data
          } else { throw new Error() }
        })
        .catch(e => {
          this.$q.notify({
            type: 'negative',
            message: `Couldn't load commissions.`
          })
        })
    },
    myTweak(offset) {
      return {
        minHeight: offset ? `calc(100vh - ${offset}px)` : "100vh",
        height: offset ? `calc(100vh - ${offset}px)` : "100vh",
      };
    },
  },
};
</script>

<style lang="scss">
// $
.ComisionesBoard {
  width: 90vw;
  margin: 0 auto;
  padding: 30px 0;
  @media (min-width: $breakpoint-md-min) {
    width: 85vw;
  }
}

.Comisiones__ScrollArea {
  height: 100%;
  width: 100%;
}

.Comisiones__content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  height: 100%;
}
</style>
