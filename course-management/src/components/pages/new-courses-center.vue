<template>
    <div id="new-courses">
        <div style="margin-top:30px;">
            <div style="margin-bottom:20px;min-width: 1150px;">
                <router-link to="/new-courses" tag="dl">
                    <div style="float:left;width:33.3%; height:60px;background:#E5E5E5;cursor:pointer;">
                    
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
                    <div style="float:left;width:33.3%; height:60px;background:#69A4E0;cursor:pointer;">
                    
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
            <div style="width:100%;min-width: 1150px; ">
                <div style="float:left;width:22.5%;min-width: 250px;margin-right:1%; position: relative;">
                    <!-- <div style="position:fixed;width:22.5%;min-width: 250px;margin-right:1%;"> -->
                        <div style="width:100%;height:45px;background:#5E738B;line-height:45px;border:1px solid rgba(0,0,0,0.2);">
                            <div style="padding-left:15px;color: rgba(255, 255, 255, 0.8);font-size:20px;">封面介绍</div>
                        </div>
                        <div style="width:100%;height:500px; border:1px solid rgba(0,0,0,0.2);margin-bottom:10px;">
                            <div style="text-align: center;margin: 30px auto;">
                                <router-link to="/new-chapter" tag="dl">
                                    <button class="span-button">新建章节</button>
                                </router-link>
                                
                            </div>
                        </div>
                    <!-- </div> -->
                </div>
                <div style="float:left;width:54.6%;min-width: 600px;margin-right:1%;">
                    <div style="width:100%;border:1px solid rgba(0,0,0,0.2);">
                        <div style="height:45px;line-height:45px;padding-left:15px;font-size:14px;">编辑框</div>
                    </div>
                    <div style="width:100%;height:600px;position: relative;border:1px solid rgba(0,0,0,0.2);">
                        <router-view>
                            
                        </router-view>
                    </div>
                    <div style="margin:auto;width:100%;">
                        <div style="width:98%;margin:30px auto;height:60px;">
                            <div style="float:left;width:50%;">
                                <router-link to="/new-courses" tag="dl">
                                    <button style="padding:5px 30px;border:1px solid rgba(0,0,0,0.1);background:#95A5A6;">上一步</button>
                                </router-link>
                            </div>
                            <div style="float:left;width:50%;text-align:right;">
                                <router-link to="/new-courses-set-up" tag="dl">
                                    <button style="padding:5px 30px;border:1px solid rgba(0,0,0,0.1);background:#F2784B;">下一步</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div style="float:left;width:20.5%;min-width: 230px;">
                    <div style="width:100%;height:45px;background:#5E738B;line-height:45px;border:1px solid rgba(0,0,0,0.2);">
                        <div style="padding-left:15px;color: rgba(255, 255, 255, 0.8);font-size:20px;">资源管理</div>
                    </div>
                    
                    <div style="width:100%;height:500px; border:1px solid rgba(0,0,0,0.2);margin-bottom:10px;">
                        <div style="display: flex;margin:auto; text-align: center;padding:30px;" >
                                <input placeholder="搜索分类" style="flex-grow: 1; 
                                    height: 40px; outline: currentcolor none medium; 
                                    border: 1px solid rgb(224, 224, 224); width:200px;
                                    padding: 0px 10px; box-sizing: border-box;">
                                <button style="cursor: pointer; font-size: 20px;background:#1D8DFF; flex-grow: 0; height: 40px; 
                                    min-width: 68px; border: medium none; color: rgb(255, 255, 255);">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16" 
                                    style="font-size: 20px;">
                                <path fill="currentColor" 
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class="">
                                </path></svg>
                            </button>
                        </div>
                        <div style="text-align: center;margin: auto;padding-bottom:15px;padding-top:60px;">
                            <!-- <button style="background:#5BC0DE;border:1px solid #fff;padding:5px 40px;">上传文件</button> -->
                           
                        </div>
                        <div style="text-align: center;margin: auto;">
                            <button style="background:#F2784B;border:1px solid #fff;padding:5px 34px;">新建根目录</button>
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                
                                :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                            </el-upload>
                        </div> 
                    </div>

                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>
<script >
import $ from '../../../static/js/jquery-3.2.1.min'
export default {
    data(){
        return{
            show:true,
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

            fileList:[{}],
        }
    },
   methods: {
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
    },
    handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
  },
  mounted () {
    let E = window.wangEditor
    this.editor = new E('#toolBar', '#editor')
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
    .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    }
   .button-x{
       background:#5BC0DE;
       border:1px solid rgba(0,0,0,0.1); 
       padding:5px 30px;
   }
</style>


