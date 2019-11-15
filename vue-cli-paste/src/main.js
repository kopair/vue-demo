// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

Vue.directive('paste',{
  bind(el,binding,vnode) {
    el.addEventListener('paste',function(event){ //监听元素的粘贴事件
     
      binding.value(event)
    })
  }
})//复制粘贴指令

// 拖拽
Vue.directive('drag',{
  bind(el,binding,vnode) {
    el.addEventListener('dragenter',function(event){ 
      event.stopPropagation();
      event.preventDefault();
    })
    el.addEventListener('dragover',function(event){
      event.stopPropagation();
      event.preventDefault();
    })
    el.addEventListener('dragleave',function(event){
      event.stopPropagation();
      event.preventDefault();
    })
    el.addEventListener('drop',function(event){ 
      event.stopPropagation();
      event.preventDefault();
      binding.value(event)
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


