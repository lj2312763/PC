import axios from 'axios'
import store from '@/store'
import Qs from 'qs'
import { _response, _error } from '@/utils/msg'
import { getLang } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: window.GLOBAL.HOST,//process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: window.GLOBAL.TIMEOUT,//1000 * 30, // request timeout
  transformRequest: [data => {
    return Qs.stringify(data)
  }]
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (config.method === 'post') {
      config.data = {
        token: store.getters.token,
        lang: getLang(),
        ...config.data
      }
    } else if (config.method === 'get') {
      config.params = {
        token: store.getters.token,
        lang: getLang(),
        ...config.params
      }
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return _response(res)
  },
  error => {
    return _error(error)
  }
)

export default service
