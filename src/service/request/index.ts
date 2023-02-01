import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RequestInterceptors, RequestConfig } from './type'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

// 设置常量
const isLoading = true

// 封装请求类
class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    // 默认显示Loading
    this.showLoading = config.showLoading ?? isLoading
    this.interceptors = config.interceptors

    // 从config里取出的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(0,0,0,.1)',
            text: 'Loading...'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }
  request<T = any>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单独请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 判断是否显示Loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单独响应拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 设置showloading 不会影响下一个请求
          this.showLoading = isLoading
          // 将结果resolve
          resolve(res)
        })
        .catch((err) => {
          // 设置showloading 不会影响下一个请求
          this.showLoading = isLoading
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
