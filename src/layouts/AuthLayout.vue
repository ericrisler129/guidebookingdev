<template>
  <v-app id="auth">
    <v-slide-y-transition mode="out-in">
      <router-view />
    </v-slide-y-transition>
  </v-app>
</template>

<script>

export default {
  name: 'AuthLayout',

  data: () => ({
    //
  })
}
</script>

<style lang="scss">
</style>
