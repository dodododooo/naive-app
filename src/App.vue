<script setup lang="ts">
import { computed } from 'vue';
import { NConfigProvider, darkTheme, useOsTheme, NNotificationProvider, NMessageProvider, NGlobalStyle } from 'naive-ui';

const theme = computed(() => (useOsTheme().value === 'dark' ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="theme" class="app-content">
    <n-notification-provider>
      <n-message-provider>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </n-message-provider>
    </n-notification-provider>
    <n-global-style />
  </n-config-provider>
</template>
