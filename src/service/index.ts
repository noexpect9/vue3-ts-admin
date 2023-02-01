// Request统一出口
import Request from './request'
import localCache from '@/utils/cache'

const BASE_URL1 = 'http://152.136.185.210:5000'
const TIME_OUT1 = 10000

const request = new Request({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch(error) {
      return error
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})

export default request
