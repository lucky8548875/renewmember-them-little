import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      children: [
        {
          path: '/',
          component: () => import(/* webpackChunkName: "about" */ './views/child-views/home-home.vue')
        },
        {
          path: '/services',
          component: () => import(/* webpackChunkName: "about" */ './views/Blank.vue')
        },
      ]
    },
    {
      path: '/book',
      component: () => import(/* webpackChunkName: "about" */ './views/Book.vue'),
      redirect: "/book/category",
      children: [
        {
          path: 'category',
          component: () => import('./views/child-views/book-category.vue')
        },
        {
          path: 'package',
          component: () => import('./views/child-views/book-package.vue'),
          meta: { requiresCategory: true },
        },
        {
          path: 'theme',
          component: () => import('./views/child-views/book-theme.vue'),
          meta: { requiresCategory: true },
        },
        {
          path: 'addon',
          component: () => import('./views/child-views/book-addon.vue'),
          meta: { requiresCategory: true },
        },
        {
          path: 'schedule',
          component: () => import('./views/child-views/book-schedule.vue'),
          meta: { requiresCategory: true },
        },
        {
          path: 'summary',
          component: () => import('./views/child-views/book-summary.vue'),
          meta: { requiresCategory: true },
        }
      ]
    },
    {
      path: "/dashboard",
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      meta: { minAccessLevel: 1 },
      children: [
        {
          path: '/',
          component: () => import(/* webpackChunkName: "about" */ './views/child-views/dashboard-bookings.vue')
        },
        {
          path: 'bookings',
          component: () => import(/* webpackChunkName: "about" */ './views/child-views/dashboard-bookings.vue')
        },
        {
          path: 'orders',
          component: () => import(/* webpackChunkName: "about" */ './views/child-views/dashboard-orders.vue')
        },
      ]
    },
    {
      path: "/admin",
      component: () => import('./views/Admin.vue'),
      redirect: "/admin/dashboard/calendar",
      children: [
        {
          path: "dashboard",
          component: () => import('./views/child-views/admin-dashboard.vue'),
          redirect: "/admin/dashboard/calendar",
          children: [
            {
              path: "calendar",
              component: () => import('./views/child-views/admin-calendar'),
              meta: { minAccessLevel: 2 },
            },
            {
              path: "summary",
              component: () => import('./views/child-views/admin-overview.vue'),
              meta: { minAccessLevel: 2 },
            },
          ]
        },

        {
          path: "settings",
          component: () => import('./views/child-views/admin-settings'),
          redirect: "/admin/settings/categories",
          meta: { minAccessLevel: 3 },
          children: [
            {
              path: "categories",
              component: () => import('./views/child-views/admin-categories')
            },
            {
              path: "packages",
              component: () => import('./views/child-views/admin-packages')
            },
            {
              path: "addons",
              component: () => import('./views/child-views/admin-addons')
            },
            {
              path: "themes",
              component: () => import('./views/child-views/admin-themes')
            },
            {
              path: "site",
              component: () => import('./views/child-views/admin-site-settings')
            },
            {
              path: "users",
              component: () => import('./views/child-views/admin-users')
            }
          ]
        },
        {
          path: "transactions",
          component: () => import('./views/child-views/admin-transactions'),
          redirect: "/admin/transactions/bookings",
          meta: { minAccessLevel: 2 },
          children: [
            {
              path: "bookings",
              component: () => import('./views/child-views/admin-bookings')
            },
            {
              path: "orders",
              component: () => import('./views/child-views/admin-orders')
            },
          ]
        },
        {
          path: "reports",
          component: () => import('./views/child-views/admin-reports'),
          meta: { minAccessLevel: 3 },
          redirect: "/admin/reports/sales",
          children: [
            {
              path: "sales",
              component: () => import('./views/child-views/admin-sales')
            },
            {
              path: "customers",
              component: () => import('./views/child-views/admin-customers')
            },
          ]
        },
      ]
    },
    {
      path: '/account',
      component: () => import('./views/Account.vue'),
      meta: { minAccessLevel: 1 },
    },
    {
      path: "*",
      component: () => import(/* webpackChunkName: "about" */ './views/Blank.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.minAccessLevel)) {
    var item = to.matched.find(record => record.meta.minAccessLevel != undefined);
    console.log("This page: " + item.meta.minAccessLevel + ", Me: " + store.getters.getAccessLevel)
    if (store.getters.getAccessLevel < item.meta.minAccessLevel) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
    else next()
  }
  else if (to.matched.some(record => record.meta.requiresCategory)) {
    if (store.state.selectedCategoryId < 0) {
      next({
        path: '/book/category',
        query: { redirect: to.fullPath }
      })
    }
    else next()
  }
  else next()
  // if (to.matched.some(record => record.meta.admin)) {
  //   if (!store.getters.isAdmin) {
  //     next({
  //       path: '/',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } 

  // else if(to.matched.some(record => record.meta.user)){
  //   if(!store.getters.isUser){
  //     next({
  //       path: '/',
  //       query: { redirect: to.fullPath }
  //     })
  //   }
  // }
  // else {
  //   next() // make sure to always call next()!
  // }
})

export default router
