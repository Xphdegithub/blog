// 纵向布局
<template>
  <div class="layout--wraper">
    <header class="layout-header--wraper">
      <slot name="header"></slot>
    </header>
    <main class="layout-main--wraper">
      <slot name="main"></slot>
    </main>
    <footer class="layout-footer--wraper">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
@import url("~@/assets/less/layout.less");
.layout--wraper {
  width: 100%;
  height: 100%;
  // background: #f4f4f4;

  .center--flex(column);
  justify-content: space-between;
  .layout-header--wraper {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 999;
    color: #fff;
  }
  .layout-main--wraper {
    width: 1200px;
    flex: 1 0 auto;
    padding: 30px 24px;
  }
  .layout-footer--wraper {
    width: 100%;
    height: 150px;
    background: #04060a;
  }
}
</style>
