import axios from 'axios'

const VUE_APP_API_URL = process.env.VUE_APP_API_URL

const http = axios.create({
  baseURL: VUE_APP_API_URL
})

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = 'Bearer ' + token
  return config
}, function (error) {
  return Promise.reject(error)
})

export default http
