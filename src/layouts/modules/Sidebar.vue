<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="0"
    width="280"
    id="main-sidebar"
    :mobile-breakpoint="1382"
    app
  >
    <v-list expand nav class="mt-1">
      <template v-for="(item, i) in items">
        <!---If Sidebar Caption -->
        <v-row v-if="item.header" :key="item.header" align="center">
          <v-col cols="12">
            <v-subheader v-if="item.header" class="d-block text-truncate">{{ item.header }}</v-subheader>
          </v-col>
        </v-row>
        <!---If Sidebar Caption -->
        <BaseItemGroup
          v-else-if="item.children"
          :key="`group-${i}`"
          :item="item"
        ></BaseItemGroup>

        <BaseItem v-else :key="`item-${i}`" :item="item" />
      </template>
      <!---Sidebar Items -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',

  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    screenWidth: null
  }),

  computed: {
    ...mapState(['sidebarShow']),
    Sidebar_drawer: {
      get () {
        return this.sidebarShow
      },
      set (val) {
        this.$store.commit('SET_SIDEBAR_DRAWER', val)
      }
    },
    items () {
      const navItems = [{
        icon: 'mdi-chart-bar',
        title: 'Book a Guide',
        to: '/dashboard'
      }, {
        icon: 'mdi-chart-pie',
        title: 'Countries',
        to: '/countries'
      }, {
        icon: 'mdi-account-group',
        title: 'Cities',
        to: '/cities'
      }, {
        icon: 'mdi-account-group',
        title: 'Guides',
        to: '/guides'
      }, {
        icon: 'mdi-account-group',
        title: 'Blog',
        to: '/blog'
      }, {
        icon: 'mdi-account-group',
        title: 'Login',
        to: '/auth'
      }, {
        icon: 'mdi-account-group',
        title: 'Signup',
        to: '/auth'
      }]

      if (this.screenWidth < 800) {
        navItems.push({
          icon: 'mdi-account-group',
          title: 'Book an adventure',
          to: '/book'
        })
        navItems.push({
          icon: 'mdi-account-group',
          title: 'Explore the World',
          to: '/explore'
        })
      }
      return navItems
    }
  },

  methods: {
    resizeHandler () {
      this.screenWidth = window.innerWidth
      if (window.innerWidth > 1382) {
        this.$store.commit('SET_SIDEBAR_DRAWER', false)
      }
    }
  },

  mounted () {
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang="scss" scoped>
#main-sidebar {
  background-color: rgba(29, 41, 62, 0.85) !important;
  box-shadow:1px 0 20px rgba(0,0,0,.08);
  top: 0px!important;
  max-height: 100%!important;
  box-shadow: none;

  .v-navigation-drawer__border {
    display: none;
  }

  ::v-deep .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    padding-top: 90px;
  }

  .logo-icon {
    border-bottom: 2px solid rgb(226, 232, 240);
  }

  .v-list-group {
    margin-bottom: 4px!important;
  }

  .v-list-item, .v-icon {
    color: white!important;
  }

  ::v-deep .v-list-item__icon .v-icon {
    color: white!important;
  }
}
</style>
