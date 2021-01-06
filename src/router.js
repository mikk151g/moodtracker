import { createRouter, createWebHistory } from 'vue-router';

import ActivitiesList from './components/ActivitiesList.vue';
import SaveActivity from './components/SaveActivity.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/activities'
        },
        {
            path: '/activities',
            component: ActivitiesList
        },
        {
            name: 'addActivity',
            path: '/addActivity',
            component: SaveActivity
        }
    ],
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

export default router;