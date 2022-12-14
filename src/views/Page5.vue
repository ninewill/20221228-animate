<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1">
        <h3 class="h3">Talkshow</h3>
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
                  <span>TRAILER</span>
                </div>
                <img
                  class="tab-img-pc"
                  src="@/assets/images/pic/s6_image01_2x.png"
                  alt="圖片"
                />
                <img
                  class="tab-img-mb"
                  src="@/assets/images/mobile/s6_film01.png"
                  alt="圖片"
                />
              </div>
              <div class="h3">FILM 01</div>
              <p>節目精華搶先看</p>
            </div>
          </a>
          <a @click="handChangePage(1)" :class="{ active: pageIdx === 1 }">
            <div class="tab-list">
              <div class="tab-img">
                <div class="mask">
                  <span>TUTORIAL</span>
                </div>
                <img
                  class="tab-img-pc"
                  src="@/assets/images/pic/s6_image02_2x.png"
                  alt="圖片"
                />
                <img
                  class="tab-img-mb"
                  src="@/assets/images/mobile/s6_film02.png"
                  alt="圖片"
                />
              </div>
              <div class="h3">FILM 02</div>
              <p>剖析室內設計全思路</p>
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
                  <div class="h3">節目精華搶先看</div>
                  <div class="h2">
                    <span> 實力派講師教你突破技能水平</span>
                    <span>成為未來可期的室內設計師</span>
                  </div>
                </div>
                <div class="mid-video">
                  <div class="mid-video-left">
                    <!-- Video -->
                    <video controls loop playsinline>
                      <source
                        src="@/assets/images/video/節目精華搶先看.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div class="mid-video-right">
                    <div class="mid-talkshow">
                      <img
                        src="@/assets/images/pic/s6_text.svg"
                        class="talkshow-pc"
                        alt="圖片"
                      />
                      <img
                        src="@/assets/images/mobile/s6_text.svg"
                        class="talkshow-mb"
                        alt="圖片"
                      />
                    </div>
                  </div>
                </div>
                <div class="lottery">
                  <a href="https://www.youtube.com/watch?v=EUpeqQogI4Y" target="_blank" class="more-btn"
                    >觀看完整節目</a
                  >
                </div>
              </div>
            </div>
            <div class="page2" v-show="pageIdx === 1">
              <div class="mid">
                <div class="mid-title">
                  <div class="h3">剖析室內設計全思路</div>
                  <div class="h2">
                    <span>十分鐘快速解鎖</span>
                    <span>成為專業室內設計師的必備技能</span>
                  </div>
                </div>
                <div class="mid-video">
                  <div class="mid-video-left">
                    <!-- Video -->
										<video controls loop playsinline>
                      <source
                        src="@/assets/images/video/剖析室內設計全思路.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div class="mid-video-right">
                    <div class="mid-talkshow">
                      <img
                        src="@/assets/images/pic/s6_text.svg"
                        class="talkshow-pc"
                        alt="圖片"
                      />
                      <img
                        src="@/assets/images/mobile/s6_text.svg"
                        class="talkshow-mb"
                        alt="圖片"
                      />
                    </div>
                  </div>
                </div>
                <div class="lottery">
                  <a href="https://www.youtube.com/watch?v=EUpeqQogI4Y" target="_blank" class="more-btn"
                    >觀看完整節目</a
                  >
                </div>
              </div>
            </div>
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
export default {
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
    var lightbox = GLightbox({
      autoplayVideos: false,
    });

    lightbox.on("open", (target) => {
      console.log("lightbox opened");
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
        line-height: 1.5;
        font-size: 3.5vw;
        color: $color-gray-4;

        @include min-width(1025px) {
          font-size: 1.3vw;
        }
      }
    }
  }

  .mid-video {
    margin-top: 1rem;

    @include min-width(1025px) {
      display: flex;
      justify-content: space-between;
    }

    .mid-video-left {
      width: 100%;

      @include min-width(1025px) {
        width: 85%;
      }

			>video{
				width: 100%;
			}

      > a {
        display: block;

        > figure {
          > img {
            width: 100%;
          }
        }
      }
    }

    .mid-video-right {
      width: 100%;
      margin-top: 3rem;

      @include min-width(1025px) {
        width: 7%;
        margin-top: 0;
      }

      .mid-talkshow {
        .talkshow-pc {
          display: none;

          @include min-width(1025px) {
            display: block;
          }
        }

        .talkshow-mb {
          display: block;

          @include min-width(1025px) {
            display: none;
          }
        }

        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.lottery {
  width: 85%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @include min-width(1025px) {
    margin-left: 0;
    margin-right: auto;
  }

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