<template>
  <div class="tab-control">
      
      <div class="tab-control-item" :class="{active:index==currentIndex}" 
           v-for="(item,index) in titles" :key="index" 
           @click="itemClick(index)">

          <span>{{item}}</span>
      </div>

  </div>
</template>

<script>
import {ref} from 'vue';
export default {
    name:"tabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return [];   
            }
        }
    },
    setup(props,{emit}){
        let currentIndex=ref(0);
        const itemClick=(index)=>{
            currentIndex.value=index;
            emit('tabClick',index)
        }
        return {
            currentIndex,
            itemClick
        }
    }
}
</script>

<style scoped lang="scss">
    .tab-control{
        display: flex;
        height: 40px;
        width:100%;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        background-color: #fff;
        z-index: 10;

        position:sticky;
        top:44px;
        
        .tab-control-item{
            flex:1;
            span{
                padding:6px;
            }
        }
        .active{
            color:var(--color-tint);
            span{
                border-bottom: 3px solid var(--color-tint);
            }
        }
    }
</style>