<template>
  <v-app id="inspire">
    <Header v-model="expandOnHover"></Header>
    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
    <Sidebar
      :expand-on-hover.sync="expandOnHover"
    ></Sidebar>
    <Footer />
  </v-app>

</template>

<script>
import Header from './modules/Header'
import Footer from './modules/Footer'
import Sidebar from './modules/Sidebar'
export default {
  name: 'FullLayout',

  components: {
    Header,
    Footer,
    Sidebar
  },

  props: {
    source: String
  },

  data: () => ({
    expandOnHover: false
  })
}
</script>

<style lang="scss" scoped>
.theme--light .v-main {
  background: #f1f5f9;
  padding-top: 0!important;
}
</style>
