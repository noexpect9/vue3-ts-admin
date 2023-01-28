import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 扩展拦截器类型
export interface RequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 继承并扩展接口
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}
