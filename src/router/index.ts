import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'
import { Nest1, Nest2, Nest3 } from '@/views/Nest/index'

import { type Route } from '@/types'

const constantRoutes: Route[] = [
  {
    name: 'Login',
    meta: {
      title: '登录',
      icon: '',
      hidden: true,
    },
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    meta: {
      title: 'Home',
      icon: ''
    },
    redirect: { name: 'Home' },
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '/home',
        meta: {
          title: '首页',
          icon: 'House'
        },
        component: Home
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: 'About',
      icon: 'Warning'
    },
    component: Layout,
    redirect: { name: 'About' },
    children: [
      {
        name: 'About',
        meta: {
          title: '关于',
          icon: 'Warning'
        },
        path: '/about/index',
        component: About
      }
    ]
  },
  {
    path: '/tailwindcss',
    component: Layout,
    meta: {
      title: 'Tailwind',
      icon: 'MagicStick'
    },
    redirect: { name: 'Tailwindcss' },
    children: [
      {
        name: 'Tailwindcss',
        meta: {
          title: 'Tailwindcss',
          icon: 'MagicStick'
        },
        path: '/tailwindcss/index',
        component: () => import('@/views/Tailwindcss/index.vue')
      }
    ]
  },
  {
    path: '/nest',
    meta: {
      title: 'Nest',
      icon: 'View'
    },
    component: Layout,
    redirect: { name: 'Nest1' },
    children: [
      {
        name: 'Nest1',
        meta: {
          title: 'Nest1',
          icon: ''
        },
        path: '/nest/nest1',
        component: Nest1,
        redirect: { name: 'Nest2' },
        children: [
          {
            name: 'Nest2',
            meta: {
              title: 'Nest2',
              icon: ''
            },
            path: '/nest/nest1/nest2',
            component: Nest2,
            redirect: { name: 'Nest3' },
            children: [
              {
                name: 'Nest3',
                meta: {
                  title: 'Nest3',
                  icon: ''
                },
                path: '/nest/nest1/nest2/nest3',
                component: Nest3,
              }
            ]
          },
          {
            name: 'Nest2-1',
            meta: {
              hiddden: true,
              title: 'Nest3',
              icon: ''
            },
            path: '/nest/nest1/nest3',
            component: Nest3
          }
        ]
      }
    ]
  }
]

const asyncRoutes: Route[] = [
  {
    path: '/permission',
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'Remove'
    },
    component: Layout,
    redirect: { name: 'Role' },
    children: [
      {
        name: 'Role',
        meta: {
          title: "Role",
          icon: '',
          roles: ['admin']
        },
        path: '/permission/role',
        component: () => import('@/views/Permission/role.vue')
      },
      {
        name: 'Apple',
        meta: {
          title: "Apple",
          icon: '',
          roles: ['admin']
        },
        path: '/permission/apple',
        component: () => import('@/views/Permission/apple.vue')
      }
    ]
  },
  {
    name: 'NotFound',
    meta: {
      hidden: true,
      icon: '',
      title: '404'
    },
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ top: 0 })
})

export { constantRoutes, asyncRoutes }
export default router
