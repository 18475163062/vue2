<template>
    <div id="chapter">
        <div style="margin-top:250px;">
            <img style="width:120px;height:120px;" src="../../assets/images/chapter_tips.png" alt="">
        </div>
        <div style="width:100%;margin: auto;text-align: center;height:30px;">
            <div style="width:450px;text-align: center;margin:auto;margin-top:30px;">
                <div style="float:left;">没有章节信息，点击左上角的</div>
                <div style="float:left;margin:0px 10px;">
                    <router-link to="/new-chapter" tag="dl"><span class="span-button">新建章节</span></router-link>
                </div>  
                <div style="float:left;">按钮添加章节吧</div>
            </div>
            
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #chapter{
        text-align: center;
        width: 100%;
        margin: auto;
        height: 600px;
    }
    .span-button{
        border: 1px solid rgba(255, 255, 255,0.1);
        padding: 3px 15px;
        background: rgba(88,193,222, 0.8);
        color: rgba(255, 255, 255, 208);
    }
    .span-button:hover{
        cursor: pointer;
        background: rgba(88,193,222, 1);
    }
</style>


