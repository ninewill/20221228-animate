<template>
  <!--menu-->
  <div class="menu-wrap">
    <router-link to="/page1" title="" class="close"></router-link>
    <ul class="menu-item">
      <li>
        <router-link to="/page1-1" title="謝昱宏">
          <span>01</span>
          <span>謝昱宏</span>
        </router-link>
      </li>
      <li>
        <router-link to="/page1-2" title="蕭博宇">
          <span>02</span>
          <span>蕭博宇</span>
        </router-link>
      </li>
      <li>
        <router-link to="/page1-3" title="祝宏慈">
          <span>03</span>
          <span>祝宏慈</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/main.scss";

// * ==========================================================================
// * Menu 區塊
// * ==========================================================================

.menu-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu-item {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @include min-width(525px) {
      
			justify-content: center;
    }

    @include min-width(1025px) {
      margin-top: 5rem;
      width: auto;
      display: block;
    }

    > li {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }

      @include min-width(1025px) {
        margin-bottom: 2rem;
        margin-right: 0;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        @include min-width(1025px) {
          flex-direction: column;
        }

        > span {
          display: block;
          font-size: 4vw;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 400;
          color: $color-gray-4;

          @include min-width(768px) {
            font-size: 3vw;
          }

          @include min-width(1025px) {
            flex-direction: column;
            font-size: 1vw;
          }

          &:last-child {
            margin-left: 0.5rem;

            @include min-width(1025px) {
              margin-top: 1rem;
              margin-left: 0;
              letter-spacing: 10px;
              writing-mode: vertical-rl;
            }
          }
        }

        &.router-link-active {
          > span {
            color: $color-primary-1;
          }
        }
      }
    }
  }
}

//關閉X按鈕
.close {
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  display: inline-block;
  overflow: hidden;
  text-indent: 100%;
  color: transparent;
  white-space: nowrap;
  z-index: 10;

  @include min-width(1025px) {
    width: 30px;
    height: 30px;
    top: 10px;
    left: auto;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 12px;
    width: 22.5px;
    height: 2px;
    background-color: $color-gray-4;

    @include min-width(1025px) {
      width: 29px;
    }
  }

  &::before {
    transform: rotate(45deg);
    left: 1px;
  }

  &::after {
    transform: rotate(-45deg);
    right: 1px;
  }
}
</style>