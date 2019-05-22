<template>
    <div>
        <div style="margin:15px auto 15px auto;">
            <div style="float:left;width:76%;min-width:380px;">
                <el-row>
                    <el-button @click="dialogupload=true" icon="el-icon-upload2">上传新课件</el-button>
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
                <input placeholder="" style="flex-grow: 1;height: 40px; outline: currentcolor none medium;border: 1px solid rgb(224, 224, 224); width:160px;
                    padding: 0px 5px; box-sizing: border-box;">
                <button class="el-icon-search" style="cursor: pointer; font-size: 20px;background:#1D8DFF; flex-grow: 0; height: 40px;min-width: 48px; border: medium none; color: rgb(255, 255, 255);">
                    
                </button>
            </div>
            <div style="clear:both;"></div>
        </div>
        <div>
            全部文件|当前文件夹共有文件0个
        </div>
        
        
        
        <el-dialog class="el-dialog" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="dialogFile">
            <div style="height:280px;margin: auto;width:100%;border:1px solid #E7ECF1;">
                <div style="width:100%;height:40px;background:#eee;line-height:40px;"><span style="padding-left:15px;font-size:16px;">修改</span></div>
                
                <div style="width:280px;margin:30px auto;">
                    <div><input type="text" v-model="table.id" style="display:none"></div>
                    <div style="margin:10px;"><span style="font-size:16px;">名称：</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none" v-model="name"></div>
                    <div style="margin:10px;"><span style="font-size:16px;">描述：</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none" v-model="description"></div>
                </div>
                <div style="width:280px;margin:80px auto; 0px">
                    <input type="button" class="button-xiug" @click="xiugai($event)" value="修改">
                    <input type="button" class="button-xiug" @click="dialogFile=false" value="返回">
                </div>
                
            </div>
        </el-dialog>
        <!-- <el-dialog  class="el-dialog" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="dialogupload"> -->
            <div style="height:200px; position relative;">
                <div style="font-size:20px;margin-bottom:20px;">文件上传</div>
                <div style="padding:50px 0px 0px 70px;">
                    <input type="file" @change="getFile($event)">
                </div>
               
            </div>
        <!-- </el-dialog> -->
        
    </div>
</template>
<script>

import {fileList,fileUpload,dele,Offi,update,seeEdie,upload} from '../../service/getData.js'
export default {
    
    data(){
        return{
            // 查看
            record_id:[],

            // 修改
            id:'',
            name:'',
            description:'',

            // 分页
            currentPage: 1,
            pageSize: 6,
            totalPage:1,
            tableData:[],

            table:[],

            
            // 上传
            dialogupload:false,

            dialogFile:false,
            form:{},

            dui:{},
            cuo:{},
            dialogSubmit:false,

            file:[
            ],
        }
    },
    methods:{
        
        //获取文件
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
                        this.uploadFiles=false
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
                    this.dialogupload=false
                    }else{
                        alert(res.data.msg)
                    }
                })
            }
        },
       

    }
}
</script>
<style scoped>
.borde{
    border: 1px solid rgba(0,0,0,0.2);
    padding: 5px 8px;
    background:#fff;
    border-radius: 4px;
    color: rgba(0,0,0, 0.6)
}
.borde:hover{
    color: rgba(29,141,255, 0.7)
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
    display: none;
}
.el-dialog__headerbtn{
    display: none;
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
.button-xiug{
    padding: 5px 15px;
    border: 1px solid #fff;
    background: rgba(29,141,255,0.8);
    border-radius: 4px;
}
.button-xiug:hover{
    color: #fff;
}
</style>

