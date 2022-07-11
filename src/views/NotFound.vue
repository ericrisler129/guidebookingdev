<template>
  <div class="white-bg page-wrapper">
    <v-container class="pt-16 new-container">
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center flex-column not-found-section">
          <v-img src="@/assets/404.svg" />
          <h1 class="text-center mt-16">Ohh! Page Not Found</h1>
          <p class="text-center mb-7 grey--text">We can't seem to find the page you're looking for</p>
          <div class="d-flex border pa-1 align-center rounded subscribe-form">
            <v-text-field
              v-model="email"
              placeholder="Enter your email"
              required
              background-color="white"
              filled
              dense
              rounded
              hide-details
              type="email"
            ></v-text-field>
            <v-btn
              dark
              color="primary"
              height="50px"
              width="180px"
              class="text-none"
              @click="subscribe"
            >
              Subscribe
            </v-btn>
          </div>
          <a href="/" class="mt-4 primary--text text-decoration-underline font-weight-regular">Back to home</a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

  data () {
    return {
      email: null
    }
  },

  methods: {
    subscribe () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 35px;
  line-height: 50px;
  color: #222;

  @media (min-width: 960px) {
    font-size: 50px;
    line-height: 72px;
  }
}

.not-found-section {
  padding-bottom: 80px;
  padding-top: 56px;

  @media (min-width: 960px) {
    padding-bottom: 160px;
    padding-top: 136px;
  }
}

.subscribe-form {
  max-width: 568px;
  width: 100%;
}
</style>
