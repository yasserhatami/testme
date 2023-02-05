import { createRouter, createWebHistory } from 'vue-router'

import AppLayoutDefault from '@/layout/AppLayoutDefault.vue'

import Listing from '@/pages/Listing.vue'
import Walet from '@/pages/Wallet.vue'

const routes = [
    {
        path: '/',
        component: Listing,
        meta: {
            layout: AppLayoutDefault
        }
        
    }
    ,
    {
        path: '/wallet',
        component: Walet,
        meta: {
            layout: AppLayoutDefault
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router