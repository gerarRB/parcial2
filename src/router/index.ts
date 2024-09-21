
import { createRouter, createWebHistory } from 'vue-router';

import PrincipalPagina from '@/modules/landing/PrincipalPagina.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'PrincipalPagina',
            component: PrincipalPagina,
        },
        {
            path: '/PaginaSecundaria',
            name: 'PaginaSecundaria',
            component: () => import('@/modules/landing/PaginaSecundaria.vue'),
        },
    ],
});

export default router;