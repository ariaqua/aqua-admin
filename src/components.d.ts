import '@vue/runtime-core'

// components.d.ts
// TODO: 全局组件申明文件不生效
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('@/components/SvgIcon/index.vue')['default']
  }
}

export { }
