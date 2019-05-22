<template>
    <div id="new-courses">
        <div style="margin-top:30px;">
            <div style="margin-bottom:20px;min-width: 1150px;">
                <router-link to="/new-courses" tag="dl">
                <div style="float:left;width:33.3%; height:60px;background:#69A4E0;cursor:pointer;">
                    
                        <div style="float:left;height:60px;line-height:60px;padding-left:30px;">
                            <div style="font-size:22px;width:40px;height:40px;line-height:40px; border-radius: 50%;text-align: center; background:#fff;float:left;position: relative;top:10px;">
                                <span >1</span>
                            </div>
                        </div>
                        <div style="float:left;height:60px;">
                            <div style="padding-left:15px;line-height:25px;padding-top:8px;">
                                <div style="font-size:22px;color: rgba(255, 255, 255, 0.8);">编辑课程信息</div> 
                                <div style="height:0px;background:red;font-size:14px;color: rgba(255, 255, 255, 0.8);">编辑课程基本信息</div>
                            </div>
                                <!-- <p>dadad</p> -->
                        </div>
                    
                </div>
                </router-link>
                <router-link to="/new-courses-center" tag="dl">
                <div style="float:left;width:33.3%; height:60px;background:#E5E5E5;cursor:pointer;">
                    
                        <div style="float:left;height:60px;line-height:60px;padding-left:30px;">
                            <div style="font-size:22px;width:40px;height:40px;line-height:40px; border-radius: 50%;text-align: center; background:#fff;float:left;position: relative;top:10px;">
                                <span >2</span>
                            </div>
                        </div>
                        <div style="float:left;height:60px;">
                            <div style="padding-left:15px;line-height:25px;padding-top:8px;">
                                <div style="font-size:22px;color: rgba(0, 0, 0, 0.3);">编辑课程信息</div> 
                                <div style="height:0px;background:red;font-size:14px;color: rgba(0, 0, 0, 0.3);">编辑课程基本信息</div>
                            </div>
                                <!-- <p>dadad</p> -->
                        </div>
                    
                </div>
                </router-link>
                <router-link to="/new-courses-set-up" tag="dl">
                    <div style="float:left;width:33.3%; height:60px;background:#E5E5E5;cursor:pointer;">
                    
                        <div style="float:left;height:60px;line-height:60px;padding-left:30px;">
                            <div style="font-size:22px;width:40px;height:40px;line-height:40px; border-radius: 50%;text-align: center; background:#fff;float:left;position: relative;top:10px;">
                                <span >3</span>
                            </div>
                        </div>
                        <div style="float:left;height:60px;">
                            <div style="padding-left:15px;line-height:25px;padding-top:8px;">
                                <div style="font-size:22px;color: rgba(0, 0, 0, 0.3);">编辑课程信息</div> 
                                <div style="height:0px;background:red;font-size:14px;color: rgba(0, 0, 0, 0.3);">编辑课程基本信息</div>
                            </div>
                                <!-- <p>dadad</p> -->
                        </div>
                    
                    </div>
                </router-link>
                 <div style="clear:both"></div>
            </div>
            <div style="width:100%;min-width: 1150px;">
                <div style="float:left;width:22.5%;min-width: 250px;margin-right:1%;">
                    <div style="width:100%;height:45px;background:#5E738B;line-height:45px;border:1px solid rgba(0,0,0,0.2);">
                        <div style="padding-left:15px;color: rgba(255, 255, 255, 0.8);font-size:20px;">封面介绍</div>
                    </div>
                    <div style="width:100%;border:1px solid rgba(0,0,0,0.2);margin-bottom:10px;">
                        <div style="padding:10px 0px 10px 0px; text-align: center;margin: auto;">
                            <img style="width:90%;min-width:250px;height:200px;" src="../../assets/images/tu.jpg" alt="">
                        </div>
                        <div style="width:100%; text-align: center;margin: 15px auto 20px ;">
                            <router-link to="/modify-cover" tag="dl">
                                <button class="button-f"  style="" >修改封面</button>
                            </router-link>
                        </div>
                        <div  style="width:90%;text-align:center;  margin: auto;padding:10px 0px 10px 0px;">
                            <span style="padding-right:16px;">标记为：</span> 
                            <el-select   v-model="input10" style="width:140px; height:30px;" placeholder="正常课程">
                                <el-option  v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div style="width:90%;text-align:center; margin: auto;padding:15px 0px 10px 0px;">
                            <span>是否公开：</span> 
                            <el-select v-model="input10" style="width:140px;" placeholder="是">
                                <el-option v-for="item in option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>

                            </el-select>
                        </div>
                        <div style="width:90%; text-align: center;margin: 10px auto;">
                            <div style="float:left; width:50%;">
                                <router-link to="/preview-course" tag="dl">
                                    <button class="button-an1">预览课程</button>
                                </router-link>
                            </div>
                                
                            <div style="float:left;width:50%;">
                                <button class="button-an2">保存</button>
                            </div>
                            <div style="clear:both;"></div>
                        </div>
                    </div>

                </div>
                <div style="float:left;width:76.3%;min-width: 600px;border:1px solid rgba(0,0,0,0.2);">
                    <div style="width:100%;border-bottom:1px solid rgba(0,0,0,0.2);">
                        <div style="height:45px;line-height:45px;padding-left:15px;font-size:14px;">基本信息</div>
                    </div>
                    <div style="margin-top:15px;margin-left:15px;">
                        <h4 style="color:#5D7AB3;font-size:22px;">课程标题</h4> 
                        <div style="width:50%;margin-top:10px;">
                            
                                <input type="text" placeholder="请输入标题" style="padding-left: 10px;width:98%;border:1px solid rgba(0,0,0,0.1)" class="el-input">
                            
                            <div style="float:left;">

                            </div>
                        </div>
                    </div>

<div style="z-index: 2000001; position: relative;">


        <el-dialog title="请选择课程分类" class="el-dialog"   :visible.sync="showFlag" style="width:100%;min-width:400px; background:rgba(0,0,0,0.05);">
            <div style="width:100%;height:400px;">
                <div style=" height:380px;padding:15px;">
                    <div>
                        <div v-for="data in datas" :key="data.id">
                            <div style="">
                                <div style="position: relative;top:5px;height:30px;line-height:30px;">
                                    <!-- <div style="float:left;"><img style="width:30px;height:20px;" :src="data.xu" alt=""></div> -->
                                    <div style="float:left;backgroung:pink; height:30px;">
                                        <img style="width:20px;height:20px;position: absolute;top:5px;" :src="data.img" alt="">
                                        <span style="position: relative;top:0px;left:30px;">{{data.title}}</span>
                                    </div>
                                    <div style="clear:both;"></div>
                                </div>
                                
                            </div>
                            <div v-for="index in customized_descs" :key="index">
                                <div style="position: relative;height:30px;line-height:30px;">
                                    <!-- <div style="float:left;"><img style="width:30px;height:20px;" :src="data.xu" alt=""></div> -->
                                    <div style="float:left;backgroung:pink; height:30px;">
                                        <img style="width:20px;height:20px;position: absolute;top:5px;" :src="data.img" alt="">
                                        <span style="position: relative;top:0px;left:30px;">{{data.xin}}</span>
                                    </div>
                                    <div style="clear:both;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button @click="addCustomizeDesc">新家文件夹</button>
                </div>
            </div>
            
        </el-dialog>
</div>

                    <div style="margin-top:15px;margin-left:15px;">
                        <h4 style="color:#5D7AB3;font-size:22px;">课程类别</h4> 
                        <div style="width:50%;margin-top:10px; " @click="showFlag = true">
                            <div style="float:left;width:80%;height:40px;">
                                <input type="text" style="height:37px;border:1px solid rgba(0,0,0,0.1); background:#FAFAFA;" disabled="disabled" class="el-input">   
                            </div>
                            <div style="float:left;width:20%;heigsht:40px;">
                                <input type="button" style="background:#409EFF;color:#fff; border:1px solid rgba(0,0,0,0.1); width:90%;height:38px;text-algin:center;margin:auto;position: relative;"  value="选择分类">
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                    </div>
                    <div style="margin-left:15px;margin-top:15px;">
                        <h4 style="color:#5D7AB3;font-size:22px;">课程类别</h4> 
                        <div style="width:90%;margin-top:5px;">
                                <div id="toolBar"  style=" padding: 0;border: 1px solid rgba(0,0,0,0.2);width:100%;"></div>
                                <div id="editor"  style=" border: 1px solid rgba(0,0,0,0.2);border-top: none;min-height: 220px">
                                    <p></p>
                                </div>
                                                
                        </div>
                    </div>
                    <div style="margin-left:15px;margin-top:15px;">
                        <h4 style="color:#5D7AB3;font-size:22px;">课程须知</h4> 
                        <div style="width:90%;margin-top:5px;">
                                <div id="toolBar1"  style=" padding: 0;border: 1px solid rgba(0,0,0,0.2);width:100%;"></div>
                                <div id="editor1"  style=" border: 1px solid rgba(0,0,0,0.2);border-top: none;min-height: 220px">
                                    <p></p>
                                </div>
                                                
                        </div>
                    </div>
                    <div style="height:30px;"></div>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
        <div style="width:100%;text-align: center;margin: auto; height:100px;padding-top:50px;">
            <router-link to="/new-courses-center" tag="dl">
                <button class="button-xia">下一步</button>
            </router-link>
            
        </div>
    </div>
</template>
<script >
import Tree from '../../plugin/Tree.vue'
import $ from '../../../static/js/jquery-3.2.1.min'
export default {
    components:{
        tree:Tree,
    },
    data(){
        return{
            options:[{
                value:'1',
                label:"正常课程",
            },{
                value:'2',
                label:"重点",
            },{
                value:'3',
                label:"难点"
            }
            ],
            option:[{
                value:"1",
                label:"是"
            },{
                value:"2",
                label:"否"
            }],
            input10:'',
            editor: {},



            showFlag: false,
        customized_descs:[],

        datas:[{
            id:'1',
            xu:require("../../assets/images/xu.svg"),
            img:require("../../assets/images/wen.svg"),
            title:"默认分类",
            xin:"新家分类"
        }]
        }
    },
   methods: {
       addCustomizeDesc(){
            this.customized_descs.push({});
        },
    handleAvatarSuccess (res, file) {
      res.code === 0 ? this.form.imageUrl = res.fileUrl : alert(res.msg)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit: function () {
      this.form.detail = this.editor.txt.html()
      insertProject(this.form).then(res => {
        res.data.code === 0 ? this.$router.push('/project') : this.$message(res.data.msg)
      })
    }
  },
  mounted () {
    let E = window.wangEditor
    this.editor = new E('#toolBar', '#editor')
    this.editor.create()
    $('.el-form-item__content').css('lineHeight', '30px')

    let EE =window.wangEditor
    this.editor = new EE('#toolBar1', '#editor1')
    this.editor.create()
    $('.el-form-item__content').css('lineHeight', '30px')
  }
}
</script>
<style lang="css" scoped>
    #new-courses{
        margin: auto;
        width: 94%;
        height: 60px;
        /* background-color: antiquewhite; */
    }
  
    .el-steps{
        
        height: 45px;
    }
    .el-input{
        border:1px solid rgba(0,0,0,0.2);
        border-radius: 1px;
        height: 35px;
    }
    .button-f{
        border: 1px solid rgba(53,152,220, 0.2);
        background: #fff;
        color: #3598DE;
        margin:auto;
        padding:5px 30px;
    }
   .button-f:hover{
       background: #3598DE;
       color: #fff;
   }
   .button-an1{
       background: rgba(144,157,157,0.9);
       border: 1px solid rgb(255, 255, 255,0.2);
       padding: 5px 15px;
       width: 100px;
       color: rgba(255, 255, 255, 0.8);
       
   }
   .button-an1:hover{
        cursor: pointer;
        background: rgba(144,157,157,1);
   }
   .button-an2{
       background: rgba(90,196,224,0.9);
       border: 1px solid rgb(255, 255, 255,0.2);
       padding: 5px 15px;
       width: 100px;
       color: rgba(255, 255, 255, 0.8);
       
   }
   .button-an2:hover{
        cursor: pointer;
        background: rgba(90,196,224,1);
   }
    .button-xia{
       background: rgba(242,120,75, 0.9);
       border: 1px solid rgb(255, 255, 255,0.2);
       padding: 10px 15px;
       width: 150px;
       color: rgba(255, 255, 255, 0.8);
      
   }
   .button-xia:hover{
        cursor: pointer;
        background: rgba(242,120,75,1);
   }


.el-dialog >>> .el-dialog__title {
     position: absolute;
    top: 10px;
    line-height: 20px;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    /* background: red; */
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
</style>


