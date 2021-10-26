import { defineStore } from 'pinia';
import { login as loginRequest } from '@/api';

const systemStore = defineStore('systemStore', {
  state: () => ({
    name: '',
    userInfo: { id: '' },
  }),
  getters: {
    isLogined: (state): boolean => !!state.userInfo.id,
  },
  actions: {
    login(params: unknown) {
      return loginRequest(params).then((res) => {
        if (res.status === 'success') {
          this.userInfo = res.data;
        }
        return res;
      });
    },
    logout() {},
  },
});

export default systemStore;
