<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper swiper-wrapper-idx">
      <div class="swiper-slide">
        <video loop autoplay playsinline muted="muted" id="myVideo">
          <source
            src="@/assets/images/video/gold-design.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="swiper-slide">
        <video loop autoplay playsinline muted="muted" id="myVideo">
          <source
            src="@/assets/images/video/剖析室內設計全思路.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="swiper-slide">
        <video loop autoplay playsinline muted="muted" id="myVideo">
          <source
            src="@/assets/images/video/節目精華搶先看.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div class="wrap-pag">
      <div class="pag-text">節目精彩首播</div>
      <div class="swiper-pagination pagination-idx"></div>
    </div>
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
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
          );
        },
      },
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
  display: flex;
  overflow: hidden;
  position: absolute;
  //left: 0;
  //bottom: 0;

  @include min-width(1025px) {
    height: 100%;
    //padding-left: 25px;
    //padding-bottom: 2rem;
  }

  .swiper-wrapper-idx {
    order: 1;
  }
}

.swiper-pc {
  display: none;

  @include min-width(1025px) {
    display: block;
  }
}

.swiper-mb {
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

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.wrap-pag {
  position: absolute;
  bottom: 70px;
  right: 263.35px;
  width: 100%;
  display: flex;
	align-items: center;
  justify-content: flex-end;
  text-align: center;

	.pag-text{
		margin-right: 35%;
		position: relative;
		display: flex;
		align-items: center;
		font-size: 1.5vw;
		color: $color-white;
		z-index: 999;

		&::after{
			content: "";
			position: absolute;
			left: 115%;
			width: 350%;
			border: 1px dashed #FFFFFF;
			display: block;
		}
	}
}

.pagination-idx {
	justify-content: flex-end;
  z-index: 999;

  @include min-width(1025px) {
  }

  @include min-width(1280px) {
  }

  @include min-width(1650px) {
  }

  > span {
		margin-right: 10px;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    color: $color-white;

		&:last-child{
			margin-right: 0;
		}

    &.swiper-pagination-bullet {
      line-height: 2;
      border: 1px solid $color-white;
      background: transparent;
      opacity: 1;
    }
    &.swiper-pagination-bullet-active {
      background: $color-primary-1;
      color: $color-white;
    }
  }
}
</style>