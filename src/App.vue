<template>
  <div id="app">
    <div class="header">
      <img src="../static/imgs/menu.svg" alt="" @click="menuClick = !menuClick">
      <img src="../static/imgs/more.svg" alt="">
    </div>
    <leftMenu></leftMenu>
    <rightMenu></rightMenu>
    <router-view :articleData="article"></router-view>
  </div>
</template>

<script>
import reFontSize from '~/rem'
import leftMenu from '~/leftside'
import rightMenu from '~/rightside'
export default {
  name: 'app',
  created () {
    reFontSize.defaultFontSize
  },
  mounted () {
    this.getArticle()
  },
  data () {
    return {
      article: ''
    }
  },
  components: {
    leftMenu,
    rightMenu
  },
  methods: {
    getArticle () {
      this.$ajax({
        methods: 'get',
        baseURL: '/api',
        url: 'today',
        params: {
          dev: 1
        }
      }).then(res => {
        console.log(res)
        this.article = res.data.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0.2rem;
}
.header img {
  width: 10%;
}
</style>
