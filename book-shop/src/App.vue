<template>

  <router-view/> 

  <div id="nav">

      <router-link class="tab-bar-item" to="/">
          <div class="icon"><i class="iconfont icon-home"></i></div>
          <div>首页</div>
      </router-link> 

      <router-link class="tab-bar-item" to="/category">
          <div class="icon"><i class="iconfont icon-fenlei"></i></div>
          <div>分类</div>
      </router-link> 

      <router-link class="tab-bar-item" to="/shopcart">
          <div class="icon"><i class="iconfont icon-icon-test"></i></div>
          <div>购物车</div>
      </router-link> 
          
      <router-link class="tab-bar-item" to="/profile">
          <div class="icon"><i class="iconfont icon-user-line"></i></div>
          <div>我的</div>
      </router-link> 
      
  </div>
  
</template>

<style lang="scss">
  @import "assets/css/base.css";
  @import "assets/css/font/iconfont.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    background-color: #F6F6F6;
    display: flex;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow:0 -1px 1px rgba(32, 20, 20, 0.1);
    a {
      
      color: var(--color-text);

      &.router-link-exact-active {
        color:var(--color-high-text);
      }
    }
    

    .tab-bar-item{
      flex:1;
      text-align: center;
      height: 50px;
      font-size: var(--font-size);
    }
    .tab-bar-item .icon{
      width:24px;
      height: 24px;
      margin-top: 3px;
      
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
