<template>
  <div class="hello">
    
    <!-- <form> -->
      <input type="text" value="" v-model="name" placeholder="请输入用户名"><br>
    <div style="position: relative;background: red;width:340px;margin:20px;">
      
      <!-- <input type="text" value="" v-model="age" placeholder="请输入年龄"> -->
      <input type="file" @change="getFile($event)">
      <input type="text" id="dd">
      <!-- <input type="button" value="浏览">
      <input type="file" name="file" @change="getFile($event)" class="file" id="fileField" 
      onchange="document.getElementById('dd').value=this.files[0].name"/> -->
      <button @click="submit($event)">提交</button>
   
      
</div>
 <!-- </form> -->
  </div>
</template>

<script>
import {list} from '../service/getData.js'
import {upload} from '../service/getData.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData:[],
      name:'',
      file:''
    }
  },
  created(){
    // this.getList()
  },
  methods:{
    
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },

    submit(event) {
      event.preventDefault();//取消默认行为
      //创建 formData 对象
      let formData = new FormData();
      // 向 formData 对象中添加文件
      formData.append('file',this.file);
      formData.append("name",this.name);
      
      upload(formData).then(function (response) {
        console.log("res: ",response);
      })
    },
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.file{ position:absolute; top:0; right:85px; height:30px;line-height:30px; opacity: 0; }
</style>
