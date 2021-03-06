import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'





import Content1 from '../components/content-1.vue'
import SubContent from '../components/sub-content.vue'
import SubContent2 from '../components/sub-content-2.vue'
import tableContent from '../components/table-content.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },  
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[

      // hierarchy contents
      {
        path:'/:id',
        name:'Content1',
        component:Content1,
      },
      {
        path:'/:id/:subid',
        name:'SubContent',
        component:SubContent,
      },
      {
        path:'/:id/:subid/:cntid',
        name:'SubContent2',
        component:SubContent2,
      },
      {
        path:'/:id/:subid/:cntid/:tableid',
        name:'tableContent',
        component:tableContent,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login']
//   const authRequired = !publicPages.includes(to.path)
//   if (authRequired && !localStorage.getItem('user_token')) {
//     return next('/login')
//   } else {
//     next()
//   }
// })

export default router
