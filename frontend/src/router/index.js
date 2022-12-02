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
    },
    {
      path: '/consultCategories',
      name: 'consultCategories',
      component: () => import('../components/category/ConsultCategories.vue')
    },
    {
      path: '/editCategory/:id',
      name: 'editCategory',
      component: () => import('../components/category/EditCategory.vue')
    },
    {
      path: '/consultSchedule',
      name: 'consultSchedule',
      component: () => import('../components/schedule/ConsultSchedule.vue')
    },
    {
      path: '/editSchedule/:id',
      name: 'editSchedule',
      component: () => import('../components/schedule/EditSchedule.vue')
    },
    {
      path: '/editMovie/:id',
      name: 'editMovie',
      component: () => import('../components/movie/EditMovie.vue')
    },
    {
      path: '/consultMovie',
      name: 'consultMovie',
      component: () => import('../components/movie/ConsultMovie.vue')
    },
    {
      path: '/consultUser',
      name: 'consultUser',
      component: () => import('../components/user/ConsultUser.vue')
    },
    {
      path: '/editUser/:id',
      name: 'editUser',
      component: () => import('../components/user/EditUser.vue')
    },
    {
      path: '/consultBillboard',
      name: 'consultBillboard',
      component: () => import('../components/billboard/ConsultBillboard.vue')
    },
    {
      path: '/consultSell', 
      name: 'consultSell',
      component: () => import('../components/sell/ConsultSell.vue')
    },
    {
      path: '/consultRoom', 
      name: 'consultRoom',
      component: () => import('../components/room/ConsultRoom.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../NotFoundView.vue"),
  }

  ]
})

export default router
