<template>
    <div id="curriculums">
        <div class="curriculum-header">
            <div class="curriculum-header-top" style="background:#3598DC;border-radius:4px;border:1px solid rgba(255,255,255,0.1);">
                <router-link to="/storage-space" style="width:100%;height:80px;" tag="dl">
                    <div style="text-align: right;padding-top:5px;padding-right:30px;">
                        <div style="font-size:25px;color:#fff;">2门</div> 
                        <div style="font-size:18px;color:#fff;">课程数量</div>
                    </div>
                </router-link>
            </div>
            <div class="curriculum-header-top" style="background:#E7505A;margin-left:2%;border-radius:4px;border:1px solid rgba(255,255,255,0.1);">
                <router-link to="/curriculum" style="width:100%;height:80px;" tag="dl">
                    <div style="text-align: right;padding-top:5px;padding-right:30px;">
                        <div style="font-size:25px;color:#fff;">1.00</div> 
                        <div style="font-size:18px;color:#fff;">储存空间</div>
                    </div>
                </router-link>
            </div>
            <div class="curriculum-header-top" style="background:#32C5D2;margin-left:2%;margin-right:2%;border-radius:4px;border:1px solid rgba(255,255,255,0.1);">
                <router-link to="/network" style="width:100%;height:80px;" tag="dl">
                    <div style="text-align: right;padding-top:5px;padding-right:30px;">
                        <div style="font-size:25px;color:#fff;">1.00</div> 
                        <div style="font-size:18px;color:#fff;">剩余流量</div>
                    </div>
                </router-link>
            </div>
            <div class="curriculum-header-top" style="background:#8E44AD;border-radius:4px;border:1px solid rgba(255,255,255,0.1);">
                <router-link to="" style="width:100%;height:80px;" tag="dl">
                    <div style="text-align: right;padding-top:5px;padding-right:30px;">
                        <div style="font-size:25px;color:#fff;">0</div> 
                        <div style="font-size:18px;color:#fff;">课程学员</div>
                    </div>
                </router-link>  
            </div>
        </div>
        <div style="clear:both;height:10px;"></div>
        <div class="curriculum-main" >
            <div class="curriculum-left" style="margin-right:1%;">
                <div class="curriculum-left-top">
                    <div style="margin-left:10px;">
                        课程分类
                    </div>
                </div>
                <tree></tree>
                <!-- <div class="curriculum-left-top-main">
                    <div class="curriculum-left-top-main-sou">
                        <div style="display: flex;margin:auto; text-align: center;" >
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
                    </div>
                    <div></div>
                    <div class="curriculum-left-top-main-bottom" style="text-align:center;">
                        <button class="button-xin" type="primary" style="" >新建根目录</button>
                    </div>
                </div> -->
            </div>
            <div class="curriculum-right" style="position:relative">
                <div class="curriculum-right-top">
                    <h5>课程管理</h5> 
                </div>
                <div style="width:98%;margin:auto;padding:10px 0px 10px 0px;">
                    <div style="float:left;margin-right:20px;">
                        <router-link to="new-courses" tag="dl">
                            <el-button class="button1" type="primary" icon="el-icon-plus">新建课程</el-button>
                        </router-link>
                    </div>
                    <div style="float:left;margin-right:20px;">
                        <router-link to="" tag="dl">
                            <el-button type="info" class="button2" plain>移动到分类</el-button>
                        </router-link>
                    </div>
                    <div style="float:left;margin-right:20px;">
                        <router-link to="" tag="dl">
                            <el-button type="info" class="button2" plain icon="el-icon-delete">删除课程</el-button>
                        </router-link>
                    </div>
                    <div style="float:left;position:absolute;right:0px;margin-right:20px;">
                        <el-select v-model="value" class="el-input__inner" style="height:30px;" placeholder="新建日期">
                            <el-option v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div style="clear: both;"></div>
                </div>

                <div class="curriculum-right-center" style="width:98%;margin:auto;">
                    
                    
                    <div style="width:100%;margin:0px 0px 10px 0px;"></div>
                    <div class="curriculum-right-center-top" >
                        <div class="curriculum-right-center-top-left" style="">
                           <el-checkbox v-model="cheackAllChecked" @change='checkAllFun'>全选</el-checkbox> 
                        </div>
                        <div class="curriculum-right-center-top-right" style="">
                            <el-pagination 
                            @size-change="handleSizeChange"
                            @current-page="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[10,30,50,100]"
                            :page-size="100"
                            layout="total,sizes,prev,pager,next,jumper"
                            :total="3">
                            </el-pagination>
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="curriculum-right-center-centent" style="clear: both;">
                        <div v-for="item in List" :key="item.id">
                            <div class="curriculum-right-center-centent-top" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                <div class="curriculum-right-center-centent-top-left">
                                    <el-checkbox v-model='checkArr' :label=item.id  @changer="changevalue">&nbsp;</el-checkbox>
                                </div>
                                <div class="curriculum-right-center-centent-top-right"> 
                                    <div style="float: left;">
                                        <div style="padding:10px 0px 5px 0px; ">
                                            <img :src="item.img" style="width:180px;height:120px;" alt="">
                                        </div>
                                    </div>
                                    <div style="float: left;">
                                        <div style="margin:60px 0px 0px 30px;line-height:30px;">
                                            <p style="font-size: 18px;color:rgba(0,0,0,0.8);">{{item.title}}</p>
                                            <p style="font-size: 12px;color:rgba(0,0,0,0.2);">{{item.guanli}}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div style="position: relative;">
                                    <div style=" width:100%;height:60px;position: relative;margin:30px 0px 10px 0px;">
                                        <div style="position: absolute;right:0px;height:60px;text-align: center;padding-right:30px;">
                                            <div style="float: left;margin-right:30px;">
                                                <div style="color:#0D81F6;font-size:18px;">{{item.curriculum_number}}</div>
                                                <div>{{item.curriculum}}</div>
                                            </div>
                                            <div style="float: left;margin-right:30px;">
                                                <div style="color:#0D81F6;font-size:18px;">{{item.learners_number}}</div>
                                                <div>{{item.learners}}</div>
                                            </div>
                                            <div style="float: left;">
                                                <div style="color:#0D81F6;font-size:18px;">{{item.visitors_number}}</div>
                                                <div>{{item.visitors}}</div>
                                            </div>
                                            <div style="clear: both;"></div>
                                        </div>
                                        
                                    </div>
                                    <div  style="width:100%;height:60px;position: relative;">
                                        <div style="position: absolute;right:0px;">
                                            <div style="float: left;margin-right:10px;">
                                                <router-link to="new-courses" tag="dl">
                                                    <button class="el-button">编辑课程</button>
                                                </router-link>
                                                
                                            </div>
                                            <div style="float: left;margin-right:10px;">
                                                <router-link to="/learning-record" tag="dl">
                                                    <el-button >学习记录</el-button>
                                                </router-link>
                                            </div>
                                            <div style="float: left;margin-right:10px;">
                                                <router-link to="/new-courses-set-up" tag="dl">
                                                    <el-button >设置</el-button>
                                                </router-link>
                                            </div> 
                                            <div style="float: left;margin-right:10px;margin-top:4px;" >
                                                <el-dropdown trigger="click">
                                                    <span class="el-dropdown-link span-link"  >更多<i class="el-icon-arrow-down el-icon--right"></i></span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>分享课程</el-dropdown-item>
                                                        <el-dropdown-item>删除课程</el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </div>
                                        </div>
                                            
                                        <div style="clear: both;"></div>
                                        
                                    </div>
                            </div>
                                <div style="clear: both;"></div>
                            </div>
                            
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tree from '../plugin/Tree.vue'
export default {
    components:{
        tree:Tree,
    },
    data(){
        return{
            List:[{
                id:'1',
                img:require('../assets/images/tu.jpg'),
                title:'课程时长月0小时|共1个章节',
                guanli:'系统管理员创建于2019/04/10上次更新：2019/04/10',
                curriculum_number:'0',
                curriculum:'课程收入',
                learners_number:'0',
                learners:'学习人数',
                visitors_number:'1',
                visitors:'访问人数',
            },{
                id:'2',
                img:require('../assets/images/tu.jpg'),
                title:'课程时长月0小时|共1个章节',
                guanli:'系统管理员创建于2019/04/10上次更新：2019/04/10',
                curriculum_number:'0',
                curriculum:'课程收入',
                learners_number:'0',
                learners:'学习人数',
                visitors_number:'1',
                visitors:'访问人数',
                
            },{
                id:'3',
                img:require('../assets/images/tu.jpg'),
                title:'课程时长月0小时|共1个章节',
                guanli:'系统管理员创建于2019/04/10上次更新：2019/04/10',
                curriculum_number:'0',
                curriculum:'课程收入',
                learners_number:'0',
                learners:'学习人数',
                visitors_number:'1',
                visitors:'访问人数',
            }],

            input10:'',

            options:[{
                value:'1',
                label:"新建日期"
            },
            {
                value:'2',
               label:"修改日期" 
            },{
                value:'3',
                label:"访问次数"
            },{
                value:'4',
                label:'学习人数'
            },{
                value:"5",
                label:'课程收入'
            }
            ],
            value:"",

            currentPage1:5,
            currentPage2:5,
            currentPage3:5,
            currentPage4:5,

            cheackAllChecked:false,
            checkArr:[],
            checkCompleteArr:[]

        };
    },
    methods:{
        handleSizeChange(val){
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val){
            console.log(`当前页: ${val}`);
        },
         checkAllFun() {
      var _this = this;
      this.checkArr = [];
      if (this.cheackAllChecked) {
        this.List.forEach(function(item, index) {
          if (index >= 0) {
            _this.checkArr.push(item.id);
          }
        });
      }
    },
        reverseChecked() {
      var changeArr = [];
      this.List.forEach(function(item, index) {
        if (index >= 0) {
          changeArr.push(item.id);
        }
      });
      this.removeByValue(changeArr, this.checkArr);
    },
        changevalue() {
      var _this = this;
      if (this.checkArr.length <= _this.checkCompleteArr.length) {
        this.cheackAllChecked = false;
      }
      if (this.checkArr.length === _this.checkCompleteArr.length) {
        this.cheackAllChecked = true;
      }
    }
    }
}
</script>
<style scoped>
#curriculums{
    width: 94%;
    /* background-color: #eee; */
    margin: auto;
    
}
.curriculum-header{
    margin: auto;
    width: 100%;
    height: 80px;
    min-width: 1150px;
    /* background-color: red; */
    margin-top: 15px;
}
.curriculum-header-top{
    width: 23.30%;
    /* position: relative; */
    float: left;
    
}
.curriculum-header-top-foter{
    text-align: right;
    /* position: absolute;
    top: 20px;
    right: 30px; */
}
/* .curriculum-center{
    min-width: 10px;;
    float: left;
    background-color: antiquewhite;
    width: 2%;
    height: 300px;;
} */
.curriculum-left{
    float: left;
    width: 22.5%;
    min-width: 250px;
    /* background-color: aqua; */
    height: 600px;
    box-shadow: rgba(0,0,0, 0.1) 0px 0px 5px 1px ;
}
.curriculum-left-top{
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-bottom: hidden;
    width: 100%;
    /* background-color:#5E738B;  */
    line-height: 40px;
    height: 40px;
}
.curriculum-left-top-main{
    width: 100%;
    position: relative;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.curriculum-left-top-main-sou{
    padding: 10px;
}
.curriculum-right{
    float: left;
    width: 76.3%;
    /* height: 300px; */
    min-width: 600px;
    /* background-color: #5E738B; */
    border: 1px solid rgba(0, 0, 0, 0.2);
}
h5{
    
    padding-left:20px; 
}
.curriculum-main{
    width: 100%;
    min-width: 1150px;
    /* background-color: pink; */
    /* height: 500px; */
}
.curriculum-left-top-main-bottom{
    position: absolute;
    bottom: 0px;
    width: 100%;
    /* padding: 10px; */
    /* background-color: #5E738B; */
}
.curriculum-right-top{
    width: 100%;
    height: 40px;
    line-height: 40px;
    /* padding-left: 20px; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.curriculum-right-center-top{
    /* background: red; */
    height: 50px;
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.curriculum-right-center-top-left{
    float: left;
    height:35px;
    line-height: 32px;
}
.curriculum-right-center-top-right{
    padding-left: 30px;
    height:35px;
    float: left;
}
.curriculum-right-center-centent-top{
    margin-bottom: 30px;
    height: 140px;
}
.curriculum-right-center-centent-top:hover{
    background: #F7F8FC;
}
.curriculum-right-center-centent-top-left{
    width: 40px;
    /* background: red; */
    margin: auto;
    float: left;
    height: 130px;
    line-height: 130px;
    text-align: right;
}
.curriculum-right-center-centent-top-right{
    float:left;
}
.el-button{
    height: 30px;
    width: 90px;
    padding: 0px;
    line-height: -60px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
.el-button:focus, .el-button:hover{
    background-color: #fff;
}
.button1{
    height: 40px;
    width: 120px;
    border:1px solid rgba(0,0,0,0.1);
    color:rgba(255,255,255,0.8);
}
.button1:hover{
    background: rgba(91,192,222,0.9);
}
.button2{
    height: 40px;
    width: 120px;
    background: #E1E5EC;
    border:1px solid rgba(0,0,0,0.1);
    color:rgba(0,0,0,0.6);
}
.button-xin{
    width:80%;
    padding:8px 0px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 30px;
    background: rgba(88,196,224, 0.8);
    color: rgba(255, 255, 255, 0.8);
}
.button-xin:hover{
     background: rgba(88,196,224, 01);
}
.button2:hover{
    background: rgba(225,229,236,0.8);
    border:1px solid rgba(0,0,0,0.1);
    color:rgba(0,0,0,0.6);
}
.el-select {
    /* width: 200px; */
    padding: 0px;
    height: 20px;
    border: 0px;
}
.el-input__inner{
    /* height: 30px; */
    padding: 0px;
}
.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    }
    .span-link{
        padding:5px 20px;
        height:35px;
        border:1px solid rgba(0,0,0,0.2);
        border-radius: 4px; background:#fff;
    }
    .span-link:hover{
        cursor: pointer;
        color: rgba(13,129,246, 0.9);
    }
</style>


