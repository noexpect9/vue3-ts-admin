<template>
  <div class="login">
    <login_box></login_box>
  </div>
</template>

<script setup lang="ts">
import login_box from './components/login-box.vue'
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
