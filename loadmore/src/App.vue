<template>
  <div id="app">
    <list :page="page"></list>
    <a class="button" @click="next">Go NEXT<span>CURRENT:{{page}}</span></a>
    <!-- <div id="loader" v-show="!finish" :transition="up?'up-start':'dwon-start'">
      <span>Loading</span>
    </div> -->
  </div>
</template>

<script>
import list from './components/List'
export default {
  name: 'App',
  components:{
    list
  },
  data(){
    return {
      page:1
    }
  },
  // watch:{
  //   finish(val,oldVal){
  //     if(!oldVal && val && this.up){
  //       document.body.scrollTop = document.body.scrollHeight
  //     }
  //   }
  // },
  methods:{
    next(){
      document.body.scrollTop = 0;
      this.page++ ;
    }
  },

}
</script>

<style scoped>
*{
  padding:0;
  margin:0;
}
.button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }
  .down-start-transition {
    bottom: 0;
    height: 100%;
  }
  .down-start-enter {
    animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
  }
  .down-start-leave {
    animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
    top: 0;
    bottom: auto;
  }
  .up-start-transition {
    top: 0;
    height: 100%;
  }
  .up-start-enter {
    animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
  }
  .up-start-leave {
    animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
    top: auto;
    bottom: 0;
  }
  @keyframes expand {
    0% {
      height: 3em;
      transform: translate3d(0, 0, 0);
    }
    100% {
      height: 100%;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes collapse {
    0% {
      height: 100%;
      transform: translate3d(0, 0, 0);
    }
    100% {
      height: 3em;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
