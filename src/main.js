import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://kew5u7ewk7.execute-api.eu-north-1.amazonaws.com/dev';

new Vue({
  el: '#app',
  render: h => h(App)
})
