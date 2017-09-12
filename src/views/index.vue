<template>
    <div id="Index" @click="hide">
        <h2>豆瓣推荐小说</h2>
        <div class="loading" v-show="!lists.length">
            <img src="../img/hj.gif" alt="">
            <div class="loadText">Loading...</div>
        </div>
        <ul v-show="lists.length">
            <li v-for=" (item, i) in lists" :key="item.title" class="item lf">
                <dl>
                    <dt>
                        <a :href="item.link">
                            <img :src="item.pic" alt="">
                        </a>
                    </dt>
                    <dd>
                        <a>{{item.title}}</a>
                    </dd>
                </dl>
            </li>
        </ul>

    </div>
</template>
<script>
import $ from 'jquery';
import bus from "../bus";
export default {
    created: function() {
        if (new Date() - new Date(window.localStorage.firstLogin) > 86500000) {
            window.localStorage.clear();
        }
        var that = this;
        !window.localStorage.getItem("source") && $.ajax({
            type: "GET",
            url: "/spider",
            success: function(data) {
                console.log(data);
                that.$data.lists = data;
                window.localStorage.setItem("firstLogin", new Date())
                window.localStorage.setItem("source", JSON.stringify(data))
            }
        })
    },
    data: function() {
        return {
            Msg: '这是首页了',
            lists: JSON.parse(window.localStorage.source) || []
        }
    },
    methods: {
        hide() {
            bus.$emit("change")
        }
    }
}
</script>
<style>
#Index {
    overflow: hidden;
    width: 100%;
    padding: 5%;
}

#Index .loading {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(77, 142, 156, 1);
}

#Index .loading img {
    width: 150px;
    margin-top: 50%;
}

#Index .loading .loadText {
    font-size: 16px;
    font-weight: bold;
}

#Index h2 {
    position: fixed;
    width: 100%;
    height: 25px;
    line-height: 25px;
    top: 0;
    left: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
}

#Index ul {
    margin-top: 15px;
}

#Index .item {
    width: 30%;
    overflow: hidden;
    height: 129px;
    margin: 10px 0;
}

#Index .item a img {
    width: 50px;
    height: 90px;
    border: 1px solid #ddd;
}

#Index .item dd {
    word-wrap: break-word;
    word-break: keep-all;
    margin-top: 10px;
}
</style>