<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue';

// export default defineComponent({
//   name: 'App',
//   setup() {
//     return {
//       keepAliveComponents
//     }
//   }
// });
</script>

<style></style>
