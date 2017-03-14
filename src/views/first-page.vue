<template>
    <div id="First">
        <p class="bg">{{Msg}}</p>
        <router-link to='/second'>second page</router-link>
    </div>
</template>
<script>
    export default{
        mounted: function(){

        },
        data: function(){
           return {
                Msg:'这是第一页,也是首页'
           }
        }
    }
</script>
<style>
    .bg{
        background-color:red;
    }
</style>