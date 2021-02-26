<template>
  <div class="home">
    <img alt="Vue logo" src="~assets/logo.png">
    <img alt="Vue logo" :src="imgsrc">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '~components/HelloWorld.vue'//@代表src

export default {
  name: 'Home',
  data(){
    return {
      imgsrc:require('assets/images/2.png')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
