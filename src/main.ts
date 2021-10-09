import { createApp } from 'vue';
import { createPinia } from 'pinia';
import naive from 'naive-ui';
import router from './router';
import plugins from './plugins';
import App from './App.vue';
import './style/index.scss';

import './mock';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(plugins)
  .use(naive)
  .mount('#app');
