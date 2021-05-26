<template>
  <div class="KanbanItem" @click="seeDetail" >
    <div class="KanbanItem__content">
      <div
        class="KanbanItem__status"
        :style="{ backgroundColor: colorByStatus }"
      ></div>
      <p class="KanbanItem__title">{{ item.tipo + ' - ' + item.name }}</p>
      <div class="KanbanItem__progressDetails">
        <q-icon
          class="KanbanItem__hasComments"
          name="question_answer"
          color="light-gray"
          v-if="item.hasComments"
        />
        <template v-if="!!item.progress && item.status === 'Working On'">
          <q-linear-progress
            class="KanbanItem__progress"
            size="md"
            :value="item.progress / 100"
          />
          <span class="KanbanItem__progressLabel">{{ item.progress }}%</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted () {
    this.isAuthenticated = this.$route.path === '/admin/comisiones'
  },
  data: () => ({
    isAuthenticated: false,
  }),
  methods: {
    seeDetail () {
      if (this.isAuthenticated) {
        this.$q.dialog({
          component: () => import("./CommissionViewDialogAdmin.vue"),
          parent: this,
          commission: this.item
        });
      } else {
        this.$q.dialog({
          component: () => import("./TokenRequestDialog.vue"),
          parent: this,
          item: this.item,
        })
        .onOk((res) => {
          this.$q.dialog({
            component: () => import("./CommissionViewDialog.vue"),
            parent: this,
            commission: res
          });
        });
      }
    },
  },
  computed: {
    colorByStatus: function () {
      switch (this.item.status) {
        case "Approved":
          return "#ffff6f";
        case "Working On":
          return "#ff8181";
        case "Completed":
          return "#7ae697";
        default:
          return "#ee6700";
      }
    },
  },
};
</script>

<style lang="scss">
// $
.KanbanItem {
  border-radius: 5px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin-bottom: 7px;

  cursor: pointer;

  .KanbanItem__image {
    width: 100%;
  }

  .KanbanItem__content {
    padding: 14px 12px 13px;
  }

  .KanbanItem__status {
    height: 10px;
    width: 30%;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .KanbanItem__title {
    font-size: 15px;
    margin-bottom: 0;
  }

  .KanbanItem__progressDetails {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 3px;
  }

  .KanbanItem__hasComments {
    margin-right: 10px;
  }
  .KanbanItem__progress {
    width: 150px;
    border-radius: 5px;
  }
  .KanbanItem__progressLabel {
    @include font(10px, normal, $gray);
    margin-left: 5px;
  }
}
</style>
