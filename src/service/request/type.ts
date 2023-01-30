import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 扩展拦截器类型
export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 继承并扩展接口
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}
