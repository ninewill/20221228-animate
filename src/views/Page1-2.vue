<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1">
        <div class="g1-l">
          <div class="g1-l-img">
            <img
              class="g1-l-img-pc"
              src="@/assets/images/pic/s2_MASTER.svg"
              alt="圖片"
            />
            <img
              class="g1-l-img-mb"
              src="@/assets/images/mobile/s2_MASTER.svg"
              alt="圖片"
            />
          </div>
        </div>
        <div class="g1-r">
          <div class="g1-r-img">
            <img
              class="g1-r-img-pc"
              src="@/assets/images/pic/s2_t2_intro_image01_2x.png"
              alt="圖片"
            />
            <img
              class="g1-r-img-mb"
              src="@/assets/images/mobile/s2_t2_intro_image01.png"
              alt="圖片"
            />
          </div>
        </div>
      </div>
      <div class="g1-item-wrapper">
        <div class="h1">勇於嘗試，<br />做就對了！</div>
        <div class="h3">Residential<br />Designer</div>
        <div class="g1-item-wrap">
          <div class="g1-item-img">
            <img
              class="g1-item-img-pc"
              src="@/assets/images/pic/s2_t2_intro_image02_2x.png"
              alt="圖片"
            />
            <img
              class="g1-item-img-mb"
              src="@/assets/images/mobile/s2_t2_intro_image02.png"
              alt="圖片"
            />
          </div>
          <router-link to="/page1-1-2" title="watch more" class="watch-more"
            >watch more <span class="arrow-icon"></span
          ></router-link>
        </div>
      </div>
      <div class="grid-block g1-1">
        <div class="g-top">
          <div class="g-title">
            <div class="h1">蕭博宇</div>
            <div class="subtitle">
              <p>住宅設計師 /</p>
              <p>雨室設計 /</p>
            </div>
          </div>
          <div class="g-pfp">
            <img
              class="g-pfp-pc"
              src="@/assets/images/pic/s2_t2_intro_image03_2x.png"
              alt="圖片"
            />
            <img
              class="g-pfp-mb"
              src="@/assets/images/mobile/s2_t2.png"
              alt="圖片"
            />
          </div>
        </div>
        <div class="g-description">
          <p>
            擁有5年室內設計相關經歷，擅長設計製圖、施工圖面繪製，累績豐富製圖與工地經驗等。
          </p>
          <p>
            透過設計手法帶給整個空間藝術美感及便利性、實用性，隨著格局規劃與安排，讓生活空間變得豐富且擁有更多想像，發展出更多的挑戰性及可能性。
          </p>
        </div>
      </div>
      <div class="grid-block g6">
        <NavbarSub />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSub from "@/components/Navbar-sub.vue";

export default {
  components: {
    NavbarSub,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/grid.scss";

.g1-item-wrapper {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 37px;
  padding-bottom: 37px;
  position: relative;

  @include min-width(1025px) {
    width: 42%;
    padding-right: 80px;
    padding-left: 135px;
    border-right: 1px solid $color-gray-6;
  }

  > .h1 {
    color: $color-primary-1;
    font-size: 5vw;

    @include min-width(1025px) {
      font-size: 2vw;
    }
  }

  > .h3 {
    margin-top: 2rem;
    color: $color-gray-6;
    line-height: 1.3;
    font-size: 4vw;

    @include min-width(1025px) {
      margin-top: 8rem;
      font-size: 1.8vw;
    }
  }

  .g1-item-wrap {
    width: 100%;
    margin-top: 1rem;
    position: relative;

    @include min-width(1025px) {
      margin-top: 0;
      width: 80%;
      position: absolute;
      bottom: 15%;
      left: 0;
      z-index: 15;
    }

    .g1-item-img {
      width: 100%;
      overflow: hidden;

      .g1-item-img-pc {
        display: none;

        @include min-width(1025px) {
          display: block;
        }
      }

      .g1-item-img-mb {
        display: block;

        @include min-width(1025px) {
          display: none;
        }
      }

      > img {
        width: 100%;
        transform: scale(1.5);
        animation: scale-ame 1s forwards;
      }
    }

    .watch-more {
      position: absolute;
      top: -70px;
      right: 0px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-primary-1;
      color: $color-white;
      transition: 0.2s;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.2;

      @include min-width(768px) {
        width: 125px;
        height: 125px;
        top: -100px;
        right: 50px;
        font-size: 1vw;
				line-height: 1.5;
      }

			@include min-width(960px) {
				width: 130px;
        height: 130px;
				font-size: 16px;
			}

      @include min-width(1025px) {
        width: 135px;
        height: 135px;
        top: -50px;
        right: -50px;
        font-size: 0.8vw;

        &:hover {
          background-color: $color-default;
        }
      }

      @include min-width(1280px) {
        width: 167px;
        height: 167px;
      }

      .arrow-icon {
        width: 10px;
        height: 10px;
        margin-right: 1rem;
        display: block;
        background: url("@/assets/images/icon/s2_btn_arrow.svg") no-repeat
          center/cover;

					@include min-width(960px) {
          width: 13px;
          height: 13px;
        }

        @include min-width(1025px) {
          width: 15px;
          height: 15px;
          margin-right: 0;
          margin-left: 0.5rem;
        }
      }
    }
  }
}

.grid-main {
  .g1 {
    width: 100%;
    height: 100%;
    padding: 0;

    @include min-width(1025px) {
      width: 32%;
      padding: 30px 20px;
    }

    &:after {
      @include min-width(1025px) {
        height: 100vh;
        margin-top: 0;
        top: 0;
      }
    }

    .g1-l {
      width: 100%;
      padding-top: 2rem;
      padding-bottom: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $color-gray-6;

      @include min-width(1025px) {
        width: 33%;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
        border-bottom: none;
      }

      .g1-l-img {
        width: 30%;
        margin: 0 auto;

        @include min-width(1025px) {
          width: 45%;
        }

        .g1-l-img-pc {
          display: none;

          @include min-width(1025px) {
            display: block;
          }
        }

        .g1-l-img-mb {
          display: block;

          @include min-width(1025px) {
            display: none;
          }
        }

        > img {
          width: 100%;
        }
      }
    }

    .g1-r {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      margin-top: 2rem;
      position: relative;

      @include min-width(1025px) {
        width: 67%;
        margin-top: 0;
        padding: 0;
      }

      .g1-r-img {
        > img {
          width: 100%;
          transform: scale(1.5);
          animation: scale-ame 1s forwards;
        }

        @include min-width(1025px) {
          position: absolute;
          right: -30%;
          z-index: 10;
          overflow: hidden;
        }

        .g1-r-img-pc {
          display: none;

          @include min-width(1025px) {
            display: block;
          }
        }

        .g1-r-img-mb {
          display: block;

          @include min-width(1025px) {
            display: none;
          }
        }
      }
    }
  }

  .g1-1 {
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    position: relative;

    @include min-width(1025px) {
      width: 21%;
      border-right: 1px solid $color-gray-6;
    }
  }

  .g-top {
    display: flex;
    justify-content: space-between;
    align-items: end;

    @include min-width(1025px) {
      display: block;
    }

    .g-title {
      width: 50%;

      @include min-width(1025px) {
        width: auto;
      }

      > .h1 {
        color: $color-primary-1;
        font-size: 5vw;

        @include min-width(1025px) {
          font-size: 2.5vw;
        }
      }

      .subtitle {
        margin-top: 1rem;

        > p {
          margin-top: 0.2rem;
          line-height: 1.2;
          font-size: 14px;
          color: $color-gray-5;

          @include min-width(1025px) {
            line-height: 1.5;
            font-size: 1vw;
          }
        }
      }
    }

    .g-pfp {
      width: 50%;

      @include min-width(1025px) {
        width: auto;
      }
    }

    .g-pfp-pc {
      display: none;

      @include min-width(1025px) {
        display: block;
      }
    }

    .g-pfp-mb {
      display: block;

      @include min-width(1025px) {
        display: none;
      }
    }
  }

  .g-description {
    > p {
      line-height: 1.5;
      color: $color-gray-4;
    }
  }
}
</style>