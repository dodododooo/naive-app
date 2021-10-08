import { createApp } from 'vue';
import { createPinia } from 'pinia';
import naive from 'naive-ui';
import router from './router';
import plugins from './plugins';
import App from './App.vue';
import './style/index.scss';

import './mock';

const app = createApp(App);
app.use(naive)
  .use(router)
  .use(createPinia())
  .use(plugins)
  .mount('#app');
