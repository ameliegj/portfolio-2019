<template>
  <div class="app">
    <NavBarHome/>
    default
    <slot/>
  </div>
</template>

<script>
  import NavBarHome from '@/components/NavBarHome.vue'
  export default {
    name : 'Default',
    components: {
      NavBarHome
    }
  }
</script>

<style lang="scss">
  @import '@/assets/global.scss';

  .app{
    font-family: $font
  }

</style>