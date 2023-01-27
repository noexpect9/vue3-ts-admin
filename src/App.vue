<template>
  <div>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/Main">Main</RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
