<template>
  <v-app-bar app clipped-left clipped-right color="white" class="main-header" :class="
          $vuetify.breakpoint.smAndDown
            ? ''
            : (value ? 'sidebar-minified' : 'sidebar-fullshow')
        " dark>
    <!---/Toggle sidebar part -->
    <div>
      <v-app-bar-nav-icon
        color="black"
        @click="
          $vuetify.breakpoint.smAndDown
            ? setSidebarDrawer(!sidebarShow)
            : $emit('input', !value)
        "
      />
    </div>
    <!---/Toggle sidebar part -->
    <v-spacer />
    <!---right part -->
    <v-btn fab icon @click="fullscreen" class="mr-1">
      <v-icon color="black">mdi-fullscreen</v-icon>
    </v-btn>
    <!---User -->
    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn fab icon v-on="on" class="mr-1">
          <v-icon color="black">mdi-account-outline</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="href" class="my-2">
          <v-list-item-icon class="mr-2">
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="signOut" class="my-2">
          <v-list-item-icon class="mr-2">
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!---User -->
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AdminHeader',

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    showLogo: true,
    showSearch: false,
    href () {
      return undefined
    }
  }),

  computed: {
    ...mapState(['sidebarShow'])
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: 'SET_SIDEBAR_DRAWER'
    }),
    showhideLogo () {
      this.showLogo = !this.showLogo
    },
    fullscreen () {
      //
    },
    async signOut () {
      localStorage.clear()
      window.location.href = '/sign-in'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar.main-header {
  &.sidebar-fullshow {
    left: 280px!important;
  }

  &.sidebar-minified {
    left: 0px!important;
  }
}

.hidelogo {
  display: none;
}

.searchinput {
  position: absolute;
  width: 100%;
  margin: 0;
  left: 0;
  z-index: 10;
  padding: 0 15px;
}

.descpart {
  max-width: 220px;
}
</style>
