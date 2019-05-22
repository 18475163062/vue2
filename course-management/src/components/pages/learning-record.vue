<template>
    <div id="learningRecord">
        <div style="margin-top:30px;border:1px solid rgba(0,0,0,0.2)">
            <div style="height:45px;background:#337AB7;line-height:45px;">
                <div style="width:98%;margin-left:1%;">
                    --学习记录
                </div>
                
            </div>
            <div style="width:100%;">
                <div style="width:98%;margin-left:1%;margin-top:10px;margin-bottom:10px;">
                    <div style="float:left;width:55%;">
                        <span  v-on:click="back">返回上一级</span><span>|共有学员0人</span>
                    </div>
                    <div style="float:left;width:45%; text-align: right;">排序
                        <el-select v-model="value" placeholder="升序">
                            <el-option v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div>
                        <el-table style="width:100%">
                            <el-table-column type="selection" width="55">
                            </el-table-column>
                            <!-- <el-table-column type="index" width="60">
                            </el-table-column> -->
                            <el-table-column prop="name" label="学员" width="180">
                            </el-table-column>
                            <el-table-column prop="sex" label="完成章节/总章节" min-width="190">
                            </el-table-column>
                            <el-table-column prop="age" label="完成测试/课程测试" min-width="190">
                            </el-table-column>
                            <el-table-column prop="birth" label="生日" width="120">
                            </el-table-column>
                            <!-- <el-table-column prop="addr" label="地址" >
                            </el-table-column> -->
                            <el-table-column label="操作" width="100">
                                <template>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-col :span="24" class="toolbar">
                            <el-pagination 
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage3"
                                :page-size="100"
                                layout="prev,pager,next,jumper"
                                :total="1000">
                            </el-pagination>
                        </el-col>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            options:[{
                value:'1',
                label:"升序"
            },{
                value:'2',
                label:"降序"
            }],
            value:[],

        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        handleSizeChange(val){

        },
        handleCurrentChange(val){

        }
    }
}
</script>
<style scoped>
    #learningRecord{
        margin: auto;
        width: 94%;
        height: 60px;
        
        /* background-color: antiquewhite; */
    }
    .el-select{
        /* background: rgba(red, green, blue, alpha) */
        width: 100px;;
    }
</style>


