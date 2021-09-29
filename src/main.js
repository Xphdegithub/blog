import Vue from 'vue'
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/reset.css'

Vue.use(VMdPreviewHtml);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
