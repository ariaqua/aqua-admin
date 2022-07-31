<template>
  <el-scrollbar>
    <el-menu
      class=" w-56 min-h-screen"
      :default-active="route.path"
      :collapse="isCollapse"
      router
    >
      <SubMenu
        v-for="route in permissionStore.routes"
        :key="route.path"
        :route="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts" name="LayoutAside">

import SubMenu from './SubMenu.vue'

import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore, usePermissionStore } from '@/store'

const route = useRoute()

const appStore = useAppStore()
const { isCollapse } = storeToRefs(appStore)

const permissionStore = usePermissionStore()

</script>
