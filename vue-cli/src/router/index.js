import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Xiangqing from '@/components/XiangQing'
import Business from '@/components/Business'
import head from '@/components/head'
import names from '@/components/names'
import shangjia from '@/components/shangjia'
import Foodlist from '@/components/Foodlist'
import Order from '@/components/Order'
import Administrators from '@/components/Administrators'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/XiangQing',
      name: 'XiangQing',
      component: Xiangqing,
      children:[
        {
          path: '/Business',
          name: 'Business',
          component: Business
        },
        {
          path: '/head',
          name: 'head',
          component: head
        },
        {
          path: '/names',
          name: 'names',
          component: names
        },
        {
          path: '/shangjia',
          name: 'shangjia',
          component: shangjia
        },
        {
          path: '/Foodlist',
          name: 'Foodlist',
          component: Foodlist
        },
        {
          path: '/Order',
          name: 'Order',
          component: Order
        },
        {
          path: '/Administrators',
          name: 'Administrators',
          component: Administrators
        }
      ]
    }
  ]
})
