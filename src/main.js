// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import index from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailAnaPage from './pages/detail/analysis.vue'
import DetailCouPage from './pages/detail/count.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailPubPage from './pages/detail/publish.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

let router =new VueRouter({
  mode:'history',
  routes:[
    {
      path : '/',
      component: index
    },
    {
      path : '/detail',
      component: DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        },
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
