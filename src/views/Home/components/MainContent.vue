<template>
  <div class="main-content--wraper">
    <div class="content-left--wraper">
      <ArticleItem/>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Article/ArticleItem.vue';
export default {
  components: {
    ArticleItem,
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/layout.less';
  .main-content--wraper {
    width: 100%;
    height: auto;
    .center--flex();
    justify-content: space-between;
    .content-left--wraper {
      width: 850px;
      height: auto;
    }
  }
</style>