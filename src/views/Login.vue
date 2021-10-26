<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NInput, NSpace, NButton } from 'naive-ui';
import useSystemStore from '@/store/system';

const router = useRouter();
const systemStore = useSystemStore();

const route = router.currentRoute.value;
const redirect = <string>route.query?.redirect || '/home';

const username = ref('');
const password = ref('');
const loading = ref(false);

const login = () => {
  if (loading.value) return;
  loading.value = true;
  systemStore
    .login({
      username: username.value,
      password: password.value,
    })
    .then(({ code, status }) => {
      // loading.value = false;
      if (code === 200 && status === 'success') {
        // router.replace(redirect);
      }
    });
};
</script>

<template>
  <div class="login height-100 width-100 d-flex justify-center align-center">
    <n-space vertical size="large" class="login-box">
      <n-input v-model:value.trim="username" round size="large" placeholder="请输入用户名">
        <template #prefix>
          <i class="iconfont">&#xe89d;</i>
        </template>
      </n-input>
      <n-input v-model:value.trim="password" type="password" round size="large" placeholder="请输入密码">
        <template #prefix>
          <i class="iconfont">&#xe848;</i>
        </template>
      </n-input>
      <n-button @click="login" :loading="loading" size="large" type="primary" round class="width-100">登录</n-button>
    </n-space>
  </div>
</template>

<style scoped>
.login-box {
  width: 300px;
}
</style>
