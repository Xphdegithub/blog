<template>
<div class="markdown-body">
  <v-md-preview-html :html="text" height="400px"></v-md-preview-html>
</div>
</template>

<script>
import testArticle from './ArticleList/test.md'
console.log(testArticle)
export default {
  data() {
    return {
      text: testArticle
    }
  },
  created() {
    // console.log(result)
  }
}
</script>

<style lang="less" scoped>
  .markdown-body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    // margin-top: 20px;
    border-radius: 6px;
    background: #fff;
  }
</style>