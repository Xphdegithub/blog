<template>
  <div class="article--wraper">
    <Layout :show-banner="false">
      <template #header>
        <Header />
      </template>
      <template #main>
        <div class="article-content--container">
          <ArticleLayout :showLeft="false">
          <template #main>
            <router-view />
          </template>
          <template #right>
            <Catalogue/>
          </template>
        </ArticleLayout>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layouts/VerticalFour.vue";
import Header from "@/components/Header";
import Catalogue from '../../components/Article/Catalogue.vue';
import ArticleLayout from "../../components/Layouts/HorizontalThree.vue";
export default {
  components: {
    Layout,
    ArticleLayout,
    Header,
    Catalogue,
  },
};
</script>

<style lang="less" scoped>
.article--wraper {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .article-content--container {
    margin-top: 30px;
    // background: brown;
  }
}
</style>