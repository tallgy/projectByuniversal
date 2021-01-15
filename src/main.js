import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$api='http://192.168.2.114:9999'

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
