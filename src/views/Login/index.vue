<template>
  <div class="custom-form h-screen flex items-center justify-center">
    <el-form
      size="large"
      class=" w-96 -translate-y-1/3"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
    >
      <h2 class=" text-center m-10 text-3xl font-bold text-slate-700 dark:text-slate-400">系统登录</h2>
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="ruleForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          ref="password"
          v-model="ruleForm.password"
          type="password"
          placeholder="Password"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.enter="handleLogin"
        />
      </el-form-item>
      <el-form-item class=" mt-10">
        <el-button @click="handleLogin" :loading="isLoading" class="w-full" type="primary">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/index'

const router = useRouter()
const route = useRoute()
console.log(route);

const isLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: 'admin',
  password: '123456'
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'username is required!', trigger: 'blur' },
    { min: 2, max: 8, message: 'Length should be 2 to 8', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'password is required', trigger: 'blur' },
    { min: 6, max: 16, message: 'Length should be 6 to 16', trigger: 'blur' }
  ]
})

const user = useUserStore()

const handleLogin = () => {
  return ruleFormRef.value?.validate(valid => {
    if (!valid) return
    isLoading.value = true
    user.login(ruleForm).then(() => {
      isLoading.value = false
      const redirect = route.query?.redirect as string
      
      router.replace(redirect || '/')
    }).catch(() => {
      isLoading.value = false
    })
    
  })
}



</script>
