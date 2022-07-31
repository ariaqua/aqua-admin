<template>
  <div class="flex h-screen">
    <Aside />
    <div class=" flex flex-1 flex-col">
      <Header />
      <main class="flex-1 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts" name="Layout">
import Aside from './aside/index.vue'
import Header from './header/index.vue'

</script>
