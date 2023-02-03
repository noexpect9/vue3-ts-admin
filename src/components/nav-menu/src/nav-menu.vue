<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :collapse="collapse"
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon === 'el-icon-monitor'">
                <el-icon><Monitor /></el-icon
              ></i>
              <i v-else-if="item.icon === 'el-icon-setting'">
                <el-icon><Setting /></el-icon
              ></i>
              <i v-else-if="item.icon === 'el-icon-goods'">
                <el-icon><Goods /></el-icon
              ></i>
              <i v-else>
                <el-icon><Chat-line-round /></el-icon
              ></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 二级菜单 -->
        <template v-else>
          <el-menu-item :index="item.id + ''"> </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/index'
import { computed } from 'vue'
const store = useStore()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
const userMenus = computed(() => {
  return store.state.login.userMenu
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .img:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
    ::v-deep(.el-sub-menu__title) {
      background-color: #001529 !important;
      user-select: none;
    }
    .el-sub-menu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
      .el-menu-item:hover {
        color: #fff !important; // 菜单
        background-color: #001529 !important;
      }
      .el-menu-item.is-active {
        color: #fff !important;
        background-color: #0a60bd !important;
      }
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
