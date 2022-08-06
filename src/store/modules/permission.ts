import { defineStore } from "pinia"
import { ref } from 'vue'
import { constantRoutes, asyncRoutes } from "@/router"
import { Route, Role } from '@/types'

function hasPermission (roles: Role[], route: Route) {
  if (!route.meta?.roles) return true
  return roles.some(role => route.meta?.roles?.includes(role))
}

function filterAsyncRoutes(routes: Route[], roles: Role[]) {
  const res: Route[] = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const useStore = defineStore('permission', () => {

  const routes = ref(constantRoutes)
  const permissionRoutes = ref<Route[]>([])

  const generateRoutes = (roles: Role[]): Promise<Route[]> => {
    return new Promise((resolve) => {
      const accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
      permissionRoutes.value = accessRoutes
      routes.value.push(...accessRoutes)
      resolve(accessRoutes)
    })
  }

  return {
    routes,
    permissionRoutes,
    generateRoutes
  }
})

export default useStore
