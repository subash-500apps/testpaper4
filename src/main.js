import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import {BootstrapVue} from "bootstrap-vue"

Vue.config.productionTip = false
Vue.use(BootstrapVue);


let vueRoute = new Vue({

  router,


  render: h => h(App),
}).$mount('#app')
export default vueRoute;