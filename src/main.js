import Vue from 'vue'
import 'es6-promise/auto';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App-benifits-only.vue'

Vue.use(VueAxios, axios);


new Vue({
  el: '#app',
  render: h => h(App)
})
