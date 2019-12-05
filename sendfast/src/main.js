import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'

import Register from './components/register.vue'
import Login from './components/login.vue'
import Home from './components/home.vue'
import Admin from './components/admin.vue'
import Manage from './components/manage.vue'
import Modify from './components/modify.vue'
import Insert from './components/insert.vue'
import Index from './components/index.vue'
import Personal from './components/personal.vue'
import Money from './components/money.vue'
import Order from './components/order.vue'
import Message from './components/message.vue'
import Topay from './components/topay.vue'
import Cart from './components/Cart1.vue'
import Product from './components/Products1.vue'
import Myself from './components/myself.vue'


import Axios from 'axios'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = Axios


const routes = [
  { path: '/home', component: Home },
  { path: '/index', component: Index },
  { path: '/admin', component: Admin },
  { path: '/manage', component: Manage },
  { path: '/modify', component: Modify },
  { path: '/insert', component: Insert },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/topay', component: Topay },
  { path: '/Cart1', component: Cart },
  { path: '/Products1', component: Product },
  {
    path: '/myself', component: Myself, children: [
      { path: '/personal', component: Personal },
      { path: '/money', component: Money },
      { path: '/message', component: Message },
      { path: '/order', component: Order }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
