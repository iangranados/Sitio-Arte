<template>
  <q-dialog ref="CommissionViewDialog" @hide="onDialogHide">
    <q-card class="CommissionDetailView" style="width: 1000px; max-width: 80vw;">
      <q-toolbar>
        <q-space />
        <q-btn flat round dense icon="close" color="red-lips" v-close-popup />
      </q-toolbar>
      <div class="CommissionDetailView__content">

        <div class="CommissionDetailView__header row q-col-gutter-xl">
          <div class="col-12 col-md-8">
            <div class="CommissionDetailView__section">
              <h4 class="CommissionDetailView__status">{{commission.status}}</h4>
              <h3 class="CommissionDetailView__title">{{ commission.tipo + ' - ' + commission.name }}</h3>
            </div>
          </div>
          <!--<div class="col-12 col-md-4">
            <div class="CommissionDetailView__section">
              <p class="CommissionDetailView__timestamps">
                Ordered on March 3rd, 2021
                <br />
                Accepted on March 7th, 2021
              </p>
            </div>
          </div>-->
        </div>

        <div class="row q-col-gutter-x-xl">
          <div class="col-12 col-md-8">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Description</h5>
              <p class="CommissionDetailView__description cursor-pointer">
                {{description}}
                <q-popup-edit
                  v-model="description"
                  label-set="Save"
                  @save="onEditDescription"
                  buttons
                  auto-save>
                  <p>Edit Description</p>
                  <q-input v-model="description" dense autofocus />
                </q-popup-edit>
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Contact info</h5>
              <p class="CommissionDetailView__contact cursor-pointer">
                Requested by: {{name}}
                <q-popup-edit
                  v-model="name"
                  label-set="Save"
                  @save="onEditContactinfo"
                  buttons
                  auto-save>
                  <p>Requested by:</p>
                  <q-input v-model="name" dense autofocus />
                </q-popup-edit>
              </p>
              <p class="CommissionDetailView__contact cursor-pointer">
                Contact method: {{contact}}
                <q-popup-edit
                  v-model="contact"
                  label-set="Save"
                  @save="onEditContactinfo"
                  buttons
                  auto-save>
                  <p>Contact method:</p>
                  <q-input v-model="contact" dense autofocus />
                </q-popup-edit>
              </p>
              <p class="CommissionDetailView__contact cursor-pointer">
                Contact: {{username}}
                <q-popup-edit
                  v-model="username"
                  label-set="Save"
                  @save="onEditContactinfo"
                  buttons
                  auto-save>
                  <p>Contact:</p>
                  <q-input v-model="username" dense autofocus />
                </q-popup-edit>
              </p>
            </div>
          </div>
        </div>

        <div class="row q-col-gutter-x-xl">
          <div class="col-12 col-md-8">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Messages</h5>
              <div v-if="comments.length > 0" class="CommissionDetailView__Messages" >
                <q-chat-message
                  v-for="(c, index) in commentsReversed"
                  :key="index"
                  :name="c.user"
                  :text="[c.comment]"
                  :sent="c.user === 'Lelemoonn'"
                />
              </div>
              <p v-else class="CommissionDetailView__noMessages">Start the conversation by sending a new message</p>
              <q-form @submit="onSendMessage">
                <q-input 
                  v-model="message"
                  placeholder="Write here..."
                  outlined
                >
                  <template v-slot:append>
                    <q-btn v-if="message !== ''" @click="onSendMessage" icon="send" color="primary" round flat />
                  </template>
                </q-input>
              </q-form>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="CommissionDetailView__section">
              <h5 class="CommissionDetailView__SectionTitle">Progress</h5>
              <p>{{commission.avance || 0}}%</p>
            </div>
            <div class="CommissionDetailView__section" v-if="commission.archivos && commission.archivos.length > 0">
              <h5 class="CommissionDetailView__SectionTitle">Attachments</h5>
              <div class="row q-col-gutter-md">
                <div v-for="(file, index) in commission.archivos" :key="index" class="col-6">
                  <q-img :src="file" :ratio="1" class="CommissionDetailView__image">
                    <q-btn icon="download" type="a" :href="file" color="dark" size="10px" round dense unelevated download/>
                  </q-img>
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
  name: "CommissionViewDialog",
  props: {
    commission: {
      type: Object,
      required: true,
    }
  },
  mounted () {
    this.description = this.commission.description;
    this.name = this.commission.name;
    this.contact = this.commission.contact;
    this.username = this.commission.username;
    this.comments = this.commission.comments ? this.commission.comments : [];
  },
  data: () => ({
    description: '',
    name: '',
    contact: '',
    username: '',

    message: '',

    comments: []
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

    onEditDescription () {
      const params = {
        token: this.commission.token,
        description: this.description,
      }

      this.$axios.patch('/modificarComision/' + this.commission._id, params)
        .catch(() => {
          this.description = this.commission.description
          this.$q.notify({
            type: 'negative',
            message: `Couldn't update description`
          })
        })
    },

    onEditContactinfo () {
      const params = {
        token: this.commission.token,
        name: this.name,
        contact: this.contact,
        username: this.username
      }

      this.$axios.patch('/changeContactInfo/' + this.commission._id, params)
        .catch(() => {
          this.name = this.commission.name
          this.contact = this.commission.contact
          this.username = this.commission.username

          this.$q.notify({
            type: 'negative',
            message: `Couldn't update contact information`
          })
        })
    },

    onSendMessage () {
      if(this.message) {
        const msg = {
          user: this.name,
          comment: this.message,
          token: this.commission.token,
        }

        this.comments.push({user: this.name, comment: this.message})
        this.$axios.patch('/addComment/' + this.commission._id, msg)
          .catch(() => {
            this.comments.pop()
            this.$q.notify({
              type: 'negative',
              message: `Couldn't send message, try again later.`
            })
          })

        this.message = ''
      }
    }
  },
  computed: {
    commentsReversed: function () {
      return this.comments.slice().reverse()
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