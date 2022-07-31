<template>
  <template v-if="!route.meta?.hidden">

    <el-menu-item
      v-if="hasOneShowingChild(route) && !onlyOneChild.children"
      :index="onlyOneChild.path"
    >
      <MenuItemIcon
        v-if="onlyOneChild.meta?.icon"
        :icon="onlyOneChild.meta?.icon"
      />
      <template #title>{{ onlyOneChild.meta?.title }}</template>
    </el-menu-item>
    <el-sub-menu
      v-else
      :index="route.path"
    >

      <template #title>
        <MenuItemIcon v-if="route.meta?.icon" :icon="route.meta?.icon" />
        <span>{{ route.meta?.title }}</span>
      </template>
      <SubMenu
        v-for="item in route.children"
        :key="item.path"
        :route="item"
        :base-path="route.path"
      ></SubMenu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="SubMenu">
import { Route } from '@/types'
import { ref } from 'vue'
import MenuItemIcon from './MenuItemIcon.vue'
defineProps<{
  route: Route
  basePath: string
}>()

const onlyOneChild = ref()

/**
 * 当只有一个子路由时直接显示该子路由
 * @see https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/components/Sidebar/SidebarItem.vue
 */
function hasOneShowingChild(route: Route) {
  const children = route.children || []

  // When there is only one child router, the child router is displayed by default
  if (children.length === 1) {
    onlyOneChild.value = children[0]
    return true
  }

  // Show parent if there are no child router to display
  if (children.length === 0) {
    onlyOneChild.value = route
    return true
  }

  return false
}
</script>
