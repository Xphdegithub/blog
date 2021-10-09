<template>
  <div class="article-item--wraper" v-if="articleData">
    <p class="aricle-item-title" @click="toArticleDetail">
      {{ articleData.title }}
    </p>
    <p class="article-item-time">{{ articleData.createTime }}</p>
    <p class="article-item-tag--wraper">
      <span class="tag-item" v-for="tagItem in articleData.tags" :key="tagItem.id">{{tagItem.tagName}}</span>
    </p>
  </div>
</template>

<script>

export default {
  props: {
    articleData: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toArticleDetail(articleId) {
      this.$router.push(
        {
          name: 'ArticleDetail',
          params: {
            id: articleId,
          }
        },
      )
    }
  }
 
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/layout.less';
  .article-item--wraper {
    width: 100%;
    height: 110px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    .center--flex(column);
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
    .aricle-item-title {
      font-size: 20px;
      cursor: pointer;
    }
    .article-item-time {
      color: rgba(0, 0, 0, .6);
      font-size: 12px;
    }
    .article-item-tag--wraper {
      font-size: 13px;
      color: #fff;
      .center--flex();
      justify-content: flex-start;
      .tag-item {
        display: block;
        background: #000;
        padding: 5px 6px;
        border-radius: 4px;
        margin-right: 15px;
        &:nth-last-of-type(1) {
          margin-right: 0;
        }
      }
    }
  }
</style>