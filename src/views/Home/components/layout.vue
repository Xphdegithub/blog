<template>
  <div class="layout--wraper">
    <header class="layout-header--wraper">
      <slot name="header"></slot>
    </header>
    <section class="layout-banner--wraper">
      <slot name="banner"></slot>
    </section>
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
  background: #f4f4f4;

  .center--flex(column);
  justify-content: space-between;
  .layout-header--wraper {
    width: 100%;
    flex: 0 0 60px;
    position: fixed;
    z-index: 999;
    color: #fff;
  }
  .layout-banner--wraper {
    width: 100%;
    height: 600px;
  }
  .layout-main--wraper {
    width: 1200px;
    flex: 1 0 auto;
    padding: 30px 24px;
  }
  .layout-footer--wraper {
    width: 100%;
    flex: 0 0 150px;
    background: #04060a;
  }
}
</style>
