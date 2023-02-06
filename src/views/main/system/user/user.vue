<template>
  <div class="user">
    <publicForm class="publicForm" v-bind="SearchConfig"></publicForm>
  </div>
</template>

<script setup lang="ts">
import publicForm from '@/baseUI/form'
import { SearchConfig } from './config/SearchConfig'
</script>

<style scoped lang="less">
.publicForm {
  padding-top: 22px;
}
</style>
