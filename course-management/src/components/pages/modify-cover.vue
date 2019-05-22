<template>
    <div id="new-courses">
        <div style="margin-top:30px;position: relative;">
            <div style="margin-bottom:20px;min-width: 1150px;width:100%;background:#F4F5F6;position: relative;height:45px;line-height:45px;">
                <span style="padding-left:15px;font-size:18px;color:rgba(0,0,0,0.6);">选择封面</span> <span @click="close" style="position: absolute;right:10px;"><i class="el-icon-close"></i></span>
            </div>
            <div style="width:100%;margin:auto;min-width:1150px;">
                <el-tabs  @tab-click="handleClick" style="text-align: center;" >
                    <el-tab-pane label="图片库" ></el-tab-pane>
                    <el-tab-pane label="上传图片"></el-tab-pane>
                </el-tabs>
                <div v-if="tabType == 0">
                    <div style="width:100%;margin-bottom:50px;">
                        <div style="float:left;width:15%;min-width:115px; margin:auto;text-align: center;" >
                            <div class="typename" v-bind:class="{colorChange:index==dynamic}"   @click="image = item.images"  v-for="(item,index) in library" :key="item.id">
                               <div @click="getMoney(index)">{{item.typeName}}</div> 
                            </div>
                        </div>
                        <div style="float:left;width:84%; margin-left:1%;">
                            <div v-for="item in image" :key="item.id" style=" width:100%;min-width:1000px;background:redtext-align:center;">
                                <img class="tu"  :src="item.url" alt="">
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="modify-buttom">
                        <button class="modify-buttom-b" @click="open">选择</button> 
                    </div>
                </div>
                <div v-if="tabType ==1">
                    <div style="width:100%;margin:auto;text-align: center;">
                        <el-upload
                            class="upload-demo"
                            action=""
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                        </el-upload>
                        
                    </div>
                    <button>上传图片</button>
                </div>
            </div>
           <router-view >

            </router-view>
        
        </div>
        
        
    </div>
</template>
<script >
export default {
    data(){
        return{
            image:[],
            tabType:0,
            library:[
                {
                    id:1,
                    typeName:"我的上传",
                },
                {
                    id:2,
                    typeName:"党建封面",
                    images:[
                        {
                            url:require("../../assets/images/dang.png")
                        },
                        {
                            url:require("../../assets/images/dang.png")
                        },
                        {
                            url:require("../../assets/images/dang.png")
                        },
                        {
                            url:require("../../assets/images/dang.png")
                        },
                        {
                            url:require("../../assets/images/dang.png")
                        },
                        {
                            url:require("../../assets/images/dang.png")
                        }
                    ]
                },
                {
                    id:3,
                    typeName:"教育封面",
                    images:[
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },{
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        },{
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        },{
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        },{
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },
                        {
                            url:require("../../assets/images/jiao.png")
                        },{
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        },{
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        },{
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        }
                    ]
                },
                {
                    id:4,
                    typeName:"金融封面",
                    images:[
                        {
                            url:require("../../assets/images/jin.png")
                        },
                        {
                            url:require("../../assets/images/jin.png")
                        }
                    ]
                },
                {
                    id:5,
                    typeName:"商务封面",
                    images:[
                        {
                            url:require("../../assets/images/shang.png")
                        },
                        {
                            url:require("../../assets/images/shang.png")
                        }
                    ]
                },
                {
                    id:6,
                    typeName:"医学封面",
                    images:[
                        {
                            url:require("../../assets/images/yi.png")
                        },
                        {
                            url:require("../../assets/images/yi.png")
                        }
                    ]
                },
                {
                    id:7,
                    typeName:"其他封面",
                    images:[
                        {
                            url:require("../../assets/images/qita.png")
                        },
                        {
                            url:require("../../assets/images/qita.png")
                        }
                    ]
                }
            ],
            dynamic:0,

            fileList:[{}],
        }
    },
   methods: {
      close(){
          this.$router.go(-1)
      },
      handleClick(tab, event) {
          this.tabType = tab.index;
          var _val = tab.index;
      },
      getMoney(index){
          this.dynamic = index;
      },
      open(){
          this.$alert('请选择封面','',{
              callback: avtion => {
                  this.$message({
                      type:'info',
                      message:'action:${action}'
                  });
              }
          })
      },

       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
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
    .el-icon-close{
        color: rgba(0,0,0,0.2);
    }
    .el-icon-close:hover{
        cursor: pointer;
        color: rgba(0,0,0,0.6);
    }

    .typename{
        background:#F0F5F8;padding:10px;
        color: rgba(46,118,188, 0.8);
    }
    .typename:hover{
        cursor: pointer;
        background:#EEEEEE;
        color: rgba(46,118,188, 1);
    }
    
      .colorChange {
        background-color: #36AAFD;
        color: rgba(255,255,255,0.6);
    }
    .colorChange:hover{
        cursor:default;
        background-color: #36AAFD;
        color: rgba(255,255,255,0.6);
    }
    .tu{
        opacity: 1.0;
        filter: alpha(opacity=100);
        margin:25px 0px 0px 25px;
        padding:5px; 
        border:1px solid rgba(0,0,0,0.2);
        width:200px;
        height:150px;
        float:left
    }
    .tu:hover{
         border:1px solid rgba(46,118,188, 0.6);
         /* color: rgba(); */
         opacity:0.9;
        filter: alpha(opacity=90);
    }
    .modify-buttom{
        width: 100%;
        position: fixed;
        bottom: 0px;
        right: 0px;
        height: 50px;
        background: #fff;
        text-align:right; 
        padding-right: 100px;
    }
    .modify-buttom-b{
        padding: 8px 40px;
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(44,116,183,0.8);
        color: #fff;
    }
    .modify-buttom-b:hover{
        background: rgba(44,116,183,1);

    }

</style>


