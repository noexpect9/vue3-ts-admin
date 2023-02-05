<template>
  <div class="userInfo">
    <el-dropdown>
      <div class="user">
        <el-avatar :size="30" :src="circleUrl" />
        <span class="name el-dropdown-link">{{ name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item disabled>修改密码</el-dropdown-item>
          <el-dropdown-item @click="outLogin">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useStore } from '@/store'
import { ref } from 'vue'
import LocalCache from '@/utils/cache'
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
const store = useStore()
const name = store.state.login.userInfo.name
const outLogin = () => {
  LocalCache.clearCache()
  router.push('/login')
}
</script>

<style scoped lang="less">
.userInfo {
  display: flex;
  align-items: center;
  cursor: pointer;
  .user {
    display: flex;
    align-items: center;
    .name {
      margin-left: 8px;
    }
  }
}
</style>
