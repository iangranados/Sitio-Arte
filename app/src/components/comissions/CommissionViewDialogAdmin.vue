<template>
  <q-dialog ref="CommissionViewDialog" @hide="onDialogHide">
    <q-card class="CommissionDetailView" style="width: 1000px; max-width: 80vw;">
      <q-toolbar>
        <q-space />
        <q-btn flat round dense icon="more_horiz" color="gray">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Marcar como "En progreso"</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Marcar como "Completado"</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section color="red-lips">Eliminar Comisión</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn flat round dense icon="close" color="red-lips" v-close-popup />
      </q-toolbar>
      <div class="CommissionDetailView__content">

        <div class="CommissionDetailView__header row q-col-gutter-xl">
          <div class="col-12 col-md-8">
            <div class="CommissionDetailView__section">
              <h4 class="CommissionDetailView__status">{{status}}</h4>
              <h3 class="CommissionDetailView__title">{{commission.title}}</h3>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="CommissionDetailView__section">
              <p class="CommissionDetailView__timestamps">
                Ordered on March 3rd, 2021
                <br />
                Accepted on March 7th, 2021
              </p>
            </div>
          </div>
        </div>

        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-8">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Description</h5>
              <p class="CommissionDetailView__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pulvinar elit, et auctor tellus. Etiam in congue sapien. In viverra sollicitudin viverra. Praesent id velit nec odio luctus dictum. Praesent congue nulla nec arcu malesuada, eget consectetur odio dapibus. Integer efficitur felis nulla, eu aliquam tellus imperdiet quis.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Contact info</h5>
              <p class="CommissionDetailView__contact">Requested by: username</p>
              <p class="CommissionDetailView__contact">Contact method: Discord</p>
              <p class="CommissionDetailView__contact">Contact: @username</p>
            </div>
          </div>
        </div>

        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-8">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Messages</h5>
              <div v-if="true" class="CommissionDetailView__Messages" style="">
                <q-chat-message
                  name="Lelemoon"
                  :text="['Doing fine, it\'ll be ready soon!']"
                  sent
                  stamp="7 minutes ago"
                />
                <q-chat-message
                  name="me"
                  :text="['Hey, how\'s the commission going?']"
                  stamp="7 minutes ago"
                />
              </div>
              <p v-else class="CommissionDetailView__noMessages">Start the conversation by sending a new message</p>
              <q-form>
                <q-input 
                  v-model="message"
                  placeholder="Write here..."
                  outlined
                >
                  <template v-slot:append>
                    <q-icon v-if="message !== ''" name="send" color="primary" class="cursor-pointer" />
                  </template>
                </q-input>
              </q-form>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Porcentaje de avance</h5>
              <q-input v-model="progress" class="Form__field" outlined />
            </div>
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Progreso</h5>
              <div class="row q-col-gutter-md">
                <div v-for="(file, index) in files" :key="index" class="col-6">
                  <q-img :src="file.file" :ratio="1" class="CommissionDetailView__image">
                    <q-btn icon="download" color="dark" size="10px" round dense unelevated/>
                  </q-img>
                  <p class="Image__timestamp">{{file.time}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "CommissionViewDialogAdmin",
  props: {
    commission: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    message: "",

    progress: "50%",

    files: [
      {
        file: 'https://loremflickr.com/g/320/240/paris',
        time: '10/03/2021'
      },
      {
        file: 'https://loremflickr.com/g/320/240/paris',
        time: '10/03/2021'
      },
      {
        file: 'https://loremflickr.com/g/320/240/paris',
        time: '10/03/2021'
      },
      {
        file: 'https://loremflickr.com/g/320/240/paris',
        time: '10/03/2021'
      },
    ]
  }),
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.CommissionViewDialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.CommissionViewDialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },
  },
  computed: {
    status: function () {
      return "Status"
    }
  }
};
</script>

<style lang="scss">
// $

.CommissionDetailView {
  .CommissionDetailView__content {
    padding: 20px 24px;
    @media (min-width: $breakpoint-md-min) {
      padding: 20px 30px 45px 40px;
    }
  }

  .CommissionDetailView__section {
    margin-bottom: 20px;
  }

  .CommissionDetailView__status {
    @include font(20px, bold, $gray);
    margin: 0 0 5px;
  }

  .CommissionDetailView__title {
    @include font(28px, bold, $primary);
    margin: 0 0 5px;
  }

  .CommissionDetailView__timestamps {
    @include font(14px, normal, $gray);
    line-height: 1.5;
    margin: 0;
    @media (min-width: $breakpoint-md-min) {
      margin-top: 15px;
      text-align: right;
    }
  }

  .CommissionDetailView__SectionTitle {
    @include font(16px, bold, $gray);
    margin: 0 0 10px;
  }

  .CommissionDetailView__contact {
    @include font(14px, normal, $gray);
    margin: 0 0 10px;
  }

  .CommissionDetailView__Messages {
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    max-height: 400px;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column-reverse;
  }

  .CommissionDetailView__noMessages {
    @include font(18px, bold, $dark);
    text-align: center;
  }

  .CommissionDetailView__image {
    .q-btn {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
  .Image__timestamp {
    @include font(12px, normal, $gray);
    margin: 5px 0 0;
  }
}
</style>