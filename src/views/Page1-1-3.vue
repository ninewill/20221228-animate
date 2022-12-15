<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1-block">
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
          <div class="g1-r-title">
            <img src="@/assets/images/pic/s2_text_DesignWorks.svg" alt="圖片" />
          </div>
          <div class="g1-r-wrap">
            <div class="g1-r-t">
              <h4 class="h4">商業空間設計案件</h4>
              <p>- 台中市第四信用合作社</p>
              <p>- 台中太子悅養身會館設計案</p>
              <p>- 宮原眼科中期櫃體設計及規劃</p>
              <p>- 台北STARHAIR美髮沙龍設計案</p>
              <p>- 1969 藍天雀客飯店設計案</p>
              <p>- SWITER 詩威特台中教育中心 裝修設計</p>
            </div>
            <div class="g1-r-b">
              <h4 class="h4">住宅設計案件</h4>
              <p>- 台中福安11街林宅透天厝設計案</p>
              <p>- 高雄和平一路仰德江宅設計裝修案</p>
              <p>- 美國張公館住宅設計案</p>
              <p>- 台北市官邸築翫林公館 樓中樓設計裝修案</p>
              <p>- 台北民權東路社公館住宅設計案</p>
              <p>- 建設公司王董住宅設計裝修案</p>
            </div>
          </div>
          <div class="g1-bottom">
            <router-link to="/page1-3" title="SEE MORE" class="more-btn"
              >BACK INTRO<span class="arrow-icon"></span
            ></router-link>
          </div>
        </div>
      </div>
      <div class="g1-item-wrapper">
        <div class="item item1 item1-1" tabindex="1">
          <div class="mask-info">
            <div class="h1">1969藍天飯店</div>
          </div>
        </div>
        <div class="item item2 item1-2" tabindex="2">
          <div class="mask-info">
            <div class="h1">藍調文旅</div>
          </div>
        </div>
        <div class="item item3 item1-3" tabindex="3">
          <div class="mask-info">
            <div class="h1">StarHair Salon</div>
          </div>
        </div>
        <div class="item item4 item1-4" tabindex="4">
          <div class="mask-info">
            <div class="h1">牧熊咖啡</div>
          </div>
        </div>
        <div class="item item5 item1-5" tabindex="5">
          <div class="mask-info">
            <div class="h1">喜全真鑄賴宅</div>
          </div>
        </div>
      </div>
      <div class="grid-block g6">
        <NavbarSubs />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSubs from "@/components/Navbar-sub-s.vue";

export default {
  components: {
    NavbarSubs,
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/grid.scss";

.grid-main {
  .g1-block {
    width: 100%;

    @include min-width(1025px) {
      width: 32%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -45vh;
          display: block;
          width: 1px;
          height: 90vh;
          background-color: $color-gray-6;
        }
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
      position: relative;
      margin-top: 2rem;
      padding: 0 23px;

      @include min-width(1025px) {
        width: 67%;
				margin-top: 0;
      }

      .g1-r-title {
        width: 50%;

        @include min-width(768px) {
          width: 40%;
        }

        @include min-width(1025px) {
          width: 60%;
        }

        > img {
          width: 100%;
        }
      }

      .g1-r-wrap {
        margin-top: 40px;
        overflow-y: auto;

        @include min-width(1025px) {
          height: 70vh;
        }

				@media screen and (min-width: 1025px) and (max-height: 850px) {
          height: 50vh;
        }
      }

      .g1-r-t {
        > .h4 {
          margin-bottom: 1rem;
          color: $color-gray-4;
          font-size: 5vw;

          @include min-width(768px) {
            font-size: 2.2vw;
          }

          @include min-width(1025px) {
            font-size: 1.2vw;
          }
        }

        > p {
          margin-bottom: 0.5rem;
          color: $color-gray-4;
          font-size: 4vw;

          @include min-width(768px) {
            font-size: 2vw;
          }

          @include min-width(1025px) {
            font-size: 0.9vw;
          }
        }
      }

      .g1-r-b {
        margin-top: 40px;

        > .h4 {
          margin-bottom: 1rem;
          color: $color-gray-4;

          font-size: 5vw;

          @include min-width(768px) {
            font-size: 2.2vw;
          }

          @include min-width(1025px) {
            font-size: 1.2vw;
          }
        }

        > p {
          margin-bottom: 0.5rem;
          color: $color-gray-4;
          font-size: 4vw;

          @include min-width(768px) {
            font-size: 2vw;
          }

          @include min-width(1025px) {
            font-size: 0.9vw;
          }
        }
      }

      .g1-bottom {
        width: 100%;
        display: flex;
        margin-top: 1rem;

        .more-btn {
          padding: 5px 20px;
          border: 1px solid $color-gray-5;
          display: flex;
          align-items: center;
          text-align: center;
          font-size: 1rem;
          font-family: "Cinzel", serif;
          font-weight: 400;
          color: $color-gray-5;
          transition: 0.2s;

          @include min-width(1025px) {
            &:hover {
              background-color: $color-primary-1;
              color: $color-white;

              .arrow-icon {
                background: url("@/assets/images/icon/s2_btn_arrow.svg")
                  no-repeat center/cover;
              }
            }
          }

          .arrow-icon {
            width: 15px;
            height: 15px;
            margin-left: 0.5rem;
            display: block;
            background: url("@/assets/images/icon/s2_btn_arrow-black.svg")
              no-repeat center/cover;
          }
        }
      }
    }
  }

  .grid-block {
    padding: 0;

    &.g6 {
      padding: 30px 20px;
    }

    @include min-width(1025px) {
      padding: 30px 20px;
    }
  }
}

.g1-item-wrapper {
  width: 100%;
  padding: 30px 20px;
  display: grid;
  position: relative;
  grid-template-rows: auto;
  grid-template-areas:
    "photo1"
    "photo2"
    "photo3"
    "photo4"
    "photo5";

  @include min-width(1025px) {
    width: 63%;
    padding: 0;
    border-right: 1px solid $color-gray-6;
    grid-template-areas:
      "photo1 photo1 photo3"
      "photo1 photo1 photo3"
      "photo1 photo1 photo4"
      "photo2 photo2 photo4"
      "photo2 photo2 photo5"
      "photo2 photo2 photo5";
  }

  .item {
    margin-bottom: 1rem;
    height: 335px;
    position: relative;

    @include min-width(1025px) {
      margin-bottom: 0;
      height: auto;
    }

    .mask-info {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: 0.2s;

      > .h1 {
        color: $color-white;
        font-size: 5vw;

        @include min-width(768px) {
          font-size: 3.5vw;
        }

        @include min-width(1025px) {
          font-size: 2vw;
        }
      }

      > ul {
        margin-top: 1rem;
        overflow-y: auto;

        @include min-width(1025px) {
          min-height: 140px;
          margin-top: 2rem;
        }

        > li {
          margin-bottom: 0.5rem;
          font-size: 0.75vw;
          color: $color-white;

          @include min-width(768px) {
            font-size: 2vw;
          }

          @include min-width(1025px) {
            font-size: 0.75vw;
          }
        }
      }
    }

    &.item1 {
      .mask-info {
        justify-content: center;
        padding: 50px 20px;

        @include min-width(1025px) {
          padding: 60px;
        }
      }
    }

    &:hover {
      .mask-info {
        opacity: 1;
      }
    }
  }
}

//圖片網格
.item1 {
  grid-area: photo1;

  .mask-info {
    > .h1 {
      text-align: center;
    }
  }
}
.item2 {
  grid-area: photo2;

  .mask-info {
    > .h1 {
      text-align: center;
    }

    > ul {
      > li {
        text-align: center;
      }
    }
  }
}
.item3 {
  grid-area: photo3;

  .mask-info {
    > .h1 {
      text-align: center;
    }
  }
}
.item4 {
  grid-area: photo4;

  .mask-info {
    > .h1 {
      text-align: center;
    }
  }
}
.item5 {
  grid-area: photo5;

  .mask-info {
    > .h1 {
      text-align: center;
    }
  }
}

//Grid 圖片背景設定
.item1-1 {
  background: url("@/assets/images/mobile/s2_t3_works_image01.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t3_works_image012_2x.png") no-repeat
      center/cover;
  }
}
.item1-2 {
  background: url("@/assets/images/mobile/s2_t3_works_image02.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t3_works_image02_2x.png") no-repeat
      center/cover;
  }
}
.item1-3 {
  background: url("@/assets/images/mobile/s2_t3_works_image03.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t3_works_image03_2x.png") no-repeat
      center/cover;
  }
}
.item1-4 {
  background: url("@/assets/images/mobile/s2_t3_works_image04.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t3_works_image04_2x.png") no-repeat
      center/cover;
  }
}
.item1-5 {
  background: url("@/assets/images/mobile/s2_t3_works_image05.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t3_works_image05_2x.png") no-repeat
      center/cover;
  }
}
</style>

