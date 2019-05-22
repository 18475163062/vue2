<template>
    <div>
        <!-- <div style="margin:15px auto 15px auto;">
            <div style="float:left;width:76%;min-width:380px;">
                <el-row>
                    <el-button @click="uploadFiles=true" icon="el-icon-upload2">上传新课件</el-button>
                    <el-button  icon="el-icon-edit" >重命名</el-button>
                    <el-button  icon="el-icon-delete" >删除</el-button>
                    <el-button >移动</el-button>
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
                <input placeholder="" style="flex-grow: 1; 
                                    height: 40px; outline: currentcolor none medium; 
                                    border: 1px solid rgb(224, 224, 224); width:160px;
                                    padding: 0px 5px; box-sizing: border-box;">
                <button class="el-icon-search" style="cursor: pointer; font-size: 20px;background:#1D8DFF; flex-grow: 0; height: 40px;min-width: 48px; border: medium none; color: rgb(255, 255, 255);">
                </button>
            </div>
            <div style="clear:both;"></div>
        </div>
        <div>
            全部文件|当前文件夹共有文件0个
        </div> -->
        <el-table 
        :data="tableData"
            ref="multipleTable"
            border
            row-style="height:40px"
            cell-style="padding:0px"
            style="width:100%;">
            <el-table-column align='center'   type="selection" width="80" >
            </el-table-column>
            <el-table-column align='center'  prop="name"   label='名称' width='136'>
            </el-table-column>
            <el-table-column  prop="description"  label='描述' width='136'>
            </el-table-column>
            <el-table-column align='center' prop="url"  label='视频' min-width='136'>
              </el-table-column>
            <!-- <el-table-column align='center'  label='操作' width='130'>
            </el-table-column>  -->
            <el-table-column align='center' label='操作'   width='180'>
                <template slot-scope="scope">
                    <button class="borde" @click="handleDelet(scope.row)">删除</button>
                    <button class="borde" @click="see(scope.row)">查看</button>
                    <button class="borde" @click="Update(scope.row)">修改</button>
                </template>
            </el-table-column> 
        </el-table>
        <div style="width:100%;margin: auto;text-align: center;margin-top:15px;margin-bottom: 15px;">
            <el-pagination
                background
                style="margin: 30px auto ;text-align: center"
                :page-sizes="[6, 7, 8, 10]"
                :page-size="pageSize"
                :current-page="currentPage"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="total, sizes, prev, pager, next"
                :page-count="Math.ceil(totalPage/pageSize)">
            </el-pagination>
        </div>
        <!-- <el-dialog  class="el-dialog" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="uploadFiles" >
            <div style="height:300px;margin: auto;width:100%;border:1px solid #E7ECF1;">
                <div style="height:40px;width:100%;background:#eee;line-height:40px">
                    <span style="padding-left:15px;">文件上传</span>
                </div>
                <div style="margin:auto;width:100%;margin-top:40px; ">
                    <div style="width:300px;margin:auto;position: relative;height:200px;">
                        <div style="margin:10px;"><span style="padding:0px 10px;">名</span><span style="padding:9px;">称:</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none" v-model="name"></div>
                        <div style="margin:10px;"><span style="padding:0px 10px;">描</span><span style="padding:9px;">述:</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none" v-model="description"></div>
                        <div style="margin:15px 10px;position: relative;height:200px;">
                            <input type="button" style="position:absolute; bottom:0px;left: 3px; width:65px;padding:5px;" class="button-shang" value="上传">
                            <input type="text" style="padding:4px;width:200px;border:none;"  id="dd">
                            <input type="file" name="file" class="file" onchange="document.getElementById('dd').value=this.files[0].name"  @change="getFile($event)" >
                            <button @click="uploadFiles=false"  style="position:absolute; bottom:0px;left: 100px;opacity: 1;" class="button-shang">返回</button>

                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </el-dialog> -->
         
        <el-dialog title="查看" :visible.sync="dialogSee" >
            <!-- <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions"></video-player> -->
            <!-- <video :src="this.playerOptions.sources[0].src"></video> -->
            <video style="width:100%;height:400px;outline:none;" :src="ip + this.playerOptions.sources[0].src" controls="controls"></video>


        </el-dialog>
        <el-dialog  class="el-dialog" title="修改" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="dialogUpdate">
            <div style="height:240px;position relative">
                <!-- <div style="height:40px;width:100%;background:#eee;line-height:40px;"><span style="margin-left:15px;">修改</span></div> -->
                <div style="width:400px;margin:auto;">
                    <input type="text" v-model="table.id" style="display:none"><br>
                    <div style="padding:10px;"><span style="font-size:16px;">名称：</span> <input type="text" style="padding:4px;width:200px;border-left:hidden;border-top:hidden;border-right:hidden;border-bottom:1px solid rgba(0,0,0,0.2);width:300px;outline:none;" v-model="name"></div>
                    <div style="padding:10px;"><span style="font-size:16px;">描述：</span> <textarea rows="3" cols="60" v-model="description" style="width:300px;outline:none;"></textarea></div> 
                    <div style="padding:10px;position: absolute;right:0px;bottom:0px;width:150px;">
                        <input type="button" class="button-xiu" value="修改" @click="xiugai()">
                        <input type="button" class="button-xiu1" value="返回" @click="dialogUpdate=false">
                    </div> 
                </div>
                
            </div>
        </el-dialog>
        
        
    </div>
</template>
<script>
import {list,delet, seeVideo,videoUpdate} from '../../service/getData.js'
export default {
    data(){
        return{
            // 文件上传参数
            // uploadFiles:false,
            name:'',
            file:'',
            description:'',
            

            // 分页
            currentPage: 1,
            pageSize: 6,
            totalPage:1,
            tableData:[],
            

            // 修改：
            dialogUpdate:false,
            name:[],
            description:[],


            table:[],
            formData:{},
            dialogSee:false,

           
            // 视频
            playerOptions: {
                autoplay: false,
                controls: true,
                sources: [{
                    type: "video/mp4",
                    src: ""
                }]
            },
            ip:'http://192.168.0.140:7092'
        }
    },
    created(){
        this.getList()
    },
    methods:{
        // 查看
        getList:function(){
            list(this.currentPage, this.pageSize).then(res => {
                if(res.code !== 0 && res.code !==undefined){
                    this.$message(res.msg)
                }else{
                    this.tableData = res.data.data.list
                    
                    // this.src=json.src
                    this.totalPage = res.data.data.total
                   
                }
            })
        },
// 分页
        handleCurrentChange: function (val) {
        this.currentPage = val
        console.log(`当前页: ${val}`);
        this.getList()
        },
        handleSizeChange: function (val) {
        this.pageSize = val
        console.log(`每页 ${val} 条`);
        this.getList()
        },

        // getFile(event) {
        //     console.log(event);
        //     //  this.playerOptions.sources[0].src
        //  let files =  this.files = event.target.files[0];
        //   var name =  this.file = this.files.name;
        //     var flag = false; //状态
        //     var arr = ["mp4"];
        //     //取出上传文件的扩展名
        //     var index = name.lastIndexOf(".");
        //     var ext = name.substr(index+1);
        //     //循环比较
        //     for(var i=0;i<arr.length;i++)
        //     {
        //     if(ext == arr[i])
        //     {
        //     flag = true; //一旦找到合适的，立即退出循环
        //     break;
        //     }
        //     }
        //     //条件判断
        //     if(flag)
        //     {
        //         let formData = new FormData();
        //         formData.append('file',this.files);
                
        //         upload(formData).then(response =>{
        //             if(response.data.code == 200){
        //                 alert(response.data.msg)
        //                 this.uploadFiles=false
        //             }else{
        //             alert(response.data.msg)
        //             this.uploadFiles=false
        //             }
        //         })
        //     }else
        //     {
        //         let form = new FormData();
        //         form.append('file',this.files);
        //         fileUpload(form).then(res =>{
        //             if(res.data.code == 200){
        //             alert(res.data.msg)
        //             this.dialogupload=false
        //             }else{
        //                 alert(res.data.msg)
        //             }
        //         })
        //     }
        // },

// 上传
        // submit(event) {
        // event.preventDefault();//取消默认行为
        // //创建 formData 对象
        // let formData = new FormData();
        // // 向 formData 对象中添加文件
        // formData.append('file',this.file);
        // formData.append("name",this.name);
        // formData.append('description',this.description),
        
        // upload(formData).then(response =>{
        //     if(response.data.code == 200){
        //         alert(response.data.msg)
        //         this.uploadFiles=false
        //         this.getList()
        //     }else{
        //        alert(response.data.msg)
        //        this.uploadFiles=false
        //         this.getList()
        //     }
        // })
        // },
        
// 删除
        handleDelet (i) {
        const id = this.id = i.id
        delet(id).then(res => {
            if(res.data.code == 200){
                // this.reload()
                this.getList()
                // alert(res.data.msg)
                // window.location.reload()
            } 
        })
        },


// 视频
        handleApply () {
            this.playerOptions= this.url
        },
        see (i) {
        const id = this.id = i.id
        seeVideo(id).then(res => {
        if(res.data.code == 200 ) {
            this.table = res.data.data
            this.playerOptions.sources[0].src=res.data.data.url
        
         console.log(this.playerOptions.sources[0].src)
            this.dialogSee = true
            
        }
        })
        },

    //    修改
       Update (i) {
        const id = this.id = i.id
        seeVideo(id).then(res => {
        if(res.data.code == 200 ) {
            this.table = res.data.data
            this.name = res.data.data.name
            this.description = res.data.data.description
        //  console.log(i)
            this.dialogUpdate = true
            
        }
        })
        },
        xiugai(){
            event.preventDefault();
            let form = new FormData;
            form.append('id',this.id);
            form.append('name',this.name);
            form.append('description',this.description)
            console.log(form)
            // {id: this.id, name: this.name, description: this.description}
            videoUpdate(form).then(response => {
            if(response.data.code == 200){
            //    const nam= this.dui=response.data.msg
            //    console.log(nam)
                // this.dialogSubmit =true
                alert(response.data.msg)
                this.dialogUpdate = false
                this.getList()
            }else{
                // this.cuo=response.data.msg
                // this.dialogSubmit =true
                // console.log(response.data.msg)
                alert(response.data.msg)
                window.location.reload()
            }
            
             
        })
        }

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
    padding:6px 15px;
    color: #eee;
    /* border-bottom: 1px silid rgba(255,255,255, 0.2);  */
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
.button-xiu{
    width: 50px;
    padding:3px 10px;
    border:1px solid #fff;
    color: rgba(255,255,255, 1);
    background: rgba(29,141,255,0.8);
    border-radius: 4px;
    font-size: 14px;
}
.button-xiu1{
    width: 50px;
    padding:3px 10px;
    border:1px solid rgba(0,0,0, 0.2);
    color: rgba(0,0,0, 0.6);
    background: rgba(255,255,255,0.8);
    border-radius: 4px;
    font-size: 14px;
}
.button-xiu:hover{
     background: rgba(29,141,255,0.6);
}
.button-xiu1:hover{
    background: rgba(29,141,255,0.2);
    color: rgba(29,141,255,0.6);
    border:1px solid rgba(255, 255, blue, 0.2);
}
.button-shang{
    cursor: pointer;
    padding: 5px 15px;border: 1px solid #fff;
    background: rgba(29,141,255,0.8);
    border-radius: 4px;
    font-size: 16px;
}
.file{ position:absolute; bottom:0px;left: 3px; width: 60px;height:30px; opacity: 0;}
</style>

