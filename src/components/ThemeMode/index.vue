<template>
  <el-dropdown @command="theme => themeMode = theme">
    <el-icon :size="20">
      <component :is="currentThemeIcon" />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="theme in themeList"
          :key="theme.name"
          class=" text-blue-400"
          :command="theme.name.toLowerCase()"
        >
          <div
            class="flex items-center"
            :class="{ ' text-blue-400': theme.active }"
          >
            <el-icon>
              <component :is="theme.icon" />
            </el-icon>
            <div>{{ theme.name }}</div>
          </div>

        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

import { computed, DefineComponent } from 'vue'
import { useColorMode, useDark } from '@vueuse/core'
import { Sunny, Moon, SetUp } from '@element-plus/icons-vue'

interface Theme {
  name: 'Light' | 'Dark' | 'Auto'
  active: boolean
  icon: DefineComponent
}

const isDark = useDark()
const themeMode = useColorMode({ emitAuto: true })
const currentThemeIcon = computed(() => {
  const mode = themeMode.value
  if (mode === 'dark') return Moon
  if (mode === 'light') return Sunny
  else {
    if (isDark.value) return Moon
    else return Sunny
  }
})
const themeList = computed<Theme[]>(() => {
  const current = themeMode.value
  return [
    {
      name: 'Light',
      icon: Sunny,
      active: current === 'light'
    },
    {
      name: 'Dark',
      icon: Moon,
      active: current === 'dark'
    },
    {
      name: 'Auto',
      icon: SetUp,
      active: current === 'auto'
    }
  ]
})

</script>
