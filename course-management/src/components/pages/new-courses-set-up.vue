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
                                <div style="height:0px;font-size:14px;color: rgba(255, 255, 255, 0.8);">编辑课程基本信息</div>
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
                    <div style="float:left;width:33.3%; height:60px;background:#69A4E0;cursor:pointer;">
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
                        </div>
                    </div>
                </router-link>
                 <div style="clear:both"></div>
            </div>

            <div style="width:100%;min-width: 1150px;border:1px solid rgba(0,0,0,0.2);">
                <div style="width:100%;height:45px;line-height:45px;border-bottom:1px solid rgba(0,0,0,0.2);">
                    <div style="padding-left:15px;color: rgba(0, 0, 0, 0.8);font-size:20px;">封面介绍</div>
                </div>
                <!-- <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">课程标题</h4> 
                    <div style="width:50%;margin-top:10px;">
                        <label><input type="radio" v-on:click="show=false" id="radio1"  name="1">免费</label>
                        <label><input v-on:click="show=true" type="radio" name="1"/>收费</label>
                        
                    </div>
                    
                    <div v-show="show">
                        <div style="margin-top:15px;">原价：<input type="text" placeholder="0" style="width:150px;height:30px;padding-left:10px;">元 <span>优惠：0折</span></div>
                        <div style="margin-top:15px;margin-bottom:15px;">实价：<input type="text" placeholder="0" style="width:150px;height:30px;padding-left:10px;">元</div>

                    </div>
                </div>

                <div style="margin-top:15px;margin-left:15px;">
                    <button style="background:#337AB7;padding:5px 25px;border:1px solid rgba(0,0,0,0.1);color:#fff;">设置试读章节</button>
                    
                </div> -->

                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">是否公开：</h4> 
                    <div style="width:50%;">
                        <el-select v-model="value"  placeholder="是" style="width:150px;">
                            <el-option 
                            v-for="item in option"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                    <div style="margin-top:10px;">
                        <i class="el-icon-info"></i> 如果设置不公开，则不会在学员主页上对外公开显示该课程
                    </div>
                </div>

                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">课程标签</h4> 
                    <div style="width:50%;margin-top:15px;">
                        <!-- <input type="text" placeholder="输入后，按enter添加标签" style="width:70%;height:30px;padding-left:10px;"> -->
                        <el-select v-model="value5" style="width:100%;" multiple placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    
                </div>
                 <el-dialog title="请选择允许学习的组" class="el-dialog" :visible.sync="showFlag" style="width:100%;background:rgba(0,0,0,0.1);" >
                        <div style=" width:96%;margin: auto;text-align:left;">
                            <div style="position: relative;width:100%;margin-bottom:30px;text-align:center;">
                                <div  class="input-with-select el-input el-input--small el-input-group el-input-group--append">
                                    <input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
                                    <div class="el-input-group__append">
                                        <button type="button" class="el-button el-button--default">
                                            <i class="el-icon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            <!-- <i class="el-icon-search" style=""></i><input type="text" class="el-but"  placeholder=""> --> 
                            </div>
                           
                            <div style="border:1px solid rgba(0,0,0,0.2);height:260px;padding:0px 10px;">
                                <el-checkbox v-model="checked"><span>所有考生组</span></el-checkbox>
                            </div>
                            <div style="margin-top:30px;"> 
                                    <button @click="showFlag  = false" style="padding:3px 10px;font-size:12px;color:#fff;background:#409EFF;border:1px solid rgba(64,158,255,0.1);">确定</button>
                            </div>
                        </div>
                        
                </el-dialog>
                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">指定小组学习</h4> 
                    <div style="width:50%;margin-top:15px;">
                        <button @click="showFlag = true" type="text" placeholder="" style="width:100%;height:40px;padding-left:10px;background:#fafafa;border:1px solid rgba(0,0,0,0.1);"></button>
                    </div>
                    
                </div>
                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">学习顺序限制</h4> 
                    <div style="width:50%;margin-top:10px;">
                        <el-checkbox v-model="checked">对学员限制学习顺序</el-checkbox>
                    </div>
                    <div style="margin-top:10px;">
                        <i class="el-icon-info"></i> 针对PDF类的文档课件学习，如果学员翻页比设置时间快，则该页学习无效
                    </div>
                    
                </div>
                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">课程难度级别</h4> 
                    <div style="width:50%;margin-top:10px;">
                        <el-select v-model="value" placeholder="初级" style="width:150px;">
                            <el-option v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                
                            </el-option>
                        </el-select>
                    </div>
                </div>

                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">有效的学习翻页时间</h4> 
                    <div style="width:50%;margin-top:10px;">
                        <el-input-number style="width:90px;" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="360"></el-input-number>秒
                    </div>
                    <div style="margin-top:10px;">
                        <i class="el-icon-info"></i> 针对PDF类的文档课件学习，如果学员翻页比设置时间快，则该页学习无效
                    </div>
                </div>

                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">课程预计时长</h4> 
                    <div style="width:50%;margin-top:10px;">
                        <el-input-number style="width:90px;" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="24"></el-input-number>小时
                        <el-input-number style="width:90px;" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="60"></el-input-number>分钟

                    </div>
                    
                </div>

                <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">课程视频播放时是否可拖动进度条</h4> 
                    <div style="width:50%;">
                        <el-select v-model="value"  placeholder="是" style="width:150px;">
                            <el-option 
                            v-for="item in option"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </div>

                <!-- <div style="margin-top:15px;margin-left:15px;">
                    <h4 style="color:#5D7AB3;font-size:22px;">课程有效时间</h4> 
                    <div style="width:50%; margin-top:15px;margin-bottom:15px;">
                        <label><input type="radio"> 永久</label>    
                    </div>
                    <div style="width:50%;margin-top:15px;margin-bottom:15px;">
                        <label><input type="radio"> 购买后</label><el-input-number style="width:150px;" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="24"></el-input-number>天内有效
   
                    </div>
                    <div style="width:50%;margin-top:15px;margin-bottom:40px;">
                        <label><input type="radio"> 固定日期</label> 
                        <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
   
                    </div>
                </div> -->
                
            </div>
        </div>
        <div style="margin:auto;width:100%;">
            <div style="width:98%;margin:30px auto;height:60px;">
                <div style="float:left;width:43%;text-align:right;margin-right:3%;">
                    <router-link to="/new-courses-center" tag="dl">
                        <button style="padding:5px 30px;border:1px solid rgba(0,0,0,0.1);background:#95A5A6;">上一步</button>
                    </router-link>
                </div>
                <div style="float:left;width:44%;">
                    <router-link to="" tag="dl">
                        <button style="padding:5px 30px;border:1px solid rgba(0,0,0,0.1);background:#F2784B;">保存</button>
                    </router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script >
import $ from '../../../static/js/jquery-3.2.1.min'
export default {
    data(){
        return{
            radio: '1',
            
            option:[{
                value:"1",
                label:"是"
            },{
                value:"2",
                label:"否"
            }],
            options:[{
                value:"1",
                label:"初级"
            },{
                value:"2",
                label:"中级",
            },{
                value:"3",
                label:"高级",
            }],
            value:'',
            editor: {},
            checked:false,
            show:false,
            num:1,

            pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        value1: '',

        showFlag:false,

        checked:false,


         options: [{
          value: '选项1',
          label: '免费课'
        }, {
          value: '选项2',
          label: '精品课'
        }],
        value5: [],
        }
    },
   methods: {
       handleChange(value){

       },
       tui(){
           this.$router.go(-1)
       }
   }
}
</script>
<style  scoped>
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
    .el-dialog__body{
        background: yellow;
    }
    .el-dialog__header {
    padding: 20px 20px 10px;
    background: red;
}


.el-dialog >>> .el-dialog__title {
    line-height: 20px;
    position: relative;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
}
.el-dialog >>> element.style{
    z-index: 222222;
}
.el-dialog >>> .el-dialog__header {
    /* background: rgba(233, 233, 233,0.3); */
    padding:10px 20px;
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

.el-dialog >>>.el-icon-search {
    position: absolute;
    top: 5px;
    z-index: 1001;
    padding: 5px;
    margin-right: 30px;
    left: 9px;
}
.el-dialog >>>.el-input {
    border: hidden;
    border-radius: 1px;
}
.el-input-group__append {
    border-left: 0;
}
.el-input-group--prepend .el-input__inner, .el-input-group__append {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.el-input-group__append, .el-input-group__prepend {
    background-color: #f5f7fa;
    color: #909399;
    display: table-cell;
    position: relative;
    border-radius:0px 4px 4px 0px;
}
.el-input--small .el-input__inner {
    height: 35px;
    line-height: 32px;
}

.el-but{
    position: relative;
    width:100%;
    border-left:none;
    border: 1px solid rgba(0,0,0,0.2);
    /* border-radius: 30px; */
    padding:5px 0px 5px 0px;
}
.el-but:focus{
     border: 1px solid rgba(0,0,0,0.2);
    /* border-radius: 30px; */
}
</style>


