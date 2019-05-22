<template>
    <div >
        <el-dialog title="请选择课程分类" class="el-dialog"  :visible.sync="showFlag" style="width:100%;min-width:800px; background:rgba(0,0,0,0.05);">
            <div style="border:1px solid #E7ECF1; height:500px;padding:15px;">
                <div>
                    <!-- <el-table :data="data">
                        <el-table-column label="名称">
                            <template  slot-scope="scope">
                                <span>nihao </span>
                            </template>
                        </el-table-column>
                    </el-table> -->
                    <div v-for="data in datas" :key="data.id">
                        <div style="">
                            <div style="position: relative;height:40px;line-height:40px;">
                                <div style="float:left;"><img style="width:30px;height:20px;" :src="data.xu" alt=""></div>
                                <div style="float:left;backgroung:pink; height:40px;">
                                    <img style="width:20px;height:20px;position: absolute;top:10px;" :src="data.img" alt="">
                                    <span style="position: relative;top:0px;left:30px;">{{data.title}}</span>
                                </div>
                                <div style="clear:both;"></div>
                            </div>
                            
                        </div>
                        <div v-for="index in customized_descs" :key="index" >
                            <div style="position: relative;height:40px;line-height:40px;">
                                <div style="float:left;"><img style="width:30px;height:20px;" :src="data.xu" alt=""></div>
                                <div style="float:left;backgroung:pink; height:40px;">
                                    <img style="width:20px;height:20px;position: absolute;top:10px;" :src="data.img" alt="">
                                    <span style="position: relative;top:0px;left:30px;">{{data.xin}}</span>
                                </div>
                                <div style="clear:both;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <!-- <el-button @click="add">添加</el-button> -->
                <button @click="addCustomizeDesc">新家文件夹</button>
            </div>
        </el-dialog>


        <el-button type="primary" @click="showFlag = true">选择</el-button>
     
 

</div>
</template>
<script>
export default {
    data () {
      return {
        
        radio:"",
        adapters:[{
            id:'1',
            lale:"zxzxz"
        }],
        // data:[],
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
    methods:{
      radioEvent(){
        this.showFlag = false;
        this.adapterSelected = this.radio;
        },
        add(){
            this.data.push({});
        },
        addCustomizeDesc(){
            this.customized_descs.push({});
        }
    }
}
</script>
<style>
.el-dialog__header{
    background: #F4F5F6;
    margin: 0px;
    height: 40px;
    line-height: 40px;
    padding:0px 0px 0px 10px;
    
}
.el-dialog__title{
    color:rgba(0, 0, 0, 0.5);
}
.el-dialog{
    padding: 0px;
}
.el-dialog__headerbtn {
    position: absolute;
    top: 10px;
    right: 5px;
}
.el-dialog__body{
    padding:10px;
    background: red;
    /* border: 1px solid #E7ECF1; */
}
</style>


