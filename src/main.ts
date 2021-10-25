import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import plugins from './utils';
import App from './App.vue';
import './style/index.scss';

createApp(App).use(router).use(createPinia()).use(plugins).mount('#app');
