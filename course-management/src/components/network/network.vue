<template>
    <div class="network">
        <div class="top" style="width:100%;height:60px;min-width:1200px;">
            <div style="height:60px;width:25%;min-width:300px;float:left;position: relative;">
                <div class="el-icon-back" style="float:left;height:60px;width:80px;line-height:60px;padding:0px 30px;"></div>
                <div style="float:left;height:60px;width:40%;line-height:60px;font-size:16px;color:#000;font-weight: bold;text-algin: center;margin: auto;">1-1课程简介</div>
                <div style="float:left;height:60px;line-height:60px;width:60px;position: absolute;right: 0px;" class="el-icon-star-off">收藏</div>
                <div style="clear:both;"></div>
            </div>
            <div style="width:50%;height:60px;line-height:60px;float:left;min-width:100px;"></div>
            <div style="width:25%;height:60px;line-height:60px;float:left;min-width:300px;position: relative;">
                <div style="position: absolute;right: 15px;">
                    <div style="padding:10px 0px;float:left;">
                        <div style="width:100px;height:40px;line-height:40px;border-radius: 30px;border:1px solid rgba(0,0,0,0.4);text-algin: center;">
                            <div style="float:left;padding:1px 5px 0px 17px;"><img class="tu" src="../../assets/images/cart.svg" alt=""></div>
                            <div style="float:left;font-size:14px;color:rgba(0,0,0,0.6);">购物车</div>
                            <div style="clear:both;"></div>
                        </div>
                    </div>
                    <div style="float:left;width:80px;height:60px;">
                        <div style="padding: 5px 30px;">
                            <div><img class="tu1" src="../../assets/images/clock.svg" alt=""></div>
                        </div>
                        
                    </div>
                    <div style="float:left;width:60px;height:60px;">
                        <div style="padding:10px;">
                            <img class="tu2" :src="img" alt="">
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div class="center" style="height:600px;width:100%;min-width:1200px;background:rgba(28,31,33,1);position: relative;">
            <div style="float:left;width:5%;min-width:60px;height:600px;position: relative;">
                <div style="position: absolute;top:180px;left:15px;text-algin: center;">
                    <div style="margin:15px 0px;" @click="dianji()">
                        <div><img class="tu3" src="../../assets/images/章节.svg" alt=""></div>
                        <div style="font-size:12px;margin:-5px 0px 0px 2px;color:rgba(255,255,255,0.6);">章节</div>
                    </div>
                    <div style="margin:15px 0px;">
                        <div><img class="tu4" src="../../assets/images/问答.svg" alt=""></div>
                        <div style="font-size:12px;margin:-5px 0px 0px 2px;color:rgba(255,255,255,0.6);">问答</div>
                    </div>
                    <div style="margin:15px 0px;">
                        <div><img class="tu3" src="../../assets/images/笔记.svg" alt=""></div>
                        <div style="font-size:12px;margin:-5px 0px 0px 2px;color:rgba(255,255,255,0.6);">笔记</div>
                    </div>
                    <div style="margin:15px 0px;">
                       <div><img class="tu3" src="../../assets/images/评论.svg" alt=""></div>
                        <div style="font-size:12px;margin:-5px 0px 0px 2px;color:rgba(255,255,255,0.6);">评论</div> 
                    </div>
                </div>
            </div>
            <div style="float:left;width:360px;height:600px;background:#26292C;z-index:30000;animation: slideLeft .3s;position: fixed;top: 60px; left: 60px;" @click="dianji()" v-show="div"></div>
            <div style="float:left;width:95%;height:600px;z-index:1000;backgroung:pink;display:flex;">
                
                    <div style="position: relative;flex: 1;" id="menu" class="content">
                        <video style="width:100%;height:600px;outline:none;" src="https://www.imooc.com/6cc913f5-e889-40fd-9e4c-c73635276847" controls="controls"></video>
                    </div>
                    <!-- <div id="rightbar" style="width: 10px;height:600px; background: #cccccc; cursor: e-resize; float: left;"></div> -->
                
                <div id="right" style="width: 380px;background:#1C1F21;margin:0px 0px 0px 30px;height:600px;overflow :auto;position:relative" v-show="right">
                    <span @click="dianji1()" class="el-icon-close" style="position:absolute;right:10px;top:15px;"></span>
                    <div style="margin-top:30px;">
                        <div style="float:left;"><img class="tou" :src="describe[0].tou" alt=""></div>
                        <div style="float:left;margin:5px 0px 0px 10px;color:#fff;font-size:14px;line-height:25px;">
                            <p>{{describe[0].name}}</p> 
                            <p style="font-size:12px;color:rgba(255,255,255,0.6);">{{describe[0].word}}</p> 
                        </div>
                        <div style="clear:both;"></div>
                        <div style="color:rgba(255,255,255,0.6);font-size:12px;margin: 10px 15px 0px 0px;;">{{describe[0].evaluate}}</div>
                        <div style="margin:20px 0px 10px;">
                            <img style="border-radius:8px;" :src="describe[0].tu" alt="">
                        </div>
                    </div>
                    <!-- 讲师课程 -->
                    <div>
                        <div style="color:#fff;">{{lecture}}</div>
                        <div  v-for="(lectur,index) in lecturer" :key="index">
                            <div style="margin:10px 0px;">
                                <div style="float:left;">
                                    <img style="width:100px;height:60px;border-radius:8px;" :src="lectur.tubiao" alt="">
                                </div>
                                <div style="float:left;margin-left:10px;">
                                    <div style="font-size:14px;color:rgba(255,255,255,0.6)">{{lectur.lecturerWord}}</div>
                                    <div style="font-size:12px;color:rgba(255,255,255,0.4)">{{lectur.pice}}</div>
                                </div>
                                <div style="clear:both;"></div>
                            </div>
                            
                        </div>
                    </div>
                    <!-- 相关课程 -->
                    <div>
                        <div style="color:#fff;">{{Relevan}}</div>
                        <div >
                            <div style="margin:10px 0px;">
                                <div style="float:left;">
                                    <img style="width:100px;height:60px;border-radius:8px;" :src="Relevant[0].RelevantTubiao" alt="">
                                </div>
                                <div style="float:left;margin-left:10px;">
                                    <div style="font-size:14px;color:rgba(255,255,255,0.6)">{{Relevant[0].RelevantLecturerWord}}</div>
                                    <div style="font-size:12px;color:rgba(255,255,255,0.4)">{{Relevant[0].RelevantPice}}</div>
                                </div>
                                <div style="clear:both;"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div id="right" style="width:60px;background:#1C1F21;height:600px;" v-show="left">
                    <span @click="dianji1()" style="justify-content: center;algin-items:center;position:absolute;top:280px;right:18px;" class="el-icon-back"></span>
                </div>
                <router-view></router-view>
            </div>
            
        </div>


        <div class="bottom" style="">
            <el-tabs  @tab-click="handleClick" style="text-align: center;background:#fff;padding-left:100px;box-shadow: 0px 4px 8px rgba(0,0,0,0.1);" >
                    <el-tab-pane label="问答" ></el-tab-pane>
                    <el-tab-pane label="评论"></el-tab-pane>
                    <el-tab-pane label="同学笔记"></el-tab-pane>
            </el-tabs>
            <div v-if="tabType == 0">
                <div style="width:100%;margin-bottom:50px;">
                    <div>
                        <router-link>全部</router-link><router-link>精华</router-link>
                    </div>

                </div>
            </div>
            <div v-if="tabType == 1">
                <div style="width:100%;margin-bottom:50px;">
                       1122443
                </div>
            </div>
            <div v-if="tabType == 2">
                <div style="width:100%;margin-bottom:50px;">
                       99984949
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {tes} from "../../../static/js/tes.js"
export default {
    data(){
        return{
            tabType:0,
            img:require("../../assets/images/tou.jpg"),
            div:false,
            left:false,
            right:true,
            chapter:[
                {
                    title:'第1章结构与表现相关内容简介',
                    center:'1-1内容简介',
                    center1:'1-2练习题'
                },
                {
                    title:'第2章 结构与表现相分离的思想',
                    center:'2-1微博用户发言信息列表制作(11:47)',
                    center1:'2-2电话号码布局制作(02:09)',
                    center3:'2-3排行榜制作(03:26)'
                }
            ],
            describe:[{
                tou:require("../../assets/images/tou.jpg"),
                name:'张鑫旭',
                word:'页面重构设计',
                evaluate:'web前端，就职于腾讯ISUX上海设计中心，喜欢卖萌打杂，同事都叫我张老师，(*^__^*) 嘻嘻……',
                tu:require("../../assets/images/jianjie.jpg"),
            }],
            lecture:'讲师课程',
            lecturer:[
                {
                    tubiao:require("../../assets/images/jiang.jpg"),
                    lecturerWord:'大啊大大',
                    pice:"免费.中级.49930人"
                },
                {
                    tubiao:require("../../assets/images/jiang.jpg"),
                    lecturerWord:'撒飒飒',
                    pice:"免费.中级.49930人"
                },
                {
                    tubiao:require("../../assets/images/jiang.jpg"),
                    lecturerWord:'阿萨飒飒',
                    pice:"免费.中级.49930人"
                },
                {
                    tubiao:require("../../assets/images/jiang.jpg"),
                    lecturerWord:'阿萨飒飒',
                    pice:"免费.中级.49930人"
                }
            ],
            Relevan:'相关课程',
            Relevant:[{
                RelevantTubiao:require("../../assets/images/jiang.jpg"),
                RelevantLecturerWord:'CSS深入理解之padding',
                RelevantPice:"免费.中级.49930人"
            }]

        }
    },
    methods:{
        dianji(){
            if(this.div==true){
                this.div=false
            }else{
                this.div=true
            }
        },
        dianji1(){
            if(this.right==true || this.left==false){
                this.right=false
                this.left=true
            }else{
                this.right=true
                this.left=false
            }
        },
        handleClick(tab, event) {
          this.tabType = tab.index;
          var _val = tab.index;
      },
        
    
    },
}
</script>
<style>
.el-icon-back:before{
    font-size: 26px;
    color: rgba(145,153,161, 1);
    
}
.tu{
    
    height: 15px;
    opacity:0.4;
    filter:alpha(opacity=40);
}
.tu1{
    height: 20px;
    opacity:0.4;
    filter:alpha(opacity=40);
}
.tu2{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.tu3{
    width: 25px;
    height: 25px;
    
    opacity:0.6;
    filter:alpha(opacity=60);
}
.tu4{
    width: 25px;
    height: 25px;
    opacity:0.6;
    filter:alpha(opacity=60);
}
.content {
width:90%;
min-width:100px;
background: #f1f1f1;
text-align: center;
}
.el-icon-close:before{
    color: #fff;
    font-size: 26px;
    opacity:0.6;
    filter:alpha(opacity=60);
}
.tou{
    border-radius:50%;
    width: 55px;
    height: 55px;
}
.el-tabs__nav-wrap::after{
    height: 0px;
}
/* .el-tabs__active-bar{
    height: 0px;
} */
</style>
