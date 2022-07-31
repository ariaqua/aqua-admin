<template>
  <div class="flex items-center border-b dark:border-slate-700 h-16 pl-4 pr-6">
    <el-icon
      :size="24"
      class=" cursor-pointer transition-transform"
      :class="{ '-rotate-180': isCollapse }"
      @click="isCollapse = !isCollapse"
    >
      <Fold />
    </el-icon>
    <el-breadcrumb
      :separator-icon="ArrowRight"
      class="flex-1 mx-6"
    >
      <el-breadcrumb-item
        v-for="route in breadcrumbPath"
        :key="route.path"
        :to="route.path"
      >{{ route.meta?.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- right menu -->
    <div class="flex items-center">
      <ThemeMode />
      <el-icon
        class="mx-4 cursor-pointer"
        :size="20"
        @click="toggle"
      >
        <FullScreen />
      </el-icon>
      <el-dropdown>
        <span>
          <!-- https://avatars.githubusercontent.com/u/51151856?v=4 -->
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <a :href="userStore.userInfo.githubAddress" target="_blank">Github</a>
            </el-dropdown-item>
            <el-dropdown-item @click="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="LayoutHeader">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useFullscreen } from '@vueuse/core'

import { Fold, ArrowRight, ArrowDown, FullScreen } from '@element-plus/icons-vue'

import ThemeMode from '@/components/ThemeMode/index.vue'

import { useAppStore, useUserStore } from '@/store'

const router = useRouter()
const route = useRoute()
const breadcrumbPath = computed(() => {
  const routes = route.matched
  return routes.filter(route => route.meta?.title)
})

const store = useAppStore()
const { isCollapse } = storeToRefs(store)

const { toggle } = useFullscreen()

const userStore = useUserStore()
const logout = async () => {
  await userStore.logout()
  router.push('/login')
  // router.push(`/login?redirect=${route.fullPath}`)
}


</script>
