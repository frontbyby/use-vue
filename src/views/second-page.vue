<template>
    <div id="Second">
        <p class="bg">{{Msg}}</p>
        <router-link to='/index'>first page</router-link>
    </div>
</template>
<script>
    export default{
        mounted: function(){

        },
        data: function(){
           return {
                Msg:'这是第二页,不是首页了'
           }
        }
    }
</script>
<style>
    .bg{
        background-color:red;
    }
</style>