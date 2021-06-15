import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDVhATaVfKtSTcTkIOgculRZN4WgjI4GYQ",
  authDomain: "vue-calendar-52297.firebaseapp.com",
  projectId: "vue-calendar-52297",
  storageBucket: "vue-calendar-52297.appspot.com",
  messagingSenderId: "263682494830",
  appId: "1:263682494830:web:e4984beefcf630307a717f"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')