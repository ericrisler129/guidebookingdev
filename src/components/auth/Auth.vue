<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="auth-card">
      <div class="d-flex align-center auth-card-header px-10">
        <span
          :class="`auth-card-header-link ${currentTab === 'Login' ? 'black--text' : 'grey--text'} mr-11`"
          aria-controls
          @click="switchTab('Login')"
        >Sign in</span>
        <span
          :class="`auth-card-header-link ${currentTab === 'Register' ? 'black--text' : 'grey--text'}`"
          aria-controls
          @click="switchTab('Register')"
        >Register</span>
        <v-spacer></v-spacer>
        <v-btn icon color="black" @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="pa-10">
        <Login
          v-if="currentTab === 'Login'"
          @close-dialog="closeDialog"
          @switch-tab="switchTab"
        />
        <Register
          v-else
          @close-dialog="closeDialog"
          @switch-tab="switchTab"
        />
        <div class="d-flex justify-space-between mt-4">
          <v-btn class="text-none blue--text social-login-btn blue--border" text outlined height="45px">
            <img src="@/assets/icons/facebook.svg" class="mr-2" />
            Log In via Facebook
          </v-btn>
          <v-btn class="text-none red--text social-login-btn red--border" text outlined height="45px">
            <img src="@/assets/icons/google.svg" class="mr-2" />
            Log In via Google+
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import Login from './Login'
import Register from './Register'

export default {
  name: 'Auth',

  components: {
    Login,
    Register
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    option: {
      type: String,
      default: 'Login'
    }
  },

  data () {
    return {
      currentTab: 'Login'
    }
  },

  computed: {
    dialog: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    closeDialog () {
      this.$emit('input', false)
    },

    switchTab (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-card-header {
  background: #f4f4f4;
  height: 70px;
}

.auth-card-header-link {
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
}

.social-login-btn {
  border-radius: 8px;
  letter-spacing: 0;
  width: 200px;
}

.red--border {
  border-color: #D93025!important;
}

.blue--border {
  border-color: #1967D2!important;
}
</style>
