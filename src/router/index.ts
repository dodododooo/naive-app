import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import useSystemStore from '@/store/system';

const files = import.meta.glob('../views/**/*.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: () => import('../views/Login.vue'),
  //   meta: {
  //     title: '登录',
  //   },
  // },
];

Object.keys(files).forEach((path, index) => {
  routes.push({
    name: `${path}`,
    path: `/${index}`,
    component: files[path],
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    let pos: any = null;
    if (to.hash) {
      pos = { el: to.hash };
    } else if (savedPosition) {
      pos = savedPosition;
    } else {
      pos = { top: 0 };
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pos);
      }, 300);
    });
  },
});

router.beforeEach((to) => {
  const systemStore = useSystemStore();
  if (!systemStore.isLogined) {
    document.title = '登录';
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    };
  }
  document.title = <string>to.meta.title;
  return true;
});

export default router;
