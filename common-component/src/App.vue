<template>
  <div id="app" class="content">
    <router-view></router-view>
    <div class="menu">
      <h3 class="title">组件路由</h3>
      <div class="menu-item" :class="item.path == activePath ? 'active': ''" v-for="(item, index) in routes" :key="index" @click="handleGo(item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import routes from '../route.js'
export default {
  data() {
    return {
      routes,
      activePath: routes[0].path
    }
  },
  created() {
    this.$router.push(routes[0].path)
  },
  methods: {
    handleGo(item) {
      this.activePath = item.path
      this.$router.push(item.path)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
.content{
  align-items: top;
}
.title{
  margin: 0;
  font-size: 0.36rem;
}
.menu{
  padding: 0.2rem;
  margin-top: 1rem;
  border-top: 1px solid #f5f5f5;
}
.active{
  color: #426ab3;
}
.menu-item{
  margin-top: 0.2rem;
  font-size: 0.28rem;
}
</style>
