<template>
    <div>
        <!-- <div style="margin:15px auto 15px auto;">
            <div style="float:left;width:76%;min-width:380px;">
                <el-row>
                    <el-button @click="dialogupload=true" icon="el-icon-upload2">上传新课件</el-button>
                    <el-button  icon="el-icon-edit" >重命名</el-button>
                    <el-button  icon="el-icon-delete" >删除</el-button>
                    <el-button >移动</el-button>
                    <el-select style="width:110px;" v-model="value1"  placeholder="排序">
                        <el-option
                            v-for="item in option"
                            :key="item.value1"
                            :label="item.label"
                            :value="item.value1">
                        </el-option>
                    </el-select>
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
        </div> -->
        <el-table 
        :data="tableData"
            ref="multipleTable"
            border
            row-style="height:40px"
            cell-style="padding:0px"
            style="width:100%;">
            <el-table-column align='center'  type="selection" width="80">
                
           
            </el-table-column>
            <el-table-column align='center' prop="name"  :show-overflow-tooltip="true"  label='名称' min-width='136'>
            </el-table-column>
            <el-table-column align='center'  prop="description" :show-overflow-tooltip="true"  label='描述' width='236'>
            </el-table-column>
            <el-table-column align='center' label='操作'  width='180'>
                <template slot-scope="scope">
                    <button class="borde" @click="fileDelete(scope.row)">删除</button>
                    <button class="borde" @click="see(scope.row)">编辑</button>
                    
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
        
        <el-dialog class="el-dialog" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="dialogFile">
            <div style="height:280px;margin: auto;width:100%;">
                <div style="width:100%;height:40px;line-height:40px;">
                    <div style="margin-left:10px;">
                        <a class="borde1" :href="ip+fi " download="fi">下载</a>
                        <a class="borde1" style="height:20px;" :href=" ip+'office/record/file/editor?record_id='+id +'&edit=true'">文本编辑</a>
                    </div>
                </div>
                
                <div style="width:400px;margin:30px auto;">
                    <div><input type="text" v-model="table.id" style="display:none"></div>
                    <div style="margin:10px;"><span style="font-size:16px;">名称：</span><input type="text" style="padding:4px;width:200px;border-bottom:1px solid rgba(0,0,0,0.2);border-top:none;border-left:none;border-right:none;width:300px;outline:none;" v-model="name"></div>
                    <div style="margin:10px;"><span style="font-size:16px;">描述：</span>
                    <textarea rows="3" cols="60" v-model="description" style="width:300px;outline:none;"></textarea>
                    </div>
                    

                </div>
                 <div style="padding:10px;position: absolute;right:0px;bottom:0px;width:150px;">
                        <input type="button" class="button-xiu" value="修改" @click="xiugai($event)">
                        <input type="button" class="button-xiu1" value="返回" @click="dialogFile=false">
                    </div> 
                <!-- <div style="width:280px;margin:80px auto; 0px">
                    <input type="button" class="button-xiug" @click="xiugai($event)" value="修改">
                    <input type="button" class="button-xiug" @click="dialogFile=false" value="返回">
                </div> -->
                
            </div>
        </el-dialog>
        <!-- <el-dialog  class="el-dialog" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);" :visible.sync="dialogupload">
            <div style="height:200px; position relative;">
                <div style="font-size:20px;margin-bottom:20px;">文件上传</div>
                <div style="padding:50px 0px 0px 70px;">
                    <input type="file" @change="getFile($event)">
                </div>
                <div style="position:absolute;bottom:20px;left:85px;">
                    <input type="button" value="返回" @click="dialogupload=false" style="border:1px solid #fff;background:rgba(29,141,255,0.5);padding:5px 20px;border-radius:4px;">
                </div>
            </div>
        </el-dialog> -->
        <!-- {{file}} -->
        <!-- {{tableData}} -->
    </div>
</template>
<script>
import {fileList,dele,Offi,update,seeEdie} from '../../service/getData.js'
export default {
    
    data(){
        return{
            // 查看
            record_id:[],

            // 修改
            id:'',
            name:'',
            description:'',
            fi:'',
            ip:"http://192.168.0.140:7092/",
            // 分页
            currentPage: 1,
            pageSize: 6,
            totalPage:1,
            tableData:[],

            table:[],

            
            // 上传
            // dialogupload:false,

            dialogFile:false,
            form:{},

            dui:{},
            cuo:{},
            dialogSubmit:false,

            file:[
            ],
        }
    },
    created(){
        this.getfileList()
    },
    methods:{
        
          
        // 查询
        getfileList:function(){
            fileList(this.currentPage,this.pageSize).then(res =>{
                if(res.code == 200 ){
                    const nam = this.tableData = res.data.data.list
                    

                   console.log(this.totalPage)
                }else{
                //    const nam = this.tableData = res.data
                const nam = this.tableData = res.data.data.list
                // this.record=res.data.data.list[1].id
                // this.record_id='http://192.168.0.140:7092/office/record/file/editor?record_id='+res.data.data.list[1].id +'&edit=true'

                this.totalPage = res.data.data.total
                // console.log(this.record)
                }
            })
        },
        handleSizeChange:function(val){
            this.pageSize = val
            this.getfileList()
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange:function(val){
            this.currentPage = val
            this.getfileList()
            console.log(`当前页: ${val}`);
        },
        //获取文件
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
        //提交
        // postFile:function(){
        //     let form = new FormData();
        //     form.append('file',this.files);
        //     fileUpload(form).then(res =>{
        //         if(res.data.code == 200){
        //         alert(res.data.msg)
        //         this.dialogupload=false
        //         this.getfileList()
        //         }else{
        //             alert(res.data.msg)
        //         }
        //     })

        // },
        // 删除
        fileDelete(file_id){
            const id = this.id = file_id.id;
            dele(id).then(res => {
                if(res.data.code == 200 ){
                    this.getfileList()
                }
            })
        },


        // 修改
        see(file_id){
            const id = this.id=file_id.id;
            Offi(id).then(res=>{
                if(res.data.code == 200 ) {
                this.table=res.data.data
                this.id=res.data.data.id
                this.name=res.data.data.name
                this.description=res.data.data.description
                
                this.fi=res.data.data.files[0].url
                this.dialogFile = true
            }
            })
        },
        xiugai(event){
            event.preventDefault();
            let form = new FormData;
            form.append('id',this.id);
            form.append('name',this.name);
            form.append('description',this.description)
            update(form).then(response =>{
            if(response.data.code == 200){
            //    const nam= this.dui=response.data.msg
            //    console.log(nam)
            alert(response.data.msg)
                this.dialogFile =false
                this.getfileList()
                
            }else{
                // this.cuo=response.data.msg
                this.dialogFile =false
                // console.log(response.data.msg)
                
                this.getfileList()
            }
            
             
        })
        },
        handleEdit: function (index, row) {
      this.$router.push({path: '/fileName', query: {id: row.id}})
    }
    }
}
</script>
<style scoped>
.borde{
    font-size:14px;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 5px 8px;
    background:#fff;
    border-radius: 4px;
    color: rgba(0,0,0, 0.6)
}
.borde:hover{
    color: rgba(29,141,255, 0.7)
}
.borde1{
    
    font-size:14px;
    border: 1px solid rgba(0,0,0,0.0);
    padding: 5px 15px;
    background:rgba(196,196,196, 0.8);
    border-radius: 4px;
    color: rgba(0,0,0, 0.6)
}
.borde1:hover{
    color: #fff;
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

.el-dialog >>>.el-table th{
    padding: 0px;
}
.el-table th{
    padding: 0px;
}
.button-xiug{
    padding: 5px 15px;
    border: 1px solid #fff;
    background: rgba(29,141,255,0.8);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6)
}
.button-xiug:hover{
    color: #fff;
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
</style>

