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
              <h4 class="h4">經歷案件</h4>
              <p>- 碧波白B6實品屋/</p>
              <p>B7實品屋/A2-6F</p>
              <p>- 美麗殿精品旅館</p>
              <p>- 新莊拓穎辦公室</p>
              <p>- 永鼎帝京</p>
              <p>- 水灣景觀餐廳榕堤店</p>
            </div>
            <div class="g1-r-b">
              <h4 class="h4">得獎經歷</h4>
              <p>- 2021 美國繆思設計大獎 金獎</p>
              <p>- 2021 紐約設計大獎 銀獎</p>
              <p>- 2021 倫敦傑出房地產大獎 榮譽獎</p>
              <p>- 2021 美國 IDA 國際設計大獎 榮譽獎</p>
              <p>- 2022 柏林設計獎 銀獎</p>
              <p>- 2022 義大利 A'設計大獎賽 銅獎</p>
              <p>- 2022 美國 泰坦地產大獎 金獎</p>
            </div>
          </div>
          <div class="g1-bottom">
            <router-link to="/page1-1" title="SEE MORE" class="more-btn"
              >BACK INTRO<span class="arrow-icon"></span
            ></router-link>
          </div>
        </div>
      </div>
      <div class="g1-item-wrapper">
        <div class="item item1 item1-1" tabindex="1">
          <div class="mask-info">
            <div class="h1">新莊拓穎辦公室</div>
            <ul>
              <li>得獎獎項</li>
              <li>2021 美國繆思大獎Muse Awards白金獎</li>
              <li>2021 紐約設計大獎New York Design Awards銀獎</li>
              <li>2021 美國星火設計大獎優選</li>
              <li>2021 倫敦傑出房地產大獎The OPAL Award優勝Winner</li>
              <li>2021 美國International Design Awards ( IDA）榮譽獎</li>
              <li>2022 義大利A’ Design Award and Competition 銅獎</li>
            </ul>
          </div>
        </div>
        <div class="item item2 item1-2" tabindex="2">
          <div class="mask-info">
            <div class="h1">水灣景觀餐廳榕堤店</div>
          </div>
        </div>
        <div class="item item3 item1-3" tabindex="3">
          <div class="mask-info">
            <div class="h1">永鼎帝京</div>
            <ul>
              <li>得獎獎項</li>
              <li>2021 倫敦傑出房地產大獎The OPAL Award榮譽獎</li>
              <li>2022 美國 TITAN Property Awards 金獎</li>
              <li>2022 巴黎設計大獎Berlin Design Award 優選</li>
              <li>2022 美國 TITAN Property Awards 金獎</li>
            </ul>
          </div>
        </div>
        <div class="item item4 item1-4" tabindex="4">
          <div class="mask-info">
            <div class="h1">美麗殿精品旅館</div>
            <ul>
              <li>得獎獎項</li>
              <li>2021 美國繆思設計大獎Muse Awards金獎</li>
              <li>2021 紐約設計大獎New York Design Awards優選</li>
              <li>2021 倫敦傑出房地產大獎The OPAL Award榮譽獎</li>
              <li>2022 柏林設計獎Berlin Design Award 銀獎</li>
            </ul>
          </div>
        </div>
        <div class="item item5 item1-5" tabindex="5">
          <div class="mask-info">
            <div class="h1">碧波白B6實品屋</div>
            <ul>
              <li>得獎獎項</li>
              <li>2021 法國創新設計大獎Novum Design Awards金獎</li>
              <li>2021 美國繆思設計大獎Muse Awards金獎</li>
            </ul>
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
          line-height: 1.3;
          font-size: 1rem;
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
        justify-content: start;
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
}
.item4 {
  grid-area: photo4;
}
.item5 {
  grid-area: photo5;
}

//Grid 圖片背景設定
.item1-1 {
  background: url("@/assets/images/mobile/s2_t1_works_image01.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t1_works_image01_2x.png") no-repeat
      center/cover;
  }
}
.item1-2 {
  background: url("@/assets/images/mobile/s2_t1_works_image02.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t1_works_image02_2x.png") no-repeat
      center/cover;
  }
}
.item1-3 {
  background: url("@/assets/images/mobile/s2_t1_works_image03.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t1_works_image03_2x.png") no-repeat
      center/cover;
  }
}
.item1-4 {
  background: url("@/assets/images/mobile/s2_t1_works_image04.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t1_works_image04_2x.png") no-repeat
      center/cover;
  }
}
.item1-5 {
  background: url("@/assets/images/mobile/s2_t1_works_image05.png") no-repeat
    center/cover;

  @include min-width(1025px) {
    background: url("@/assets/images/pic/s2_t1_works_image05_2x.png") no-repeat
      center/cover;
  }
}
</style>