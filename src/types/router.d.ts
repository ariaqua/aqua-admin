import { type RouteRecordRaw } from 'vue-router'

export type Role = 'admin' | 'editor'
export type IconType = 'el' | 'custom'
export interface Meta extends Record<string | number | symbol, unknown> {
  title?: string // 菜单项和浏览器标签页名称
  icon: string  // 侧边栏图标
  iconType?: IconType // icon 类型, 用来渲染对应的组件, 默认会使用 element 图标
  hidden?: boolean // 在菜单中隐藏
  roles?: Role[] // 权限控制
}
export type Route = RouteRecordRaw & { hidden?: boolean, meta: Meta, children?: Route[] }
