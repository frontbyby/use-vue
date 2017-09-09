<template>
<div>
    <router-link to='/index'  active-class="active" tag="li">
        <div class="Index">{{indexMsg}}</div>    
    </router-link>
    <router-link to='/load' active-class="active" tag="li">
        <div class="Index">{{loadMsg}}</div>   
    </router-link>
</div>
    
</template>
<script>
    export default{
        mounted: function(){

        },
        data: function(){
           return {
                indexMsg:'这是首页了',
                loadMsg: 'loading..',
                indexClass: "Index",
                loadClass: "Index"
           }
        }
    }
</script>
<style>
    li{
        overflow: hidden;
        float: left;
        width: 45%;
        height: 25px;
        line-height: 25px;
        border-radius: 5px;
        margin-left: 11px;
        font-weight: bold;
        border: 1px solid #ED5464;
    }
    .bg{
        background-color:grey;
    }
</style>