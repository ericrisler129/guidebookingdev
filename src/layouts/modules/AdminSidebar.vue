<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    mobile-breakpoint="960"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="0"
    width="280"
    :expand-on-hover="expandOnHover"
    app
    id="main-sidebar"
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
  name: 'AdminSidebar',

  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    items: [{
      icon: 'mdi-chart-bar',
      title: 'Dashboard',
      to: '/dashboard'
    }, {
      icon: 'mdi-chart-pie',
      title: 'Merchant Admin',
      group: '/madmin',
      children: [{
        title: 'Corps/Mids Management',
        icon: 'mdi-file-check-outline',
        to: 'corps'
      }]
    }, {
      icon: 'mdi-account-group',
      title: 'User Management',
      to: '/users'
    }]
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
    }
  },

  watch: {
    '$vuetify.breakpoint.smAndDown' (val) {
      this.$emit('update:expandOnHover', !val)
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
#main-sidebar {
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
  }

  .logo-icon {
    border-bottom: 2px solid rgb(226, 232, 240);
  }

  .v-list {
    padding: 32px 0px;
  }

  .v-list-group {
    margin-bottom: 4px!important;
  }

  ::v-deep .v-list-group {
    .v-list-group__header {
      padding-left: 16px;
    }

    &.v-list-group--active {
      .v-list-group__header {
        background-color: white!important;
        border: none!important;
        color: $text-color1!important;
      }
    }

    .v-list-item--active {
      border-left: 5px solid $primary;
      border-radius: 0;
      color: $text-color1;
    }

    .v-list-group__items {
      .v-list-item {
        padding-left: 28px;
      }
    }
  }

  .v-list-item {
    padding-left: 16px;
    margin-bottom: 4px;
  }

  .v-list-item, .v-list-group {
    ::v-deep .v-list-item__title {
      font-size: 13px;
    }

    &.v-list-item--active {
      border-left: 5px solid $primary;
      border-radius: 0;
      color: $text-color1;
    }

    &__icon--text,
    &__icon:first-child{
      justify-content: center;
      text-align: center;
      width: 20px;
    }
  }
}
</style>
