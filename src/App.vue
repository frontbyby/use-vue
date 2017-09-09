<template>
  <div id="app">
      <router-view></router-view>
      <div id="aa">
        <Tab/>
      </div>
  </div>
</template>
<script>
  import Tab from "./views/tab.vue";
  export default {
    name: "App",
    components:{
      Tab
    }
  }
</script>
<style>
  #aa{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 10px;
  }
  .active{
        background: #ED5464;
        color: white;
    }
</style>
