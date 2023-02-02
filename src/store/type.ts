import { LoginState } from './login/type'

export interface RootState {
  name: string
  age: number
}

export interface RootWithModule {
  login: LoginState
}

export type StoreType = RootState & RootWithModule
