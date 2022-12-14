<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1">
        <h3 class="h3">LECTURE</h3>
      </div>
      <div class="grid-block g2">
        <div class="g2-top">
          <div class="h1">室內設計師 空間的實踐者</div>
          <div class="h2">讓你個人技能Level提升 掌握更多職場優勢</div>
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
            <div class="h3">
              <span>LECTURE 01</span>
              <span>線上 / 實體</span>
            </div>
            <div class="h1">
              <span>台北場</span>
              <span>講師 / 蕭博宇</span>
            </div>
          </div>
          <div class="g-pfp g3-pfp">
            <img src="@/assets/images/pic/s4_image01_2x.png" alt="圖片" />
          </div>
          <div class="g-description">
            <div class="h1">業界室內設計專案管理技巧</div>
            <p>剖析專案項目，精準掌握流程進度</p>
          </div>
          <div class="g-date">
            <div class="h3">date / <span>10.14 FRI.</span></div>
            <div class="h3">time / <span>6 : 30 - 8 : 30 PM</span></div>
          </div>
        </div>
        <div class="g-bottom">
          <a
            href="https://www.accupass.com/event/2209120303161915030711"
            target="_blank"
            class="more-btn"
            >BUY TICKET</a
          >
        </div>
      </div>
      <div class="grid-block g4">
        <div class="g-top">
          <div class="g-title">
            <div class="h3">
              <span>LECTURE 02</span>
              <span>線上 / 實體</span>
            </div>
            <div class="h1">
              <span>台中場</span>
              <span>講師 / 祝宏慈</span>
            </div>
          </div>
          <div class="g-pfp g3-pfp">
            <img src="@/assets/images/pic/s4_image02_2x.png" alt="圖片" />
          </div>
          <div class="g-description">
            <div class="h1">住室內設計報價溝通術</div>
            <p>從入門到精通，Get接案全攻略</p>
          </div>
          <div class="g-date">
            <div class="h3">date / <span>10.22 SAT.</span></div>
            <div class="h3">time / <span>2 : 00 - 4 : 00 PM</span></div>
          </div>
        </div>
        <div class="g-bottom">
          <a
            href="https://www.accupass.com/event/2209130345212459218910"
            target="_blank"
            class="more-btn"
            >BUY TICKET</a
          >
        </div>
      </div>
      <div class="grid-block g5">
        <div class="g-top">
          <div class="g-title">
            <div class="h3">
              <span>LECTURE 03</span>
              <span>線上 / 實體</span>
            </div>
            <div class="h1">
              <span>高雄場</span>
              <span>講師 / 謝昱宏</span>
            </div>
          </div>
          <div class="g-pfp g3-pfp">
            <img src="@/assets/images/pic/s4_image03_2x.png" alt="圖片" />
          </div>
          <div class="g-description">
            <div class="h1">解密獨立室內設計師創業心法</div>
            <p>獨家傳授，高價值3D渲染竅門</p>
          </div>
          <div class="g-date">
            <div class="h3">date / <span>10.28 FRI.</span></div>
            <div class="h3">time / <span>6 : 30 - 8 : 30 PM</span></div>
          </div>
        </div>
        <div class="g-bottom">
          <a
            href="https://www.accupass.com/event/2209130710091319572927"
            target="_blank"
            class="more-btn"
            >BUY TICKET</a
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

.g-top {
  .g-title {
    > .h1 {
      align-items: flex-end !important;
      margin-top: 2rem !important;

      @include min-width(1025px) {
        margin-top: 0.5rem !important;
      }

      > span {
        font-size: 6.5vw;

        @include min-width(768px) {
          font-size: 5vw;
        }

        @include min-width(1025px) {
          font-size: 1.5vw;
        }

        &:last-child {
          font-size: 4vw;

          @include min-width(768px) {
            font-size: 2.5vw;
          }

          @include min-width(1025px) {
            font-size: 1.1vw;
          }
        }
      }
    }
  }

  .g-description {
    padding-bottom: 1rem;
    border-bottom: 1px solid $color-gray-6;

    @include min-width(1025px) {
      border-bottom: none;
    }

    > .h1 {
      margin-bottom: 0.5rem !important;
      line-height: 1.5;
      font-size: 6vw !important;

      @include min-width(768px) {
        font-size: 5vw !important;
      }

      @include min-width(1025px) {
        font-size: 1.3vw !important;
      }
    }

    > p {
      margin-bottom: 0px !important;
      line-height: 1.5;
      font-size: 5vw !important;

      @include min-width(768px) {
        font-size: 3vw !important;
      }

      @include min-width(1025px) {
        font-size: 1vw !important;
      }
    }
  }
}

.g-date {
  margin-top: 1rem;

  > .h3 {
    display: flex;
    align-items: center;
    color: $color-gray-6 !important;
    font-size: 5vw !important;

    @include min-width(768px) {
      font-size: 3vw !important;
    }

    @include min-width(1025px) {
      font-size: 1.2vw !important;
    }

    &:last-child {
      margin-top: 1rem;
    }

    > span {
      margin-left: 0.25rem;
      display: block;
      color: $color-primary-1;
      font-family: "Cinzel", serif;
      font-weight: 400;

      font-size: 5vw !important;

      @include min-width(768px) {
        font-size: 3vw !important;
      }

      @include min-width(1025px) {
        font-size: 1.2vw !important;
      }
    }
  }
}

.g-bottom {
  .more-btn {
    padding: 10px 60px !important;
    color: $color-gray-6;
    font-size: 4vw;

    @include min-width(1025px) {
      padding: 10px !important;
      font-size: 1vw;
    }
  }
}
</style>