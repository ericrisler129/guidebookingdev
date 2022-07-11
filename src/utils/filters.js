import moment from 'moment'

function datefilter (value) {
  return moment(value).format('DD MMM, YYYY')
}

function datefilter2 (value) {
  return moment(value).format('MMM DD, YYYY') + ' at ' + moment(value).format('hh:mm A')
}

export default {
  install (Vue) {
    Vue.filter('datefilter', datefilter)
    Vue.filter('datefilter2', datefilter2)
  }
}
