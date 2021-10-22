import axios from '@/utils/axios';

export const getMenus = (params?: any) => axios.get('/api/admin/menus', { params });

export const test = (params?: any) => axios.get('/api/admin/menus', { params });
