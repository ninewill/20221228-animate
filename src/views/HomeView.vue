<template>
  <!--main-->
  <div id="main" class="wrap wrap-content">
		<SwiperIdx />
    <section class="layout-idx">
			<div class="idx-info">
				<div class="idx-info-tag">
					<span>設計師 Talk Show</span>
				</div>
				<div class="idx-info-subtitle">突破平面限制！一起踏進動畫的神秘世界</div>
				<div class="idx-info-title">用動畫說故事！實現想畫就畫的夢想</div>
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
}

.logo {
  position: relative;
  z-index: 10;
}

.layout-idx {
  width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 1.5rem;
  position: relative;
  z-index: 1;
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

	.idx-info{
		margin-top: -10rem;

		.idx-info-tag{
			padding: 0.5rem 1rem;
			display: inline-block;
			background-color: $color-primary-1;
			border: 1px solid $color-white;
			filter: drop-shadow(0px 2.87352px 2.87352px rgba(0, 0, 0, 0.25));
			opacity: 0.8;
			
			>span{
				font-weight: 400;
				font-size: 1.2vw;
				color: $color-white;
			}
		}

		.idx-info-subtitle{
			margin-top: 1.8rem;
			font-weight: 500;
			font-size: 1.5vw;
			color: $color-white;
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		}

		.idx-info-title{
			margin-top: 2rem;
			font-weight: 700;
			font-size: 3vw;
			color: $color-white;
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		}
	}
}
</style>