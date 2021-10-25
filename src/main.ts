import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import plugins from './utils';
import App from './App.vue';
import './style/index.scss';

import '@my-mock.mock'; // 虚拟文件，开发模式下mock数据

createApp(App).use(router).use(createPinia()).use(plugins).mount('#app');
