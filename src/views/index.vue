<template>
    <div id="Index">
        <p class="bg">{{Msg}}</p>
        <router-link to='/load'>first page</router-link>
    </div>
</template>
<script>
    export default{
        mounted: function(){

        },
        data: function(){
           return {
                Msg:'这是首页了'
           }
        }
    }
</script>
<style>
    .bg{
        background-color:red;
    }
</style>