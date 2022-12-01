import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/billboard',
      name: 'billboard',
      component: () => import('../views/billboard/BillboardView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/category/CategoryView.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../views/movie/MovieView.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('../views/room/RoomView.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/schedule/ScheduleView.vue')
    },
    {
      path: '/sell',
      name: 'sell',
      component: () => import('../views/sell/SellView.vue')
    },
    {
      path: '/ticketing',
      name: 'ticketing',
      component: () => import('../views/ticketing/TicketingView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/UserView.vue')
    }
  ]
})

export default router
