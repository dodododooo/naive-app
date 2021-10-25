<script setup lang="ts">
import { useMessage, useNotification } from 'naive-ui';

// 此组件的目的为挂载以下两个全局方法
window.$message = useMessage();
window.$notice = useNotification();
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
