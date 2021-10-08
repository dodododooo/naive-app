<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="120"
      :width="240"
      show-trigger="arrow-circle"
      content-style="padding: 24px;"
    >海淀桥</n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getMenus } from '@/api';

export default defineComponent({
  name: 'Home',
  setup() {
    getMenus({ a: 1, b: [1, 2, 3, 4, 5] }).then((res) => {
      console.log(res);
    });
    return {};
  },
});
</script>

<style>
</style>
