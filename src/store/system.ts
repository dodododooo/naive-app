import { defineStore } from 'pinia';
import { login as loginRequest } from '@/api';

const systemStore = defineStore('systemStore', {
  state: () => ({
    name: '',
    userInfo: {},
  }),
  getters: {
    isLogined: () => true,
  },
  actions: {
    login() {
      loginRequest().then((res) => {
        if (res.status === 'success') {
          this.userInfo = res.data;
        }
        return res;
      });
    },
  },
});

export default systemStore;
