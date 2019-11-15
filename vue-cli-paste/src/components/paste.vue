<template>
  <div class="paste">
    <div class="paste-content" v-paste="handlePaste" v-drag="handleDrag">
      <span>请粘贴图片</span>

        <img v-show="imgSrc!=''" :src="imgSrc">

    </div>
    <div class="progress">
      <div class="progress-bar" :style="{width:progress}"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'paste',
  data () {
    return {
      progress:0,
      imgSrc:""

    }
  },
  methods:{
    // 上传
    upload(file){
      var forms = new FormData()
      var that=this
      var configs = {
        headers:{'Content-Type':'multipart/form-data'},
        onUploadProgress: progressEvent => {
            var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
            this.progress = complete
        }
      };

      forms.append('file',file)
    // axios调用接口url
      axios.post(
          url,forms ,configs).then(res=>{
        console.log(res)
        that.imgSrc=res.data.result
      })
    },

    handleDrag(e) { //本地拖拽上传时触发
        console.log(e);
        if(this.multi) {
          let files = []
          if (e.dataTransfer && e.dataTransfer.items) { 
            files = Array.from(e.dataTransfer.items) 
            files.map(i=> {
              this.upload(i.getAsFile())
            })
          }else {
           alert('至少选择一个图片文件'); 
            return;
          }
        }else {
          if (e.dataTransfer && e.dataTransfer.items[0] && e.dataTransfer.items[0].type && e.dataTransfer.items[0].type.indexOf('image') > -1) { //这里就是判断是否有拖拽进来的文件且文件为图片格式
            let file = e.dataTransfer.items[0].getAsFile(); //获取文件
              this.upload(file) 
          } else {
            alert('上传的文件必须为图片且无法拖拽微信截图');
            return;
          }
        }
      },


     //截图上传图片时触发
    handlePaste(e) {
          console.log(e)
          let file = null
          console.log(e.clipboardData.items[0])
          if (e.clipboardData && e.clipboardData.items[0] && e.clipboardData.items[0].type && e.clipboardData.items[0].type.indexOf('image') > -1) { //这里就是判断是否有粘贴进来的文件且文件为图片格式
            file = e.clipboardData.items[0].getAsFile();
          }else {
            alert('上传的文件必须为图片且无法复制本地图片且无法同时复制多张图片'); 
            return;
          }
          this.upload(file);
      },

    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .paste-content
  {
    width:300px;
    height:300px;
    border:1px dotted gray;
    line-height:300px;
    position:relative;
    overflow:hidden;
  }
  .paste-content img
  {
    position:absolute;
    max-width:100%;
    max-height:100%;
    top:0;
    left:0;
  }
  .paste-content span
  {
    position:relative;
    z-index:99;
  }
  .progress
  {
    width:300px;
    height:5px;
    background-color:lightgray;
  }
  .progress .progress-bar
  {
    width:30%;
    height:100%;
    background:#34a734;
  }

</style>
