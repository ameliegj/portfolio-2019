<template>
  <div class="home">
    <p>home</p>
    <h1>Bonjour !<h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

// <script>
import HelloWorld from '@/components/HelloWorld.vue'
import NavBarHome from '@/components/NavBarHome.vue'

export default {
  // name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss">
.home {
  @import '@/assets/global.scss';

}
</style>
