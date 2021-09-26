<template>
  <div class="article-item--wraper">
    <p class="aricle-item-title">时间不在于你拥有多少，而在于你怎么去使用</p>
    <p class="article-item-time">2021-9-21</p>
    <p class="article-item-tag--wraper">
      <span class="tag-item">JavaScript</span>
    </p>
  </div>
</template>

<script>
export default {

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
    .aricle-item-title {
      font-size: 20px;
    }
    .article-item-time {
      color: rgba(0, 0, 0, .6);
      font-size: 12px;
    }
    .article-item-tag--wraper {
      font-size: 13px;
      color: #fff;
      .tag-item {
        display: block;
        background: #000;
        padding: 5px 6px;
        border-radius: 4px;
      }
    }
  }
</style>