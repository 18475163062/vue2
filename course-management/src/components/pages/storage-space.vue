<template>
    <div id="new-courses">
        <div style="margin-top:30px;">
            
            <div style="width:100%;min-width: 1150px;">
                <div class="curriculum-left" style="margin-right:1%;">
                
                <div class="curriculum-left-top-main">
                    <div class="curriculum-left-top">
                        <span style="padding-left:15px;">课程分类</span> 
                    </div>
                    <!-- <div class="father">
                        <div class="brother-showing" style="">
                            提示：<br>
                            1.新建子分类、重命名、删除分类，请单击右键操作
                        </div>
                        <div class="elemen">
                            提示：<br>
                           <div>1.新建子分类、重命名、删除分类，请单击右键操作</div> 
                           <div>2.移动单个分类：单击选中分类上下拖动</div> 
                            <div>3.批量移动分类：按住shift键，选中多个，一起拖动</div> 
                            <div>4.删除单个分类：单击右键，点击删除</div> 
                            <div>批量删除分类：按住shift键，选中多个，一起删除</div> 
                        </div>
                    </div> -->
                    <tree></tree>
                    <!-- <div class="curriculum-left-top-main-bottom" style="text-align:center;margin-top:30px;">
                        <button class="button-xin" type="primary" style="" >新建根分类</button>
                    </div> -->
                    <!-- <div class="curriculum-left-top-main-sou">
                        <div style="display: flex;margin:auto; text-align: center;" >
                                <input placeholder="搜索分类" style="flex-grow: 1; 
                                    height: 40px; outline: currentcolor none medium; 
                                    border: 1px solid rgb(224, 224, 224); width:200px;
                                    padding: 0px 10px; box-sizing: border-box;">
                                <button style="cursor: pointer; font-size: 20px;background:#1D8DFF; flex-grow: 0; height: 40px; 
                                    min-width: 48px; border: medium none; color: rgb(255, 255, 255);">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16" 
                                    style="font-size: 20px;">
                                <path fill="currentColor" 
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class="">
                                </path></svg>
                            </button>
                        </div>
                    </div> -->
                    <div></div>
                    
                </div>
            </div>
            
                <div style="float:left;width:76.3%;min-width: 600px;border:1px solid rgba(0,0,0,0.4);">
                        <div style="width:100%; border-bottom:1px solid rgba(0,0,0,0.4);">
                            <div style="height:45px;line-height:45px;padding-left:15px;font-size:14px;">课程文件</div>
                        </div>
           
                    <div style="width:98%;margin:auto;">
                        <div style="margin:15px auto 15px auto;">
            <div style="float:left;width:76%;min-width:380px;">
                <el-row>
                    <el-button @click="dialogup=true" icon="el-icon-upload2">上传新课件</el-button>
                    <el-button  icon="el-icon-edit" >重命名</el-button>
                    <el-button  icon="el-icon-delete" >删除</el-button>
                    <el-button >移动</el-button>
                    <!-- <el-select style="width:110px;" v-model="value1"  placeholder="排序">
                        <el-option
                            v-for="item in option"
                            :key="item.value1"
                            :label="item.label"
                            :value="item.value1">
                        </el-option>
                    </el-select> -->
                    <el-dropdown>
                        <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <router-link to="/video" tag="dl">
                                <el-dropdown-item>视频</el-dropdown-item>
                            </router-link>
                            <router-link to="/file" tag="dl">
                                <el-dropdown-item>文档</el-dropdown-item>
                            </router-link>
                                            
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-row>
            </div>
                            
            <div style="display: flex; float:left;text-align: right; width:24%;background:red;" >
                <input placeholder="" style="flex-grow: 1;height: 35px; outline: currentcolor none medium;border: 1px solid rgb(224, 224, 224); width:160px;
                    padding: 0px 5px; box-sizing: border-box;">
                <button class="el-icon-search" style="cursor: pointer; font-size: 20px;background:#ADADAD; flex-grow: 0; height: 35px;min-width: 48px; border: medium none; color: rgb(255, 255, 255);">
                    
                </button>
            </div>
            <div style="clear:both;"></div>
        </div>
        <div>
            全部文件|当前文件夹共有文件0个
        </div>
                        <div>
                            <router-view>

                            </router-view>
                        </div>
                       
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
            <el-dialog  class="el-dialog" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="dialogup" >
            <div style="height:300px;margin: auto;width:100%;">
                <div style="height:40px;width:100%;line-height:40px">
                    <span style="padding-left:15px;margin-top:-30px;">文件上传</span>
                </div>
                <div style="margin:auto;width:100%;margin-top:40px; ">
                    <div style="width:400px;margin:auto;position: relative;height:200px;">
                        <!-- <div style="margin:10px;"><span style="padding:0px 10px;">名</span><span style="padding:9px;">称:</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none" v-model="name"></div> -->
                        <!-- <div style="margin:10px;"><span style="padding:0px 10px;">描</span><span style="padding:9px;">述:</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none" v-model="description"></div> -->
                        <div style="margin:15px 10px;position: relative;height:200px;">
                            <input type="button" style="position:absolute; bottom:0px;left: 3px; width:65px;padding:5px;" class="button-shang" value="上传">
                            <input type="text" style="padding:4px;width:350px;border:none;background:#fff;" disabled="disabled" id="dd">
                            
                            <input type="file" name="file" class="file" onchange="document.getElementById('dd').value=this.files[0].name" @change="getFile($event)" >
                            <button @click="dialogup=false"  style="position:absolute; bottom:0px;left: 100px;opacity: 1;" class="button-shang">返回</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script >
import Tree from '../../plugin/Tree.vue'
import {fileUpload,upload} from '../../service/getData.js'


export default {
    components:{
        tree:Tree,
    },
    data(){
        return{
            dialogup:false,
            file:'',

        }
    },

    created(){},
   methods: {
         getFile(event) {
            console.log(event);
            //  this.playerOptions.sources[0].src
         let files =  this.files = event.target.files[0];
          var name =  this.file = this.files.name;
            var flag = false; //状态
            var arr = ["mp4"];
            //取出上传文件的扩展名
            var index = name.lastIndexOf(".");
            var ext = name.substr(index+1);
            //循环比较
            for(var i=0;i<arr.length;i++)
            {
            if(ext == arr[i])
            {
            flag = true; //一旦找到合适的，立即退出循环
            break;
            }
            }
            //条件判断
            if(flag)
            {
                let formData = new FormData();
                formData.append('file',this.files);
                
                upload(formData).then(response =>{
                    if(response.data.code == 200){
                        alert(response.data.msg)
                        this.dialogup=false
                    }else{
                    alert(response.data.msg)
                    this.uploadFiles=false
                    }
                })
            }else
            {
                let form = new FormData();
                form.append('file',this.files);
                fileUpload(form).then(res =>{
                    if(res.data.code == 200){
                    alert(res.data.msg)
                    this.dialogup=false
                    }else{
                        alert(res.data.msg)
                    }
                })
            }
        },
  },
}
</script>
<style lang="css" scoped>
    #new-courses{
        margin: auto;
        width: 94%;
        height: 60px;
        
        /* background-color: antiquewhite; */
    }
    .el-select{
        /* background: rgba(red, green, blue, alpha) */
        width: 100px;
    }
    .el-steps{
        
        height: 45px;
    }
    .el-input{
        border:1px solid rgba(0,0,0,0.2);
        border-radius: 1px;
        height: 35px;
    }
   .cent{
       position: relative;
    background:#0CF;height: 60px; width:98%;
    }
    .cs{
    width:100%;
    height:0px;
    background:#F09;
    /* position:absolute; */
    opacity: 0;
    display: block;
    /* font-size: 12px; */
    transition: 0.3s;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    }
    .cent:hover .cs{
    color: #656e73;
    opacity: 1;
    }
    .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    }
.curriculum-left{
    float: left;
    width: 22.5%;
    min-width: 250px;
    /* background-color: aqua; */
    height: 500px;
}
.curriculum-left-top{
    /* box-shadow: rgba(249,249,249, 1) 0px 0px 5px 3px ; */
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-bottom: hidden;
    width: 100%;
    /* background-color:#1D8DFF;  */
    line-height: 45px;
    /* height: 45px; */
}
.curriculum-left-top-main{
    box-shadow: rgba(0,0,0, 0.1) 0px 0px 5px 1px ;
    width: 100%;
    position: relative;
    height: 600px;
    border: 1px solid rgba(255, 255, 255, 01);
}
.curriculum-left-top-main-sou{
    padding: 0px 10px;
}

.button-xin{
    width:92%;
    /* padding:8px 0px; */
    border: 1px solid rgba(0,0,0,0.2);
    height: 35px;
    border-radius: 2px;
    font-size: 16px;
    margin-bottom: 10px;
    background: #1D8DFF;
    color: rgba(255, 255, 255, 1);
}
.father{
    position: relative;
}
.elemen{
    position: relative;
    /* top: 0px; */
    display:none;
    width:100%;
    /* height:100px; */
    background:#EEF7FF;
}
.father:hover .elemen{
    padding: 0px 10px;
    font-size: 12px;
    display:block ;
}
.brother-showing{
    padding: 0px 10px;
    text-align: center;
     /* display:block; */
    text-align: left;
    width:100%;
    height:50px;
    background:#EEF7FF;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
}
.father:hover .brother-showing{
    display:none ;
    
}

.el-dialog >>> element.style{
    z-index: 222222;
}
.el-dialog >>> .el-dialog__header {
    /* background: rgba(233, 233, 233,0.3); */
    padding:0px 15px;
    border-bottom: 1px silid rgba(255,255,255, 0.2); 
}
.el-dialog >>> .el-dialog__body{
    background: #fff;
    padding: 15px;
}
.el-dialog >>> .el-dialog__wrapper{
    z-index: 3333333;
}
.el-dialog >>> .el-dialog__headerbtn{
    position: absolute;
    top: 10px;
    right: 20px;
}

.el-dialog >>>.el-dialog{
    width:500px;
}
.el-dialog >>> element.style {
    width: 100%;
    min-width: 800px;
    background: rgba(0, 0, 0, 0.05);
    z-index: 20001;
}
.el-button{
    padding: 10px 20px;
}
.dialog-button{
    border: 1px solid #3598DC;
    background: #fff;
    color: #3598DC;
    padding: 5px 20px;
    border-radius: 4px;
    margin-right:10px;
}
.dialog-button:hover{
    background: #3598DC;
    color: #fff;
}
.dialog-button1{
    border: 1px solid #3598DC;
    background: #3598DC;
    color: #fff;
    padding: 5px 20px;
    border-radius: 4px;
    /* margin-right:30px; */
}
.dialog-button2{
    border: 1px solid #3598DC;
    background: #3598DC;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    /* margin-right:30px; */
}

.button-shang{
    cursor: pointer;
    padding: 5px 15px;border: 1px solid #fff;
    background: rgba(29,141,255,0.8);
    border-radius: 4px;
    font-size: 16px;
}
/* .button-shang:hover{
color: #fff;
} */
.file{ position:absolute; bottom:0px;left: 3px; width: 60px;height:30px; opacity: 0;}
</style>


