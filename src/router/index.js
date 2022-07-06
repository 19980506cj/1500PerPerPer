import { createWebHashHistory, createRouter } from 'vue-router'
import store from '../store'
import setPageTitle from '@/utils/set-page-title.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: {
        title: '主页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about'),
      meta: {
        title: '关于',
        noCache: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 路由缓存
  store.commit('cachedView/ADD_CACHED_VIEW', to)
  // 设置页面 title
  setPageTitle(to.meta.title)
  next()
})

export default router

// import { createRouter } from 'vue-router'
// import Login from '../views/login/index' // 导入我们编写的vue组件

// // Vue.use(Router)

// const router = createRouter({
//   routes: [
//     // 配置路由地址
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })
// export default router