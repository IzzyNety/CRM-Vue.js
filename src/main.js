import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messageplugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messageplugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyBTb1ksFLm13PxoDdZC3pAZ3n7h1Gm64Co",
  authDomain: "vue-crm-e7b17.firebaseapp.com",
  databaseURL: "https://vue-crm-e7b17.firebaseio.com",
  projectId: "vue-crm-e7b17",
  storageBucket: "vue-crm-e7b17.appspot.com",
  messagingSenderId: "853760117121",
  appId: "1:853760117121:web:d52661c20c33fd848c0080"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
