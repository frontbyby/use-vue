<template>
<div :class="sideBars">
    <div id="sidebar">
        <h2>时光机</h2>
        <div class="collapse" @click="toggle()"> <p> {{sideBars === "fold" ? ">>" : "<<"}} </p></div>
        <ul v-show="!(sideBars === 'fold')">
            <li class="item">菜单</li>
            <li class="item">旧手机</li>
            <li class="item">旧电脑</li>
            <li class="item">旧彩电/显示器</li>
            <li class="item">旧家具换铝盆</li>
        </ul>
    </div>
</div>
    
</template>
<script>
import bus from "../bus";
    export default{
        props: ["sideBar"],
        created: function(){
            var that = this;
            bus.$on('change', function() {
                that.$data.sideBars = "fold";
            })
        },
        data: function(){
           return {
                sideBars: this.sideBar
           }
        },
        methods: {
            toggle: function() {
                this.$data.sideBars = this.$data.sideBars === "sideBar" ? "fold" : "sideBar"; 
            }
        }
    }
</script>
<style>
.sideBar {
    position: fixed;
    width: 50%;
    padding:0 5px;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0.8);
    margin-top: 25px;
    transition: left 0.4s linear;
  }
  .fold {
    position: fixed;
    width: 50%;
    left: -45%;
    padding: 0 5px;
    top: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0);
    margin-top: 25px;
    transition: left 0.4s linear;
    opacity: 0.5;
  }
#sidebar{
    overflow: hidden;
    width: 100%;
}
#sidebar .collapse {
    font-size: 16px;
    position: absolute;
    right: 5px;;
    height: 100%;
}

#sidebar .collapse p{
    margin-top: 250px;
}
#sidebar ul{
    margin-top: 15px;
    border-top:1px solid #ddd; 
}
#sidebar .item {
    border-bottom: 1px solid #ddd;
    padding: 10px;
}
</style>