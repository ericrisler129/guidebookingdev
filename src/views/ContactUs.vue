<template>
  <div class="white-bg page-wrapper pb-9">
    <div class="w-100 page-header d-flex flex-column align-center justify-center px-4">
      <h1 class="text-center white--text mb-1">Contact Us</h1>
      <p class="text-center white--text mb-0">Home / Contact Us</p>
    </div>
    <v-container class="py-16 mt-9 new-container">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="font-weight-medium mb-7">Our Offices</h2>
          <div
            v-for="(item, index) in offices"
            :key="index"
            class="mb-12"
          >
            <h4 class="office-city mb-6">{{ item.city }}</h4>
            <div class="info-row d-flex mb-3">
              <div class="info-icon mr-5">
                <v-icon>mdi-map-marker-outline</v-icon>
              </div>
              <div class="info-content">
                {{ item.address }}
              </div>
            </div>
            <div class="info-row d-flex mb-3">
              <div class="info-icon mr-5">
                <v-icon>mdi-phone-outline</v-icon>
              </div>
              <div class="info-content">
                {{ item.phone }}
              </div>
            </div>
            <div class="info-row d-flex mb-6">
              <div class="info-icon mr-5">
                <v-icon>mdi-email-outline</v-icon>
              </div>
              <div class="info-content">
                {{ item.email }}
              </div>
            </div>
            <a href="google.com" class="office-direction">Get Direction</a>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="filter-form ml-auto" :max-width="470">
            <v-form>
              <h2 class="font-weight-medium mb-6">Get in touch with us</h2>
              <v-text-field
                v-model="form.name"
                placeholder="Name"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5 rounded-8"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                placeholder="Email"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5 rounded-8"
              ></v-text-field>
              <v-text-field
                v-model="form.phone"
                placeholder="Phone"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5 rounded-8"
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                placeholder="Message"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                rows="4"
                class="mb-5 rounded-8"
              ></v-textarea>
              <v-btn
                color="primary"
                class="text-none body-1 rounded-8"
                :height="55"
                :width="250"
                elevation="0"
                @click="submit"
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',

  data () {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      },
      offices: [{
        city: 'London',
        address: '329 Queensberry Street, North Melbourne VIC 3051, Australia.',
        email: 'support@skola.com',
        phone: '123456254'
      }, {
        city: 'New York',
        address: '329 Queensberry Street, North Melbourne VIC 3051, Australia.',
        email: 'support@skola.com',
        phone: '123456254'
      }]
    }
  },

  methods: {
    submit () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: url('../assets/contact_us/banner.png'), #1D293E;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;

  h1 {
    font-size: 30px;
    line-height: 43px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
  }
}

.filter-form {
  background: #F4F4F4;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 8px;

  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #222222;
  }

  .category-list {
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
    color: #717171;
  }
}

.info-row {
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #717171;
}

.office-city {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #222222;
}

.office-direction {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #234DD4;
}
</style>
