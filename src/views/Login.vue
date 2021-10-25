<script setup lang="ts">
import { NInput, NSpace, NButton } from 'naive-ui';

console.log(0);
</script>

<template>
  <div class="login height-100 width-100 d-flex justify-center align-center">
    <n-space vertical size="large" class="login-box">
      <n-input round size="large" placeholder="请输入用户名">
        <template #prefix>
          <i class="iconfont">&#xe89d;</i>
        </template>
      </n-input>
      <n-input round size="large" placeholder="请输入密码">
        <template #prefix>
          <i class="iconfont">&#xe848;</i>
        </template>
      </n-input>
      <n-button size="large" type="primary" round class="width-100">登录</n-button>
    </n-space>
  </div>
</template>

<style scoped>
.login-box {
  width: 300px;
}
</style>
