<template>
    <div id="Index">
        <h2>豆瓣推荐小说</h2>
        <ul>
            <li v-for=" item in lists" :key= "item.title" class="item lf">
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
    export default{
        created: function(){
            var that = this;
            !window.localStorage.getItem("source") && $.ajax({
                type: "GET",
                url: "/spider",
                success: function(data){
                    console.log(data);
                    that.$data.lists = data;
                    window.localStorage.setItem("source", JSON.stringify(data))
                }
            })
        },
        data: function(){
           return {
                Msg:'这是首页了',
                lists: JSON.parse(window.localStorage.getItem("source")) || []
           }
        },
        computed: {
            formatTitle: function(title) {
                
            }
        }
    }
</script>
<style>
#Index{
    overflow: hidden;
    width: 100%;
    padding: 5%;
}
#Index h2{
    position: fixed;
    width: 100%;
    height: 25px;
    line-height: 25px;
    top:0;
    left:0;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
}
#Index ul{
    margin-top: 15px;
}
#Index .item {
    width: 30%;
    overflow: hidden;
    height: 129px;
    margin: 10px 0;
}

#Index .item img{
    width: 50px;
    height: 90px;
}
#Index .item dd{
    word-wrap: break-word;
    word-break: keep-all;
    margin-top: 10px;
}
</style>