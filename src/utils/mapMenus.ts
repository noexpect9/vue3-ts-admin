import { RouteRecordRaw } from 'vue-router'

export function menuToRoute(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 加载所有的route
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // 有子节点
      if (menu.type === 2) {
        // 找到全部路由信息中包含的路由权限
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children) // 递归调用children
      }
    }
  }
  _recurseGetRoute(userMenu)
  return routes
}
