<template>
  <div class="goods">
      <goods-list-item :product="item" v-for="item in goods" :key="item.id"></goods-list-item>
      
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
    name:"GoodsList",

    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },

    components:{
        GoodsListItem
    }
}
</script>




<style scoped>
    .goods{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        padding:5px;
    }
</style>