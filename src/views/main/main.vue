<template>
  <div class="main">
    <el-container class="content">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page_header">Header</el-header>
        <el-main class="page_content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { NavMenu } from '@/components/nav-menu'
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .content,
  .page {
    height: 100%;
  }

  .content {
    height: 100%;

    .page-info {
      background-color: #fff;
      border-radius: 5px;
    }
  }

  .el-header,
  .el-footer {
    display: flex;
    color: #333;
    // text-align: center;
    align-items: center;
  }

  .el-header {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #062e53;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
    // background-color: #fff;
  }
}
</style>
