<template>
  <div class="nav-header">
    <div class="toogleIcon" @click="handleFoldChange">
      <el-icon size="25px">
        <!-- 动态组件 -->
        <component :is="isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .toogleIcon {
    cursor: pointer;
  }
}
</style>
