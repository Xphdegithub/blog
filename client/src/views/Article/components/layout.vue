<template>
    <div class="article-content--wraper">
      <!-- 文章内容 -->
      <div class="content--container">
        <slot name='content'></slot>
      </div>
      <!-- 目录 -->
      <div class="catalogue--container">
        <slot name='catalogue'></slot>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/assets/less/layout.less';
  .article-content--wraper {
    width: 100%;
    .center--flex();
    justify-content: space-between;
    align-items: flex-start;
    .content--container {
      width: 800px;
    }
    .catalogue--container {
      width: 300px;
    }
  }
</style>