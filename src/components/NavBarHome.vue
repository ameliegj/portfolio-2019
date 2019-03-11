<template>
  <div class="nav">
    <a href="/" class="title">Amélie <span>Grosjean</span></a>
    <div class="links">
      <router-link to="/">HOME</router-link>
      <router-link to="projects">PROJECTS</router-link>
      <router-link to="about">ABOUT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarHome'
}
// console.log(this.$route)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/assets/global.scss';
  .nav {
    width: 100vw;
    height: 80px;
    padding: 0px 8vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .title {
      font-weight: 400;
      font-size: 26px;
      color: #000000;
      span {
        font-weight: 900;
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      font-weight: 900;
      font-size: 26px;
      color: $black;
      a {
        margin-left: 30px;
      }
      .router-link-exact-active {
        color: $blue;
      }
    }

  }
</style>
