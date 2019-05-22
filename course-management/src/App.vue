<template>
  <div id="app">
    <!-- <div class="el-header">
      <span style="margim-top:-30px; height:20px;padding:0px 20px 0px 20px;">
        <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          
            <img class="tu" src="./assets/images/tou.jpg" alt="">
          <span class="tw">大个子<i class="el-icon-arrow-down el-icon--right"></i></span> 
        </span>
        <el-dropdown-menu class="el-dropdown-menu" slot="dropdown">
          <el-dropdown-item command="a">
            <router-link to="/task-list" tag="dl">
              <dd><i class="el-icon-arrow-down el-icon--right"></i>任务列表</dd>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="b">
            <router-link to="/account-management" tag="dl">
              <dd><i class="el-icon-arrow-down el-icon--right"></i>账号管理</dd>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="c">
            <router-link to="/upgrade-account" tag="dl">
              <dd><i class="el-icon-arrow-down el-icon--right"></i>升级账号</dd>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="d"><i class="el-icon-arrow-down el-icon--right"></i>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </span> 
      <span  class="span2">
        <span style="position: relative;top: -6px;">
          <i class="el-icon-arrow-down el-icon--right"></i>退出
        </span>
      </span>
    </div> -->
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      handleCommand(command) {
        // this.$message('click on item ' + command);
      }
    }
}
</script>

<style lang="css" scoped>

.el-header{
  min-width: 1000px;
  /* color: #B7C2CE; */
  background-color: #2B3643;
  height: 40px;
  text-align: right;
  padding-right: 10px;
   
}
.tu{
  position: relative;
  top: 5px;
  border-radius: 50%;
  width: 30px;height: 30px;
}
.el-dropdown-link{
  color: #B7C2CE;
  font-size: 14px;
  /* background-color: blue; */
  padding:18px 20px 6px 10px;
}
.el-dropdown-link:hover{
  background-color: red;
  padding:18px 20px 6px 10px;
}
.tw{
  position: relative;
  top: -5px;
  left: 10px;
}
.span2{
  color: #B7C2CE;
  font-size: 14px;
  height:20px;
  line-height:-20px;
  padding:18px 10px 6px 3px;
}
.span2:hover{
  background-color:red;
}

.el-dropdown-menu{
  padding-right: 60px;
}
</style>
