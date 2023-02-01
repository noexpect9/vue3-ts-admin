<template>
  <div class="login_account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" showPassword autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { rules } from '../config/userInfo'
import { reactive, defineExpose, ref } from 'vue'
import localCache from '@/utils/cache'
import { ElForm, ElFormItem, ElInput } from 'element-plus'
import { useStore } from 'vuex'

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const store = useStore()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((vaild) => {
    if (vaild) {
      // 1.判断是否需要记住密码?
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.removeCache('name')
        localCache.removeCache('password')
      }
      // 2.登陆验证
      store.dispatch('login/accountLogin', { ...account })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
