import router from '@/router'
import { useUserStore, usePermissionStore } from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  if (userStore.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      
      const hasRoles =  userStore.userInfo.roles?.length > 0
      if (hasRoles) {
        if (!to.matched.length) {
          from.name ? next({ name: from.name }) : next('/')
        }
        next()
      } else {
        try {
          const { roles } = await userStore.getUserInfo()
          const accessRoutes = await permissionStore.generateRoutes(roles)
          accessRoutes.forEach(route => {
            router.addRoute(route)
          })
          /**
           * 动态添加完路由后, 此时的 to 中 matched 的内容为空
           * 如果直接输入 url 跳转或者刷新页面会报 404
           * 将 404 路由移动到异步路由表里面
           * 依然发出警告, 不过路由会正常跳转
           * [Vue Router warn]: No match found for location with path "动态添加的路由"
           * @see https://router.vuejs.org/zh/api/#addroute-1
           */
          next({ ...to, replace: true })
        } catch (error) {
          userStore.reset()
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
