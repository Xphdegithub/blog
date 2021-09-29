<template>
  <div class="home--wraper">
    <Layout>
      <template #header>
        <Header/>
      </template>
      <template #banner>
        <Banner/>
      </template>
      <template #main>
        <MainContent/>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/layout.vue';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import MainContent from './components/MainContent.vue';
// import IconComp from '@/components/IconComp';
export default {
  name: 'Home',
  components: {
    Layout,
    Header,
    Banner,
    MainContent,
  }
}
</script>

<style lang="less" scoped>
  .home--wraper {
    width: 100%;
    height: 100%;
  }
</style>
