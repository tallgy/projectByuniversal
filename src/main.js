import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$api = 'http://172.20.10.4:9092'
// Vue.prototype.$token = null;
// Vue.prototype.$right = null;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
