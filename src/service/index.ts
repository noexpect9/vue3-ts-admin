// service统一出口
import Service from './request'

const service = new Service({
  baseURL: process.env.VUE_APP_URL,
  timeout: process.env.VUE_APP_TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  }
})

export default service
