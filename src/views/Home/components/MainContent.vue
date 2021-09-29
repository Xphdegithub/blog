<template>
  <div class="main-content--wraper">
    <div class="content-left--wraper">
      <ArticleItem/>
    </div>
    <div class="content-right--wraper">

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
    align-items: flex-start;
    .content-left--wraper {
      flex: 1;
      height: auto;
    }
    .content-right--wraper {
      width: 250px;
      min-height: 500px;
      margin-left: 15px;
      border-radius: 6px;
      background: #fff;
    }
  }
</style>