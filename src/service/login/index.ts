/* eslint-disable @typescript-eslint/no-unused-vars */
import request from '../index'
import { Account, LoginRes, DataType } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenu = '/role/'
}

/**
 * 获取登陆信息
 * @param account
 * @returns
 */
export function accountLoginRequest(account: Account) {
  return request.post<DataType<LoginRes>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

/**
 * 获取用户信息
 * @param id
 * @returns
 */
export function requestUserInfoById(id: number) {
  return request.get<DataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

/**
 * 获取用户菜单
 * @param id
 * @returns
 */
export function requestUserMenu(id: number) {
  return request.get<DataType>({
    url: LoginAPI.UserMenu + id + '/menu'
  })
}
