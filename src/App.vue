<script setup>
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()
</script>

<template>
  <div>我是App</div>
  <div>{{ userStore.token }}</div>
  <el-button type="primary" @click="userStore.setToken('Bearerasdasd')"
    >Primary</el-button
  >
  <el-button type="primary" @click="userStore.removeToken()">Primary</el-button>
</template>

<style scoped></style>
