<template>
  <div class="login_box">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="login_footer">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码?</el-link>
    </div>
    <el-button type="primary" class="login_btn" @click="handleLogin"
      >登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>() // 获取组件类型 InstanceType<typeof LoginAccount>

const handleLogin = () => {
  accountRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login_box {
  margin-bottom: 120px;
  width: 320px;
  .title {
    color: silver;
    text-align: center;
  }
  .login_footer {
    display: flex;
    justify-content: space-between;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
