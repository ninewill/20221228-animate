<template>
  <div id="wrapper" class="layout">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/main.scss";
@import "@/assets/scss/glightbox.scss";

html,
body {
  width: 100%;
  height: 100%;
  font-size: map-get($fontsize, 5);
}

body {
  //line-height: 1.6em;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  font-size: 1rem;
  font-family: "微軟正黑體", "Microsoft JhengHei", sans-serif, Arial, Helvetica;
  letter-spacing: 0.5px;
}

// * ==========================================================================
// * 包覆整個網頁的區塊
// * ==========================================================================

#wrapper,
#app {
  width: 100%;

  @include min-width(1025px) {
    height: 100%;
  }
}

.layout {
  @include min-width(1025px) {
    //padding-right: 30px;
    display: flex;
    align-items: center;
  }

  //@include min-width(1025px) {
  //	padding-right: 60px;
  //}
}

// * ==========================================================================
// * 主要內容區域（#main 裡面的基本樣式）
// * ==========================================================================

#main {
  //padding-top: 37px;
  //padding-bottom: 37px;
  padding-left: 76px;
  padding-right: 30px;
  position: relative;
  // height: 100%;
  @include min-width(960px) {
    //padding-top: 60px;
    //padding-bottom: 60px;
    padding-left: 92px;
  }

  @include min-width(1025px) {
    padding-left: 122px;
    padding-right: 60px;
  }

  @include min-width(1280px) {
    padding-left: 122px;
  }

  // 單頁式網站的主要內容區塊
  &.anchor-main {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

// * ==========================================================================
// * 頁面外圍控制整體布局寬度
// * ==========================================================================

.wrap {
  width: calc(100% - 10%);
  margin: auto;
}

.wrap-content {
  width: 100%;
}

.layout-1 {
  width: 100%;
  min-height: 776px;
  transition: 0.2s;

  @include min-height(800px) {
    min-height: 80vh;
  }
}
</style>
