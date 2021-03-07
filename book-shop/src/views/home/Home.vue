<template>
    <div id="home">
        <nav-bar>
            <template v-slot:default>图书商城</template>
        </nav-bar>
        <div class="wrapper">
            <div class="content">
                <div class="banners"><img src="~assets/images/1.png" /></div>
                <recommend-view :recommends="recommends"></recommend-view>
                <tab-control
                    :titles="['畅销', '新书', '精选']"
                    @tabClick="tabClickk"
                ></tab-control>
                <goods-list :goods="showGoods"></goods-list>
            </div>
        </div>
    </div>
</template>                                     

<script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "views/home/ChildComps/RecommendView";
import tabControl from "components/content/tabControl/tabControl";
import GoodsList from "components/content/goods/GoodsList";
import { getHomeAllData, getHomeGoods } from "network/home";
import { ref, reactive, onMounted, computed,watchEffect,nextTick} from "vue";
import BScroll from 'better-scroll';

export default {
    name: "Home",
    setup() {
        const recommends = ref([]);

        //商品列表数据模型
        const goods = reactive({
            sales: { page: 0, list: [] },
            new: { page: 0, list: [] },
            recommend: { page: 0, list: [] },
        });

        let currentType = ref("sales");
        const showGoods = computed(() => {
            return goods[currentType.value].list;
        });

        let bscroll=reactive({});

        onMounted(() => {
            getHomeAllData().then((res) => {
               
                recommends.value = res.goods.data;
            });

            getHomeGoods("sales").then((res) => {
                console.log(res);
                goods.sales.list = res.goods.data;
            });
            getHomeGoods("recommend").then((res) => {
                goods.recommend.list = res.goods.data;
            });
            getHomeGoods("new").then((res) => {
                goods.new.list = res.goods.data;
            });

            // 创建betterscroll对象
            bscroll = new BScroll(document.querySelector(".wrapper"), {
                
                probeType: 3,//只要在运动就触发scroll事件
                click: true,//是否允许点击
                pullUpLoad:true//上拉加载更多，默认为false
            });

            // 触发滚动事件
            bscroll.on('scroll',(position)=>{
                // console.log(position.y);
                isShowBackTop.value = isTabFixed.value = (-position.y) > banref.value.offsetHeight;
            })

            //上拉加载数据，触发pullingup
            bscroll.on("pullingUp",()=>{
              
                bscroll.refresh();
            })
        });

        const tabClickk = (index) => {
            let type = ["sales", "new", "recommend"];
            currentType.value = type[index];
        };

        //监听任何一个变量有变化
        
        return {
            recommends,
            tabClickk,
            goods,
            currentType,
            showGoods,
        };
    },
    components: {
        NavBar,
        RecommendView,
        tabControl,
        GoodsList,
    },
};
</script>

<style scoped>
.banners img {
    width: 100%;
    height: auto;
    margin-top: 45px;
}
#home {
    height: 100vh;
    position: relative;
}
.wrapper {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
}
.content {
    
}
</style>
