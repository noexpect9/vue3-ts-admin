<template>
  <div class="nav-header">
    <div class="toogleIcon" @click="handleFoldChange">
      <el-icon size="25px">
        <!-- 动态组件 -->
        <component :is="isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <div class="setting">
      <div></div>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserInfo from './userInfo.vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .toogleIcon {
    cursor: pointer;
  }
  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
