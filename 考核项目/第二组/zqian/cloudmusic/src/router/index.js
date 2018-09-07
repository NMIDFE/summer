import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/pages/index'
import Mymusic from '@/components/pages/mymusic'
// import 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/mymusic',
      name: 'Mymusic',
      component: Mymusic
    }
  ]
})
