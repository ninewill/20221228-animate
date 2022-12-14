<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper swiper-wrapper-idx">
      <div class="swiper-slide">
        <img class="swiper-pc" src="@/assets/images/pic/s1_Banner01_2x.png" alt="圖片" />
				<img class="swiper-mb" src="@/assets/images/mobile/s1_banner01.png" alt="圖片" />
      </div>
      <div class="swiper-slide">
        <img class="swiper-pc" src="@/assets/images/pic/s1_Banner02_2x.png" alt="圖片" />
				<img class="swiper-mb" src="@/assets/images/mobile/s1_banner02.png" alt="圖片" />
      </div>
      <div class="swiper-slide">
        <img class="swiper-pc" src="@/assets/images/pic/s1_Banner03_2x.png" alt="圖片" />
				<img class="swiper-mb" src="@/assets/images/mobile/s1_banner03.png" alt="圖片" />
      </div>
    </div>
    <div class="swiper-pagination pagination-idx"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      //pagination: {
      //  el: ".swiper-pagination",
      //  clickable: true,
      //},
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/swiper.scss";

.mySwiper {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  @include min-width(1025px) {
    width: 62%;
    padding-left: 25px;
    padding-bottom: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .swiper-wrapper-idx {
    order: 1;
  }
}

.swiper-pc{
	display: none;

	@include min-width(1025px) {
		display: block;
	}
}

.swiper-mb{
	display: block;
	
	@include min-width(1025px) {
		display: none;
	}
}

.swiper-slide {
  width: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.pagination-idx {
  display: none;

  @include min-width(1025px) {
    margin-bottom: 40%;
    order: 0;
    position: static;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @include min-width(1280px) {
    margin-bottom: 35%;
  }

  @include min-width(1650px) {
    margin-bottom: 27%;
  }

  > span {
    width: 10px;
    height: 10px;
    margin-top: 25px !important;
    display: block;

    &.swiper-pagination-bullet {
      border: 1px solid $color-white;
      background: transparent;
      opacity: 1;
    }
    &.swiper-pagination-bullet-active {
      background: $color-white;
    }
  }
}
</style>