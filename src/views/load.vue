/*首页登录页*/

<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       欢迎登录 
      </span>
      <el-row>
        <el-input 
          v-model="account" 
          placeholder="账号"
          type="text">
        </el-input>
        <el-input 
          v-model="password" 
          placeholder="密码"
          type="password">
        </el-input>
        <el-button type="primary">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    };
  }
};
</script>

<style>
  .el-row.content{
      padding: 16px;
  }
  .title{
      font-size: 28px
  }
    
  .el-input{
      margin: 12px 0
  }
    
  .el-button{
      width: 100%;
    margin-top: 12px;
  }
       
</style>