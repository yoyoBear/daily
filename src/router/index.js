import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/index'
// import LeftSide from '~/leftside'
// import RightSide from '~/rightside'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '',
    //   redirect: '/index'
    // },
    {
      path: '/',
      name: 'index',
      component: Index
    }
    // {
    //   path: '/index/leftside',
    //   name: 'leftside',
    //   component: LeftSide
    // },
    // {
    //   path: '/index/rightside',
    //   name: 'rightside',
    //   component: RightSide
    // }
  ]
})
