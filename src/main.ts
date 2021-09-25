import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import plugins from './plugins';
import naive from 'naive-ui'
import './style/index.scss';

const app = createApp(App);
app.use(naive).use(router).use(store, key).use(plugins).mount('#app');
