// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Loading from './components/assembly/tt1'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'

import Tag from './components/assembly/tag-input'

// import '../static/css/style.min.css'
import '../static/css/customstyle.css'

import tree from './plugin/tree'



Vue.config.productionTip = false

Vue.use(tree)
Vue.use(VueVideoPlayer)
Vue.use(Tag)
Vue.use(Loading)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  router,
  components: { App },
  template: '<App/>',
  RENDER: H =>H(App)
})
