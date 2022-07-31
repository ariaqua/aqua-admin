/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  VITE_APP_NODE_ENV: string | 'developent' | 'production'
  VITE_APP_BASE_API: string
}

interface ImportMeat {
  readonly env: ImportMetaEnv
}
