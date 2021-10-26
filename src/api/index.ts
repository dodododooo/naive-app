import request from '@/utils/axios';

export const getMenus = (params?: any) => request({ url: '/api/admin/menus', params });

export const login = (data?: any) => request({ url: '/api/admin/login', method: 'post', data });
