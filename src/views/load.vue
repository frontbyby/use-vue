/*首页登录页*/
<template>
    <div id="load">
        <div id="check">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名" >
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密 码">
                    <el-input v-model="form.pwd"></el-input>
                </el-form-item>
                <el-button type="primary" size="large" @click="onSubmit">登    录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
    import { Form, FormItem, Button} from 'element-ui';
    import $ from 'jquery';
    export default{
        mounted: function(){
        },
         data() {
            return {
                    form: {
                    name: '',
                    pwd: ''
                    }
                }
            },
        methods: {
            onSubmit() {
                console.log(name)
                console.log(this.form.name)
                if (this.form.name && this.form.pwd) {
                    console.log('submit!');
                    window.location.href = window.location.host+"/#/index"
                }
                
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
        background:rgba(255,255,255,.8)   
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