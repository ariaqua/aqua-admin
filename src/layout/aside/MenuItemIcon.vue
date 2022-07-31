<template>
  <el-icon v-if="!iconType">
    <component :is="resolveComponent(icon)" />
  </el-icon>
  <SvgIcon v-else :name="icon" />
</template>

<script setup lang="ts">
import { defineProps, resolveComponent } from 'vue'
defineProps<{
  icon: string
  iconType?: boolean
}>()
</script>
