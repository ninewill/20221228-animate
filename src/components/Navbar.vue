<template>
  <!--header-->
  <header id="header">
    <div class="mainheader">
      <router-link to="/" class="home-icon current">首頁</router-link>
      <ul class="mainheader-menu">
        <li>
          <router-link to="/page1" title="講師">講師</router-link>
          <!--<a href="./page1">標題</a>-->
        </li>
        <li>
          <router-link to="/page2" title="私藏素材">私藏素材</router-link>
        </li>
        <li>
          <router-link to="/page3" title="講堂">講堂</router-link>
        </li>
        <li>
          <router-link to="/page4" title="抽獎">抽獎</router-link>
        </li>
        <li>
          <router-link to="/page5" title="節目精華">節目精華</router-link>
        </li>
      </ul>
      <div class="topnav-item">
        <div class="youtube">
          <a
            href="https://www.youtube.com/watch?v=EUpeqQogI4Y"
            target="_blank"
            class="social-media-btn icon-youtube"
            >youtube-icon</a
          >
          <div class="hover-text hover-text-yt">觀看節目</div>
        </div>
        <div class="share">
          <a
            href="javascript:;"
            class="social-media-btn icon-share share-btn"
            title="分享"
            >share-icon</a
          >
          <ul class="share-list is-closelist">
            <li>
              <a
                href="javascript: void(window.open('http://line.me/R/msg/text/?'.concat(encodeURIComponent(location.href)) ));"
                class="social-media-btn icon-line"
                title="line（另開視窗）"
                >line</a
              >
            </li>
            <li>
              <a
                href="javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ));"
                class="social-media-btn icon-facebook"
                title="facebook（另開視窗）"
                >facebook</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
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
// * HEADER 區塊
// * ==========================================================================

header {
  width: 44px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: $color-black;
  box-shadow: 5px 0px 15px rgba(0, 0, 0, 0.05);
  transition: 0.2s;

  @include min-width(960px) {
    width: 60px;
  }
}

.mainheader {
  width: 100%;
  height: calc(100% - 10%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.home-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  display: block;
  background: url("@/assets/images/icon/menu/home.svg") no-repeat center/cover;
  transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  @include hidetext;

  //首頁當前頁面狀態
  &.current {
    background: url("@/assets/images/icon/menu/home.svg") no-repeat center/cover;

    @include min-width(1025px) {
      &:hover {
        background: url("@/assets/images/icon/menu/home.svg") no-repeat
          center/cover;
      }
    }
  }

  @include min-width(1025px) {
    &:hover {
      background: url("@/assets/images/icon/menu/home.svg") no-repeat
        center/cover;
    }
  }
}

.mainheader-menu {
  margin-top: 20px;

  @include min-width(376px) {
    //margin-top: 64px;
  }

  > li {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 30px;
    writing-mode: vertical-rl;

    @include min-width(376px) {
      margin-bottom: 40px;
    }

    &:last-child {
      margin-bottom: 0;

      &:after {
        display: none;
      }
    }

    @include min-width(1025px) {
      &:hover {
        > a {
          color: $color-white;
          opacity: 0.5;
        }
      }
    }

    &:after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      bottom: -15px;
      display: block;
      background: url("@/assets/images/icon/menu/sparkle.svg") no-repeat
        center/cover;

      @include min-width(376px) {
        bottom: -25px;
      }
    }

    > a {
      width: 100%;
      height: 100%;
      position: relative;
      display: block;
      letter-spacing: 5px;
      color: $color-white;
      font-size: 0.9rem;
      transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);

			@include min-width(960px) {
        font-size: 1.2rem;
      }

			@include min-width(1025px) {
        font-size: 1rem;
      }

      //其他分頁當前頁面狀態
      &.router-link-active {
        &:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          top: -6px;
          right: -6px;
          background-color: $color-primary-1;
        }
      }
    }
  }
}

// * ==========================================================================
// * 分享按鈕 區塊
// * ==========================================================================

.social-media-btn {
  width: 35px;
  height: 35px;
  display: block;
  margin: 0 auto;
}

.icon-youtube {
  background: url("@/assets/images/icon/menu/yuutube_normal.svg") no-repeat
    center/cover;
  transition: 0.1s;
  @include hidetext;

  @include min-width(1025px) {
    &:hover {
      background: url("@/assets/images/icon/menu/yuutube_hover.svg") no-repeat
        center/cover;
    }
  }
}

.icon-share {
  position: relative;
  background: url("@/assets/images/icon/menu/share_normal.svg") no-repeat
    center/cover;
  @include hidetext;
}

.icon-facebook {
  position: relative;
  transition: 0.1s;
  @include hidetext;
}

.icon-line {
  transition: 0.1s;
  @include hidetext;
}

.topnav-item {
  margin-top: 1rem;

  @include min-height(830px) {
    margin-top: 5rem;
  }
}

.hover-text {
  display: none;

  @include min-width(1025px) {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    z-index: 1;
    opacity: 0;
    line-height: 24px;
    font-weight: 700;
    font-size: 14px;
    color: $color-white;
    background-color: $color-primary-4;
    transform: translateX(-35px);
    transition: 0.2s;

    &.hover-text-yt {
      width: 66px;
      height: 24px;
    }

    &.hover-text-gift {
      width: 40px;
      height: 24px;
    }
  }
}

//youtube icon
.youtube {
  position: relative;
  z-index: 5;
  transition: 0.1s;

  @include min-width(1025px) {
    &:hover {
      .hover-text {
        opacity: 1;
        transform: translateX(70px);
        color: $color-primary-1;
        background-color: $color-white;
				box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
      }
    }
  }

  @include min-width(1280px) {
    &:hover {
      .hover-text {
        opacity: 1;
        transform: translateX(55px);
      }
    }
  }
}

//share icon
.share {
  display: none;

  @include min-width(1025px) {
    display: block;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  .share-list {
    display: none;
  }

  &:hover {
    @include min-width(1025px) {
      .icon-share {
        width: 133px;
        left: 11px;
        background: url("@/assets/images/icon/menu/share_hover.svg") no-repeat
          center/cover;
      }

      .share-list {
        display: flex;
        position: absolute;
        position: absolute;
        top: 0;
        right: 25px;

        > li {
          position: absolute;

          &:nth-child(1) {
            left: 78px;
          }
          &:nth-child(2) {
            left: 43px;
          }
        }
      }
    }

    @include min-width(1280px) {
      .share-list {
        > li {
          &:nth-child(1) {
            left: -72px;
          }
          &:nth-child(2) {
            left: -36px;
          }
        }
      }
    }
    @include min-width(1440px) {
      .share-list {
        > li {
          &:nth-child(1) {
            left: 59px;
          }
          &:nth-child(2) {
            left: 23px;
          }
        }
      }
    }
  }
}
</style>