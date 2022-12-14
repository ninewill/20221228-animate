<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1">
        <h3 class="h3">MASTER</h3>
      </div>
      <div class="grid-block g2">
        <div class="g2-top">
          <div class="h1">實力派講師 全方位傳授 設計思路</div>
          <div class="h2">教你快速掌握室內設計系統整合流程與技法</div>
        </div>
        <div class="g2-bottom">
          <div class="InteriorDesign">
            <img
              src="@/assets/images/pic/s1_Interior.svg"
              alt="InteriorDesign"
            />
          </div>
        </div>
      </div>
      <div class="grid-block g3">
        <div class="g-top">
          <div class="g-title">
            <div class="h3">MASTER</div>
            <div class="h1">
              <span>專業得獎手</span>
              <span>01</span>
            </div>
          </div>
          <div class="g-pfp-wrap">
            <div class="g-pfp">
              <img
                class="g-pc"
                src="@/assets/images/pic/s2_t1_2x.png"
                alt="圖片"
              />
              <img
                class="g-mb"
                src="@/assets/images/mobile/s2_t1.png"
                alt="圖片"
              />
            </div>
            <div class="g-description">
              <div class="h1">謝昱宏</div>
              <p>專業得獎手 /</p>
              <p>遇見設計主理人 /</p>
            </div>
          </div>
        </div>
        <div class="g-bottom">
          <router-link to="/page1-1" title="SEE MORE" class="more-btn"
            >SEE MORE</router-link
          >
        </div>
      </div>
      <div class="grid-block g4">
        <div class="g-top">
          <div class="g-title">
            <div class="h3">MASTER</div>
            <div class="h1">
              <span>住宅設計師</span>
              <span>02</span>
            </div>
          </div>
          <div class="g-pfp-wrap">
            <div class="g-pfp">
              <img
                class="g-pc"
                src="@/assets/images/pic/s2_t2_2x.png"
                alt="圖片"
              />
              <img
                class="g-mb"
                src="@/assets/images/mobile/s2_t2.png"
                alt="圖片"
              />
            </div>
            <div class="g-description">
              <div class="h1">蕭博宇</div>
              <p>住宅設計師 /</p>
              <p>雨室設計 /</p>
            </div>
          </div>
        </div>
        <div class="g-bottom">
          <router-link to="/page1-2" title="SEE MORE" class="more-btn"
            >SEE MORE</router-link
          >
        </div>
      </div>
      <div class="grid-block g5">
        <div class="g-top">
          <div class="g-title">
            <div class="h3">MASTER</div>
            <div class="h1">
              <span>商空設計師</span>
              <span>03</span>
            </div>
          </div>
          <div class="g-pfp-wrap">
            <div class="g-pfp">
              <img
                class="g-pc"
                src="@/assets/images/pic/s2_t3_2x.png"
                alt="圖片"
              />
              <img
                class="g-mb"
                src="@/assets/images/mobile/s2_t3.png"
                alt="圖片"
              />
            </div>
            <div class="g-description">
              <div class="h1">祝宏慈</div>
              <p>商空設計師 /</p>
              <p>張杏室內裝修設計 /</p>
            </div>
          </div>
        </div>
        <div class="g-bottom">
          <router-link to="/page1-3" title="SEE MORE" class="more-btn"
            >SEE MORE</router-link
          >
        </div>
      </div>
      <div class="grid-block g6">
        <div class="g6-img">
          <img class="g6-pc" src="@/assets/images/pic/s0_deco.svg" alt="圖片" />
          <img
            class="g6-mb"
            src="@/assets/images/mobile/s0_MASTER.svg"
            alt="圖片"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/grid.scss";

.grid-main {
  .g1 {
    border-bottom: 1px solid $color-gray-6;

    @include min-width(1025px) {
      border-bottom: none;
    }
  }

  .g2 {
    @include min-width(1025px) {
      border-bottom: none;
    }

    @media screen and (min-width: 1025px) and (max-height: 600px) {
      height: auto;
    }
  }

  .g3 {
    @include min-width(1025px) {
      border-bottom: none;
    }
  }

  .g4 {
    @include min-width(1025px) {
      border-bottom: none;
    }
  }
}

.g-pfp-wrap {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @include min-width(1025px) {
    margin-top: 0;
  }

  .g-pfp {
    width: 49%;

    @include min-width(1025px) {
      width: 100%;
    }
  }

  .g-description {
    width: 49%;

    @include min-width(1025px) {
      width: 100%;
    }
  }

  @include min-width(1025px) {
    display: block;
  }
}

.g-pc {
  display: none;

  @include min-width(1025px) {
    display: block;
  }
}

.g-mb {
  display: block;

  @include min-width(1025px) {
    display: none;
  }
}
</style>