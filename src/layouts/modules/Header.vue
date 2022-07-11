<template>
  <v-app-bar
    app
    clipped-left
    clipped-right
    class="main-header"
    height="85"
  >
    <v-toolbar-title class="align-center d-flex" v-if="navbarColor !== 'white'">
      <span class="logo-icon d-flex" aria-controls @click="$router.push('/')">
        <img src="@/assets/logo.svg" height="50px" />
      </span>
    </v-toolbar-title>
    <!---/Toggle sidebar part -->
    <div class="navbar-toggler">
      <v-app-bar-nav-icon
        color="white"
        @click="setSidebarDrawer(!sidebarShow)"
      />
    </div>
    <!---/Toggle sidebar part -->
    <v-spacer />
    <div class="top-nav mr-5">
      <router-link to="/book_guide" class="mx-1 px-0">Book a Guide</router-link>
      <v-menu
        bottom
        left
        offset-y
        open-on-hover
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <span v-on="on" aria-controls class="white--text text-none mx-1 px-0" @click="$router.push('/countries')">
            Countries <v-icon color="white">mdi-chevron-down</v-icon>
          </span>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              United States
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu
        bottom
        left
        offset-y
        open-on-hover
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <span v-on="on" aria-controls class="white--text text-none mx-1 px-0" @click="$router.push('/cities')">
            Cities <v-icon color="white">mdi-chevron-down</v-icon>
          </span>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              United States
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <router-link to="/guides" class="mx-1 px-0">Guides</router-link>
      <router-link to="/blog" class="mx-1 px-0">Blog</router-link>
      <span
        class="mx-1 px-0 white--text"
        aria-controls
        @click="authDialog = true"
      ><v-icon color="white">mdi-account-outline</v-icon> Login/Signup</span>
    </div>
    <div class="nav-actions">
      <v-btn class="text-none primary mr-1"> Book an adventure </v-btn>
      <v-btn class="text-none primary"> Explore the World </v-btn>
    </div>
    <Auth
      v-model="authDialog"
    />
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Auth from '@/components/auth/Auth'

export default {
  name: 'Header',

  components: {
    Auth
  },

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
    },
    authDialog: false
  }),

  computed: {
    ...mapState(['sidebarShow', 'navbarColor'])
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
.hidelogo {
  display: none;
}

.main-header {
  background-color: rgb(29, 41, 62, 0.85)!important;
  border-color: rgb(29, 41, 62, 0.85)!important;
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

.navbar-toggler {
  display: none;

  @media (max-width: 1280px) {
    display: block;
  }
}

.top-nav {
  @media (max-width: 1280px) {
    display: none;
  }

  & > a, > span {
    font-size: 15px;
    color: white;
    padding: 0 15px;
  }
}

.nav-actions {
  @media (max-width: 800px) {
    display: none;
  }
}
</style>
