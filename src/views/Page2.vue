<template>
  <div class="wrap wrap-block">
    <!--grid-->
    <div class="grid-main">
      <div class="grid-block g1">
        <h3 class="h3">ELEMENT</h3>
      </div>
      <div class="grid-block g2">
        <div class="g2-top">
          <div class="h1">專業講師 獨家設計 祕技不私藏</div>
          <div class="h2">讓你實用價值＋ 商業價值不斷攀升</div>
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
      <div class="g3-item">
        <div class="g3-item-wrap">
          <div class="g3-item-list g3-item-left">
            <div class="h3">ELEMENT 01</div>
            <div class="g3-item-img">
              <img src="@/assets/images/pic/s3_image01_2x.png" alt="圖片" />
            </div>
            <div class="g3-item-info">
              <div class="h3">CAD施工圖集</div>
              <p>匯集最全面實用CAD細部模塊</p>
              <p>掌握關鍵尺寸設計舒適生活空間</p>
            </div>
          </div>
          <div class="g3-item-list g3-item-right">
            <div class="h3">ELEMENT 02</div>
            <div class="g3-item-img">
              <img src="@/assets/images/pic/s3_image02_2x.png" alt="圖片" />
            </div>
            <div class="g3-item-info">
              <div class="h3">設計必備3D紋理材質</div>
              <p>獨家收藏模型素材紋理</p>
              <p>讓你快速並直覺運用多種材質</p>
            </div>
          </div>
        </div>
        <div class="g3-bottom">
          <a href="javascript:;" class="more-btn cd-popup-trigger">立即索取</a>
        </div>
        <Form />
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
  name: "",
  components: {
    Form,
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
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
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

.g3-item {
  width: 100%;
  padding-top: 37px;
  padding-bottom: 37px;
  padding-right: 20px;
  padding-left: 20px;

  @include min-width(1025px) {
    width: 63%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid $color-gray-6;
  }

	@include min-width(1280px) {
    padding-right: 80px;
    padding-left: 80px;
  }

  .g3-item-wrap {
    @include min-width(1025px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .g3-item-list {
    margin-bottom: 4rem;

    @include min-width(1025px) {
      margin-bottom: 0;
    }
  }

  .g3-item-left {
    width: 100%;

    @include min-width(1025px) {
      width: 48%;
    }
  }

  .g3-item-right {
    width: 100%;

    @include min-width(1025px) {
      width: 48%;
    }
  }

  .g3-item-list {
    > .h3 {
      text-align: center;
      font-size: 5vw;
      color: $color-gray-5;

      @include min-width(768px) {
        font-size: 3vw;
      }

      @include min-width(1025px) {
        font-size: 1.3vw;
      }
    }
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
    font-size: 6vw;

    @include min-width(768px) {
      font-size: 4vw;
    }

    @include min-width(1025px) {
      font-size: 2vw;
    }
  }

  > p {
    line-height: 1.5;
    text-align: center;
    color: $color-gray-6;
    font-size: 4vw;

    @include min-width(768px) {
      font-size: 2vw;
    }

    @include min-width(1025px) {
      font-size: 1vw;
    }
  }
}

.g3-bottom {
  width: 100%;
  //margin-top: 5rem;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  .more-btn {
    padding: 10px 60px;
    border: 1px solid $color-gray-6;
    display: inline-block;
    color: $color-gray-6;
    text-align: center;
    font-size: 4vw;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 400;
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
</style>