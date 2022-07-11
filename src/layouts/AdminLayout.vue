<template>
  <v-app id="inspire">
    <AdminHeader v-model="expandOnHover"></AdminHeader>
    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
    <AdminSidebar :expand-on-hover.sync="expandOnHover"></AdminSidebar>
  </v-app>

</template>

<script>
import AdminHeader from './modules/AdminHeader'
import AdminSidebar from './modules/AdminSidebar'
export default {
  name: 'AdminLayout',

  components: {
    AdminHeader,
    AdminSidebar
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
}
</style>
