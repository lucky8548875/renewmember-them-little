import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faPlus,faSyncAlt, faSignInAlt, faPowerOff, faBars, faAngleDown, faAngleRight,faAngleLeft, faArrowRight, faBell, faArrowLeft, faHome, faBook, faShoppingCart, faTimes, faCalendarAlt, faChartPie, faSignOutAlt, faMapMarked, faPhone, faMobile, faSearch, faCalendar, faFont} from '@fortawesome/free-solid-svg-icons'
library.add(faPlus,faSyncAlt, faSignInAlt, faPowerOff, faBars, faAngleDown, faAngleRight, faAngleLeft, faArrowRight, faBell, faArrowLeft, faHome, faBook, faShoppingCart, faTimes, faCalendarAlt, faChartPie, faSignOutAlt, faFacebook, faMapMarked, faFacebookMessenger, faMobile, faSearch, faCalendar, faFont)
Vue.component('fa', FontAwesomeIcon)

// ClazyLoad
import VueClazyLoad from 'vue-clazy-load';
Vue.use(VueClazyLoad);

// ApexCharts
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// Carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// ScrollTo
// import VueScrollTo from 'vue-scrollto';
// Vue.use(VueScrollTo)
 
// // You can also pass in the default options
// Vue.use(VueScrollTo, {
//      container: "body",
//      duration: 500,
//      easing: "ease",
//      offset: 0,
//      force: true,
//      cancelable: true,
//      onStart: false,
//      onDone: false,
//      onCancel: false,
//      x: false,
//      y: true
//  })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
