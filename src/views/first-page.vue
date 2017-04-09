/*首页登录页*/
<template>
    <div id="load">
        <div id="check">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userPwd"></mt-field>
            <br>
            <mt-button type="primary" size="large" @click.native="onSubmit">primary</mt-button>
        </div>
        
        <router-link to='/second'>second page</router-link>
    </div>
</template>
<script>
    import { Field, Button} from 'mint-ui';
    export default{
        mounted: function(){
            
        },
        data: function(){
           return {
                userName:'',
                userPwd:''
           }
        }
    }
</script>
<style>
    #load{
    }
    #check{
    }
</style>