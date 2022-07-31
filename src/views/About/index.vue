<template>
  <el-descriptions
    title="User Info"
    border
  >
    <el-descriptions-item label="Username">luXin</el-descriptions-item>
    <el-descriptions-item label="Telephone">176********</el-descriptions-item>
    <el-descriptions-item label="Place">Hubei</el-descriptions-item>
    <el-descriptions-item label="Avatar">
      <el-avatar size="small" src="https://avatars.githubusercontent.com/u/51151856?v=4" />
    </el-descriptions-item>
    <el-descriptions-item label="github address">https://github.com/ariaqua</el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getBingWallpapers, getRandomBingWallpaper } from '@/api'

getRandomBingWallpaper().then(
  res => {
    console.log(res);
  }
)

</script>
