<template>
  <!--main-->
  <div id="main" class="wrap wrap-content">
    <section class="layout-idx">
      <div class="side-left">
        <div class="logo">HOLA</div>
        <!-- Swiper -->
        <SwiperIdx />
      </div>
      <div class="side-right">
        <div class="info">
          <p>設計師 Talk Show</p>
          <span>向室內設計師進擊！踏入高薪設計師的行列</span>
          <h1 class="h1">翻轉室內設計的空間魔術</h1>
        </div>
        <div class="info-img-wrap">
          <div class="info-img1">
            <img src="@/assets/images/pic/s1_date.svg" alt="圖片" />
          </div>
          <div class="info-img2">
            <img src="@/assets/images/pic/s1_Interior.svg" alt="圖片" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import SwiperIdx from "@/components/SwiperIdx.vue";

export default {
  components: {
    SwiperIdx,
  },
  mounted() {},
};
</script>


<style lang="scss" >
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";

// * ==========================================================================
// * Background
// * ==========================================================================

.wrap-content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after,
  &::before {
    content: "";
    display: block;
    background-color: $color-primary-1;
    position: absolute;
  }

  &::before {
    width: 100%;
    height: 60%;
    top: 0;
    left: 0;

    @include min-width(1080px) {
      width: 50%;
      height: calc(100% - 150px);
      left: 60px;
    }
  }

  &::after {
    display: none;

    @include min-width(1080px) {
      display: block;
      width: 60px;
      height: 85px;
      top: 50px;
      right: 0;
    }
  }
}

.logo {
  position: relative;
  z-index: 10;
}

.layout-idx {
  width: 100%;
	padding-top: 1.5rem;
  position: relative;
  z-index: 10;
  transition: 0.2s;

  @include min-height(650px) {
    min-height: 90vh;
  }

  @include min-width(1080px) {
    min-height: 90vh;
  }

	@include min-width(1080px) {
		display: flex;
  }

  .side-left {
    width: 100%;

    @include min-width(1080px) {
      width: 50%;
    }

    .logo {
      width: 162px;
      height: 76px;
      position: relative;
      background: url("@/assets/images/pic/s1_logo.svg") no-repeat center/cover;
      @include hidetext;
      z-index: 10;

      @include min-width(1080px) {
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }

		.mySwiper{
			height: auto;
			overflow: visible;
		}
  }

  .side-right {
    width: 100%;
    position: relative;

    @include min-width(1080px) {
      width: 50%;
      padding-left: 150px;
    }

    .info {
      @include min-width(1080px) {
        max-width: 650px;
        margin-top: 100px;
      }

      > p {
        padding: 0.25rem 0.5rem;
        display: inline-block;
        color: $color-white;
        background-color: $color-primary-1;
      }

      > span {
        margin-top: 1rem;
        display: block;
        font-size: 3.6vw;

				@include min-width(484px) {
					font-size: 4vw;
				}

				@include min-width(768px) {
					font-size: 3vw;
				}

				@include min-width(1080px) {
					font-size: 1.5vw;
				}
      }

      > .h1 {
				margin-top: 1rem;
        letter-spacing: 8px;
        font-size: 9vw;
        color: $color-primary-1;

				@include min-width(768px) {
					font-size: 5vw;
				}

				@include min-width(1080px) {
					margin-top: 0;
					font-size: 4vw;
				}
      }
    }

    .info-img-wrap {
      width: 100%;

      @include min-width(1080px) {
        position: absolute;
        right: 0;
        bottom: 30px;
      }

      .info-img1 {
				margin-top: 2rem;
        width: 80%;

        @include min-width(1080px) {
					margin-top: 0;
          margin-right: 0;
          margin-left: auto;
					width: 55%;
        }

        > img {
          width: 100%;
        }
      }

      .info-img2 {
        display: none;

        @include min-width(1080px) {
          display: block;
          width: 30%;
          margin-top: 10%;
          margin-right: 0;
          margin-left: auto;
        }

        > img {
          width: 100%;
        }
      }
    }
  }
}
</style>