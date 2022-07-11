import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@/scss/vuetify/overrides.scss'

const theme = {
  primary: '#234DD4',
  grey: '#717171',
  black: '#222222',
  red: '#D93025',
  blue: '#1967D2'
}

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme
    }
  }
})
