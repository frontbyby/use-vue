/*首页登录页*/
<template>
    <div id="load">
        <form id="check">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="userName" name="userName"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userPwd" name="userPwd"></mt-field>
            <mt-button type="primary" size="large" @click.native="onSubmit"> 登 录 </mt-button>
        </form>
    </div>
</template>
<script>
    import { Field, Button} from 'mint-ui';
    import $ from 'jquery';
    export default{
        mounted: function(){
            
        },
        data: function(){
           return {
                userName:'',
                userPwd:''
           }
        },
        methods: {
            onSubmit: function() {
                //提交用户名和密码
                window.location.href=window.location.href.split('/').slice(0,-1).join('/')+'/index';
                // $.ajax({
                //     type: 'post',
                //     url:' ',
                //     data:{
                //         'userName': this.userName,
                //         'userPwd': this.userPwd
                //     },
                //     success:function(result){
                //         alert('.....')
                //     }
                // })
            }

        }
    }
</script>
<style>
    #load{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:rgba(0,0,0,.8)   
    }
    #check{
        position:absolute;
        width:30%;
        height: 150px;
        top:140px;
        left:30%;
        text-align: center;
        line-height:35px;
        font-size:16px;
         padding:10px;
    }
</style>