<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="Email"
        name="email"
        required
        outlined
        :height="55"
        class="rounded-lg"
      ></v-text-field>
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        placeholder="Username"
        name="username"
        required
        outlined
        :height="55"
        class="rounded-lg"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        placeholder="Password"
        name="password"
        required
        outlined
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        :height="55"
        class="rounded-lg"
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="primary"
        block
        class="my-5 text-none rounded-lg body-1"
        submit
        :height="55"
        @click="submit"
        elevation="0"
      >Register</v-btn>
      <div class="d-flex align-center">
        <v-divider></v-divider>
        <span class="mx-2">OR</span>
        <v-divider></v-divider>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    valid: true,
    password: '',
    show1: false,
    passwordRules: [
      v => !!v || 'Password is required'
      // v => (v && v.length <= 10) || 'Password must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    username: '',
    usernameRules: [
      v => !!v || 'Username is required'
    ]
  }),
  methods: {
    submit () {
      this.$refs.form.validate()
      if (this.$refs.form.validate(true)) {
        this.$emit('close-dialog')
      }
    },

    switchTab () {
      this.$emit('switch-tab', 'Login')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-input__slot {
  margin-bottom: 4px;
}

::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 2px;
}
</style>
