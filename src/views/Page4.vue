<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1">
        <h3 class="h3">PRESENT</h3>
      </div>
      <div class="grid-block g2">
        <div class="g2-top">
          <div class="h1">
            <img
              src="@/assets/images/pic/s2_text_InteriorDesign.svg"
              alt="s2_text_Interior"
            />
          </div>
        </div>
        <div class="nav-item">
          <a @click="handChangePage(0)" :class="{ active: pageIdx === 0 }">
            <div class="tab-list">
              <div class="tab-img">
                <div class="mask">
                  <span>DESIGN TOOL</span>
                </div>
                <img
                  class="tab-img-pc"
                  src="@/assets/images/pic/s5_image01_2x.png"
                  alt="圖片"
                />
                <img
                  class="tab-img-mb"
                  src="@/assets/images/mobile/s5_image01.png"
                  alt="圖片"
                />
              </div>
              <div class="h3">PRESENT 01</div>
              <p>大師首推設計必備工具</p>
            </div>
          </a>
          <a @click="handChangePage(1)" :class="{ active: pageIdx === 1 }">
            <div class="tab-list">
              <div class="tab-img">
                <div class="mask">
                  <span>DESIGN COURSE</span>
                </div>
                <img
                  class="tab-img-pc"
                  src="@/assets/images/pic/s5_image02_2x.png"
                  alt="圖片"
                />
                <img
                  class="tab-img-mb"
                  src="@/assets/images/mobile/s5_image02.png"
                  alt="圖片"
                />
              </div>
              <div class="h3">PRESENT 02</div>
              <p>大師進階精華課程</p>
            </div>
          </a>
        </div>
      </div>
      <div class="g3-item">
        <div class="card-page">
          <div class="card-pages">
            <div class="page1" v-if="pageIdx === 0">
              <div class="mid">
                <div class="mid-title">
                  <div class="h3">大師首推設計必備工具</div>
                  <div class="h2">
                    <span> 室內設計師必備寶典</span>
                    <span> 打造視覺美感兼具實用性設計 </span>
                  </div>
                </div>
                <ul class="mid-content">
                  <li>
                    <div class="h3">PRESENT 01</div>
                    <div class="mid-img">
                      <img
                        src="@/assets/images/pic/s5_p1-1_2x.jpg"
                        alt="圖片"
                      />
                    </div>
                    <div class="h3 tag-sticker">工具書｜1本</div>
                    <p>
                      <span>3D圖解裝修</span>
                      <span>木作常用施工大樣</span>
                    </p>
                  </li>
                  <li>
                    <div class="h3">PRESENT 01</div>
                    <div class="mid-img">
                      <img
                        src="@/assets/images/pic/s5_p1-2_2x.jpg"
                        alt="圖片"
                      />
                    </div>
                    <div class="h3 tag-sticker">工具書｜1本</div>
                    <p><span>建築的法則</span></p>
                  </li>
                  <li>
                    <div class="h3">PRESENT 01</div>
                    <div class="mid-img">
                      <img
                        src="@/assets/images/pic/s5_p1-3_2x.jpg"
                        alt="圖片"
                      />
                    </div>
                    <div class="h3 tag-sticker">工具書｜1本</div>
                    <p>
                      <span>密斯凡德羅</span>
                      <span>空間建築書籍</span>
                    </p>
                  </li>
                  <li>
                    <div class="h3">PRESENT 01</div>
                    <div class="mid-img">
                      <img
                        src="@/assets/images/pic/s5_p1-4_2x.jpg"
                        alt="圖片"
                      />
                    </div>
                    <div class="h3 tag-sticker">設計工具｜3個</div>
                    <p>
                      <span>40公尺</span>
                      <span>雷射測距儀</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="page2" v-show="pageIdx === 1">
              <div class="mid">
                <div class="mid-title">
                  <div class="h3">設計大師進階精華課程</div>
                  <div class="h2">
                    <span>設計初學者必修課程</span>
                    <span>限量供應</span>
                  </div>
                </div>
                <ul class="mid-content2">
                  <li>
                    <div class="h3">PRESENT 01</div>
                    <div class="mid-img">
                      <img
                        src="@/assets/images/pic/s5_p2-1_2x.jpg"
                        alt="圖片"
                      />
                    </div>
                    <div class="h3">初學者必學 全方位體驗課程</div>
                    <p>
                      <span>免費線上180堂全方位課程＋</span>
                      <span>線下3小時精華講座</span>
                    </p>
                  </li>
                  <li>
                    <div class="h3">PRESENT 01</div>
                    <div class="mid-img">
                      <img
                        src="@/assets/images/pic/s5_p2-2_2x.jpg"
                        alt="圖片"
                      />
                    </div>
                    <div class="h3">專業室內設計講師 精華實戰講堂</div>
                    <p>
                      <span>線上/線下講堂 任選一場次</span>
                      <span>( 線上線下 各抽三名)</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lottery">
              <a href="javascript:;" class="more-btn cd-popup-trigger"
                >領取優惠</a
              >
            </div>
            <Form />
          </div>
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
import Form from "@/components/Form.vue";

export default {
  components: {
    Form,
  },
  data() {
    return {
      pageIdx: 0,
    };
  },
  methods: {
    handChangePage: function (idx) {
      this.pageIdx = idx;
    },
  },
  mounted() {
    $(".cd-popup-trigger").on("click", function (event) {
      event.preventDefault();
      $(".cd-popup").addClass("is-visible");
    });

    //close popup
    $(".cd-popup").on("click", function (event) {
      if (
        $(event.target).is(".cd-popup-close") ||
        $(event.target).is(".cd-popup")
      ) {
        event.preventDefault();
        $(this).removeClass("is-visible");
      }
    });

    /*
     * ==========================================================================
     * 輪播表單
     * ==========================================================================
     */

    var swiper3 = new Swiper(".popup-swiper-form", {
      //autoplay: {
      //  delay: 3000,
      //  disableOnInteraction: false,
      //},
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
  },
};
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
}

.g2-top {
  display: none;

  @include min-width(1025px) {
    display: block;
  }

  .h1 {
    width: 60%;

    > img {
      width: 100%;
    }
  }
}

.nav-item {
  display: flex;
  justify-content: space-between;

  @include min-width(1025px) {
    margin-top: 18%;
    display: block;
  }

  > a {
    width: 49%;
    display: block;
    cursor: pointer;

    &:first-child {
      margin-top: 0;
    }

    @include min-width(1025px) {
      width: 100%;
      margin-top: 3rem;
    }

    .tab-list {
      .tab-img {
        position: relative;

        .tab-img-pc {
          display: none;

          @include min-width(1025px) {
            display: block;
          }
        }

        .tab-img-mb {
          display: block;

          @include min-width(1025px) {
            display: none;
          }
        }

        > img {
          width: 100%;
        }

        .mask {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: 0.2s;

          > span {
            display: block;
            font-family: "Cinzel", serif;
            font-weight: 400;
            font-size: 4vw;
            color: $color-white;

            @include min-width(1025px) {
              font-size: 1.2vw;
            }

            &:after {
              content: "";
              display: block;
              width: 20%;
              height: 1px;
              margin: 0 auto;
              background-color: $color-white;
            }
          }
        }

        @include min-width(1025px) {
          &:hover {
            .mask {
              opacity: 1;
            }
          }
        }
      }

      > .h3 {
        margin-top: 1rem;
        font-size: 3.5vw;
        color: $color-primary-1;

        @include min-width(768px) {
          font-size: 3vw;
        }

        @include min-width(1025px) {
          font-size: 1.2vw;
        }
      }

      > p {
        margin-top: 0.5rem;
        text-align: center;
        font-size: 3.5vw;
        color: $color-gray-4;

        @include min-width(768px) {
          margin-top: 0.8rem;
          font-size: 3vw;
        }

        @include min-width(1025px) {
          margin-top: 1rem;
          font-size: 1.2vw;
        }
      }
    }

    &.active {
      .tab-img {
        .mask {
          opacity: 1;
        }
      }
    }
  }
}

.mid {
  .mid-title {
    > .h3 {
      font-size: 6vw;
      color: $color-primary-1;
      line-height: 1.2;
      font-family: "Noto Serif TC", serif;
      font-weight: 700;

      @include min-width(1025px) {
        font-size: 2.5vw;
      }
    }

    > .h2 {
      margin-top: 1rem;

      > span {
        display: block;
        font-size: 3.5vw;
        color: $color-gray-4;

        @include min-width(1025px) {
          font-size: 1.3vw;
        }
      }
    }
  }
  //3列一排
  .mid-content {
    width: 100%;
    margin-top: 1rem;
    padding-top: 3rem;
    padding-right: 15%;
    padding-left: 15%;
    border-top: 1px solid $color-gray-6;

    @include min-width(1025px) {
      margin-top: 1rem;
      padding-top: 1rem;
      padding-right: 0;
      padding-left: 0;
      display: flex;
      justify-content: space-between;
      border-top: none;
    }

    @include min-width(1280px) {
      margin-top: 2rem;
      padding-top: 2rem;
    }

    > li {
      width: 100%;
      margin-bottom: 3rem;

      @include min-width(1025px) {
        width: 23%;
        margin-bottom: 0;
      }

      > .h3 {
        text-align: center;
        font-size: 5vw;
        color: $color-primary-1;

        @include min-width(1025px) {
          font-size: 1vw;
        }

        &.tag-sticker {
          margin-top: 1.5rem;
          padding: 5px;
          border: 1px solid $color-primary-1;
        }
      }

      > p {
        margin-top: 2rem;

        > span {
          line-height: 1.5;
          display: block;
          text-align: center;
          font-size: 4.5vw;
          color: $color-gray-4;

          @include min-width(1025px) {
            font-size: 1.1vw;
          }
        }
      }

      .mid-img {
        margin-top: 1rem;

        > img {
          width: 100%;
        }
      }
    }
  }
  //2列一排
  .mid-content2 {
    width: 100%;
    margin-top: 3rem;
    border-top: 1px solid $color-gray-6;

    @include min-width(1025px) {
      display: flex;
      justify-content: space-between;
      border-top: none;
    }

    > li {
      width: 100%;

      @include min-width(1025px) {
        width: 49%;
      }

      > .h3 {
        margin-top: 1.5rem;
        padding: 0 2rem;
        text-align: center;
        line-height: 1.5;
        font-size: 5vw;
        color: $color-primary-1;

        @include min-width(1025px) {
          font-size: 1vw;
        }
      }

      > p {
        margin-top: 2rem;

        > span {
          display: block;
          text-align: center;
          line-height: 1.5;
          font-size: 4.5vw;
          color: $color-gray-4;

          @include min-width(1025px) {
            font-size: 1.1vw;
          }
        }
      }

      .mid-img {
        margin-top: 1rem;

        > img {
          width: 100%;
        }
      }
    }
  }
}

.lottery {
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  .more-btn {
    padding: 10px 60px;
    border: 1px solid $color-gray-6;
    display: inline-block;
    text-align: center;
    font-size: 4vw;
    font-family: "Cinzel", serif;
    font-weight: 400;
    color: $color-gray-6;
    transition: 0.2s;

    @include min-width(1025px) {
      padding: 5px 100px;
      font-size: 1vw;

      &:hover {
        background-color: $color-primary-1;
        color: $color-white;
      }
    }
  }
}

.g3-item {
  width: 100%;
  padding-top: 37px;
  padding-bottom: 37px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include min-width(1025px) {
    width: 63%;
    border-right: 1px solid $color-gray-6;
  }

  @include min-width(1280px) {
    padding-right: 80px;
    padding-left: 80px;
  }
}

.g3-item-img {
  margin-top: 1.2rem;
  overflow: hidden;

  > img {
    width: 100%;
    animation: scale-ame 1s forwards;
  }
}

.g3-item-info {
  > .h3 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: $color-primary-1;
    font-size: 2vw;
  }

  > p {
    text-align: center;
    color: $color-gray-6;
    font-size: 1vw;
  }
}
</style>