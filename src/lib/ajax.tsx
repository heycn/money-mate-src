import axios from 'axios'

axios.defaults.baseURL = isDev ? '/' : 'xxx'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

export const ajax = {
  get: (path: `/${string}`) => {
    return axios.get(path)
  }
}