import { Module } from 'vuex'
import { RootState } from '../type'
import { LoginState } from './type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenu
} from '@/service/login/index'
import { Account } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: []
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveMenus(state, userMenu: any) {
      state.userMenu = userMenu
    }
  },
  actions: {
    async accountLogin({ commit }, payload: Account) {
      // 1.实现登陆
      const res = await accountLoginRequest(payload)
      console.log(res)
      const { id, token } = res.data
      // 保存token到vuex与本地缓存
      commit('saveToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoRes = await requestUserInfoById(id)
      commit('saveUserInfo', userInfoRes.data)
      localCache.setCache('userInfo', userInfoRes.data)

      // 3.获取用户菜单
      const userMenu = await requestUserMenu(id)
      commit('saveMenus', userMenu.data)
      localCache.setCache('saveMenu', userMenu.data)
      router.push('/main')
    }
  }
}

export default loginModule
