<template>
    <div class="tabs">
        <router-link to='/index' active-class="active" tag="li">
            <div>
                <dl><img src="../img/home-curr.png" alt=""></dl>
                <dt>{{indexMsg}}</dt>
            </div>
        </router-link>
        <router-link to='/load' active-class="active" tag="li">
            <dl><img src="../img/movie.png" alt=""></dl>
            <dt>{{loadMsg}}</dt>
        </router-link>
    </div>
</template>
<script>
export default {
    mounted: function() {

    },
    data: function() {
        return {
            indexMsg: '首页',
            loadMsg: '列表'
        }
    }
}
</script>
<style>
.tabs li {
    overflow: hidden;
    float: left;
    width: 45%;
    height: 25px;
    line-height: 25px;
    margin-left: 11px;
    font-weight: bold;
}

.bg {
    background-color: grey;
}

dl img {
    width: 20px;
}
</style>