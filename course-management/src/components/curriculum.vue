<template>
    <div>
        <div>
            <div id="top" style="width: 100%; height: 80px;"></div>
            <div style="float: left;" id="menu" class="content">
                <span>待拖拽的div</span>
            </div>
            <div id="rightbar" style="width: 10px; background: #cccccc; cursor: e-resize; float: left;"></div>
        </div>
        <div id="right">
            右边的div
        </div>
    </div>
</template>
<script>
import {tes} from "../../static/js/tes.js"
export default {
    name: 'zhinengjifang',
  data () {
    return {
      
    }
  },
  components: {
  },
  methods: {
    
  }
}
</script>
<style scoped >
#curriculum{
    width: 1000px;
    /* background-color: rebeccapurple; */
    margin: auto;
}
 .content {
width: 800px;
min-width:600px;
background: #f1f1f1;
text-align: center;
}
</style>


