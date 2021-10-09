<template>
  <div class="home--wraper">
    <Layout>
      <template #header>
        <Header :is-scroll='false'/>
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
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let marginTopDis = document.querySelector('html').scrollTop;
      let styleArr1 = [
        {
          styleName: 'background',
          styleVal: '#fff',
        },
        {
          styleName: 'color',
          styleVal: '#000',
        }
      ];
      let styleArr2 = [
        {
          styleName: 'background',
          styleVal: 'transparent',
        },
        {
          styleName: 'color',
          styleVal: '#fff',
        }
      ];
      if(marginTopDis >= 300) {
        console.log(this.$bus);
        this.$bus.$emit('changeHeaderStyle', styleArr1);
      }
      if(marginTopDis<= 60) {
        this.$bus.$emit('changeHeaderStyle', styleArr2);
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .home--wraper {
    width: 100%;
    height: 100%;
  }
</style>
