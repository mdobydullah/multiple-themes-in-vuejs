import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// beufy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// custom styles
import './assets/css/styles.scss'

Vue.use(Buefy)

new Vue({
    render: h => h(App),
}).$mount('#app')
