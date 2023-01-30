<template>
  <div class="login_account">
    <el-form label-width="60px" :rules="rules" :model="userInfo" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="userInfo.account" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="userInfo.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { rules } from '../config/userInfo'
import { reactive, defineExpose, ref } from 'vue'
import { ElForm } from 'element-plus'

const userInfo = reactive({
  account: '',
  password: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loginAction = () => {
  formRef.value?.validate((vaild) => {
    if (vaild) {
      console.log(555)
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
