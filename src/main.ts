import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import plugins from './plugins';
import naive from 'naive-ui'
import './style/index.scss';

import './mock'

const app = createApp(App);
app.use(naive).use(router).use(createPinia()).use(plugins).mount('#app');
