import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Content1 from '../components/content-1.vue'
import Content2 from '../components/content-2.vue'
import Content3 from '../components/content-3.vue'
import Content4 from '../components/content-4.vue'
import Content5 from '../components/content-5.vue'
import Content6 from '../components/content-6.vue'
import Content7 from '../components/content-7.vue'



import Content1_1 from '../components/content1/content-1.1.vue'
import Content1_2 from '../components/content1/content-1.2.vue'
import Content1_3 from '../components/content1/content-1.3.vue'
import Content1_4 from '../components/content1/content-1.4.vue'




import Content2_1 from '../components/content2/content-2.1.vue'
import Content2_2 from '../components/content2/content-2.2.vue'
import Content2_3 from '../components/content2/content-2.3.vue'
import Content2_4 from '../components/content2/content-2.4.vue'
import Content2_5 from '../components/content2/content-2.5.vue'
import Content2_6 from '../components/content2/content-2.6.vue'
import Content2_7 from '../components/content2/content-2.7.vue'



import Content3_1 from '../components/content3/content-3.1.vue'
import Content3_2 from '../components/content3/content-3.2.vue'
import Content3_3 from '../components/content3/content-3.3.vue'
import Content3_4 from '../components/content3/content-3.4.vue'
import Content3_5 from '../components/content3/content-3.5.vue'
import Content3_6 from '../components/content3/content-3.6.vue'
import Content3_7 from '../components/content3/content-3.7.vue'


import Content4_1 from '../components/content4/content-4.1.vue'
import Content4_2 from '../components/content4/content-4.2.vue'
import Content4_3 from '../components/content4/content-4.3.vue'
import Content4_4 from '../components/content4/content-4.4.vue'


import Content5_1 from '../components/content5/content-5.1.vue'
import Content5_2 from '../components/content5/content-5.2.vue'
import Content5_3 from '../components/content5/content-5.3.vue'
import Content5_4 from '../components/content5/content-5.4.vue'

import Content6_1 from '../components/content6/content-6.1.vue'
import Content6_2 from '../components/content6/content-6.2.vue'
import Content6_3 from '../components/content6/content-6.3.vue'
import Content6_4 from '../components/content6/content-6.4.vue'
import Content6_5 from '../components/content6/content-6.5.vue'

import Content7_1 from '../components/content7/content-7.1.vue'
import Content7_2 from '../components/content7/content-7.2.vue'
import Content7_3 from '../components/content7/content-7.3.vue'

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
      {
        path:'/',
        name:'Content1',
        component:Content1,
      },
      {
        path:'/criteria-2/',
        name:'Content2',
        component:Content2,
      },
      {
        path:'/criteria-3',
        name:'Content3',
        component:Content3,
      },
      {
        path:'/criteria-4',
        name:'Content4',
        component:Content4,
      },
      {
        path:'/criteria-5',
        name:'Content5',
        component:Content5,
      },
      {
        path:'/criteria-6',
        name:'Content6',
        component:Content6,
      },
      {
        path:'/criteria-7',
        name:'Content7',
        component:Content7,
      },
      {
        path:'/c_1.1',
        name:'Content1_1',
        component:Content1_1,
      },
      {
        path:'/c_1.2',
        name:'Content1_2',
        component:Content1_2,
      },
      {
        path:'/c_1.3',
        name:'Content1_3',
        component:Content1_3,
      },
      {
        path:'/c_1.4',
        name:'Content1_4',
        component:Content1_4,
      },
      {
        path:'/c_2.1',
        name:'Content2_1',
        component:Content2_1,
      },
      {
        path:'/c_2.2',
        name:'Content2_2',
        component:Content2_2,
      },
      {
        path:'/c_2.3',
        name:'Content2_3',
        component:Content2_3,
      },
      {
        path:'/c_2.4',
        name:'Content2_4',
        component:Content2_4,
      },
      {
        path:'/c_2.5',
        name:'Content2_5',
        component:Content2_5,
      },
      {
        path:'/c_2.6',
        name:'Content2_6',
        component:Content2_6,
      },
      {
        path:'/c_2.7',
        name:'Content2_7',
        component:Content2_7,
      },
      {
        path:'/c_3.1',
        name:'Content3_1',
        component:Content3_1,
      },
      {
        path:'/c_3.2',
        name:'Content3_2',
        component:Content3_2,
      },
      {
        path:'/c_3.3',
        name:'Content3_3',
        component:Content3_3,
      },
      {
        path:'/c_3.4',
        name:'Content3_4',
        component:Content3_4,
      },
      {
        path:'/c_3.5',
        name:'Content3_5',
        component:Content3_5,
      },
      {
        path:'/c_3.6',
        name:'Content3_6',
        component:Content3_6,
      },
      {
        path:'/c_3.7',
        name:'Content3_7',
        component:Content3_7,
      },
      {
        path:'/c_4.1',
        name:'Content4_1',
        component:Content4_1,
      },
      {
        path:'/c_4.2',
        name:'Content4_2',
        component:Content4_2,
      },
      {
        path:'/c_4.3',
        name:'Content4_3',
        component:Content4_3,
      },
      {
        path:'/c_4.4',
        name:'Content4_4',
        component:Content4_4,
      },
      {
        path:'/c_5.1',
        name:'Content5_1',
        component:Content5_1,
      },
      {
        path:'/c_5.2',
        name:'Content5_2',
        component:Content5_2,
      },
      {
        path:'/c_5.3',
        name:'Content5_3',
        component:Content5_3,
      },
      {
        path:'/c_5.4',
        name:'Content5_4',
        component:Content5_4,
      },
      {
        path:'/c_6.1',
        name:'Content6_1',
        component:Content6_1,
      },
      {
        path:'/c_6.2',
        name:'Content6_2',
        component:Content6_2,
      },
      {
        path:'/c_6.3',
        name:'Content6_3',
        component:Content6_3,
      },
      {
        path:'/c_6.4',
        name:'Content6_4',
        component:Content6_4,
      },
      {
        path:'/c_6.5',
        name:'Content6_5',
        component:Content6_5,
      },
      {
        path:'/c_7.1',
        name:'Content7_1',
        component:Content7_1,
      },
      {
        path:'/c_7.2',
        name:'Content7_2',
        component:Content7_2,
      },
      {
        path:'/c_7.3',
        name:'Content7_3',
        component:Content7_3,
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

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  if (authRequired && !localStorage.getItem('user_token')) {
    return next('/login')
  } else {
    next()
  }
})

export default router
