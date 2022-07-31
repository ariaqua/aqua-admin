<template>
  <svg aria-hidden="true" class="w-4 h-4" :fill="color" >
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, withDefaults } from 'vue'

interface Props {
  name: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'currentColor'
})

const symbolId = computed(() => `#icon-${props.name}`)

</script>
