import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import CarList from '../views/CarList.vue'
import CarInfo from '../views/CarInfo.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/car_list',
            name: 'car_list',
            component: CarList
        },
        {
            path: '/car_info/:id',
            name: 'car_info',
            component: CarInfo
        }
    ]
})

export default router