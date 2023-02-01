export interface Account {
  name: string
  password: string
}

export interface LoginRes {
  id: number
  token: string
  name: string
}

export interface DataType<T = any> {
  code: number
  data: T
}
