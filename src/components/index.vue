<template>
  <div class="index">
    <div class="title">{{ articleData.title }}</div>
    <div class="author">{{ articleData.author }}</div>
    <div v-html="articleData.content" class="content"></div>
    <footer>
      全文完 共{{ articleData.wc }}字
      }
    </footer>
  </div>
</template>

<script>
export default {
  props: ['articleData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  text-align: center;
}
.title {
  font-size: 0.4rem;
  font-weight: 600;
  padding: 0.2rem 0.4rem 0;
  border-bottom: 0.01rem solid #ccc;
}
.author, footer {
  color: #8c8768;
  margin: 0.15rem 0;
}
.content {
  text-indent: 2em;
  text-align: left;
  padding: 0 0.4rem;
}
</style>
