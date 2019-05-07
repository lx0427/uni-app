import Vue from 'vue'
import App from './App'

import appHeader from './components/app-header/index.vue'
Vue.component('app-header',appHeader)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
