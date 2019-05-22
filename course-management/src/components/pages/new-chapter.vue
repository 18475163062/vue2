<template>
    <div id="new-chapter">
        <div style="width:90%;margin:20px auto;">
            <span style="color:rgba(0,0,0,0.4);font-size: 26px;">标题</span> 
            <div>
                <input type="text" style="border:1px solid rgba(0,0,0,0.2); width:100%;padding:8px 0px 8px 5px;">
            </div>
        </div>
        <div style="width:90%;margin:20px auto;">
            <span style="color:rgba(0,0,0,0.4);font-size: 26px;">章节简介</span> 
            <div>
                <textarea name="" id="" cols="30" rows="10" style="width:100%;padding-left:5px;border:1px solid rgba(0,0,0,0.2);"></textarea>
            </div>
        </div>

        <div style="width:85%;margin: auto;">
            <div style="width:100%;height:150px;border-radius:6px; border:1px dashed #028AF4;">
                <!-- <div style="color:rgba(0,0,0,0.4);font-size: 24px;margin-top:50px; width:300px;margin: 30px auto 0px; text-align: center;"> -->
                <el-upload style=""
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
                <!-- </div> -->
            </div>
        </div>

        <div style="width:90%;margin:20px auto;text-align:right;">
            <!-- <router-link to="" tag="dl"> -->
                <button v-on:click="back" class="button-shan">删除章节</button> 
            <!-- </router-link> -->
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
.button-shan{
    color:rgba(255,255,255,0.9);
    padding:5px 20px;
    border:1px solid #fff;
    background:rgba(64,180,173,0.8);
}
.button-shan:hover{
    cursor: pointer;
    background:rgba(64,180,173,1);
}
.el-upload >>> .el-upload-dragger{
    border: 0px;
}
</style>


