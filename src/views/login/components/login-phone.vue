<template>
  <div>
    <el-form label-width="60px" :model="phoneInfo">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneInfo.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phoneInfo.code" autocomplete="off" />
          <el-button type="primary" class="getCode">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const phoneInfo = reactive({
  phone: '',
  code: ''
})
</script>

<style scoped lang="less">
.code {
  display: flex;
  .getCode {
    margin-left: 10px;
  }
}
</style>
