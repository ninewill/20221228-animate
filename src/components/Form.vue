<template>
  <div class="cd-popup" role="alert">
    <div class="cd-popup-container">
      <div class="cd-popup-container-left">
        <div class="cd-popup-container-left-top">
          <div class="swiper popup-swiper-form">


            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="form-tag">限量名額</div>
                <div class="form-title">專業技法＋必備工具書雙重搭配</div>
                <div class="form-subtitle">完全掌握專業技能，動畫水平全面提升</div>
              </div>
              <div class="swiper-slide">
                <div class="form-tag">免費體驗</div>
                <div class="form-title">設計大師進階精華課程</div>
                <div class="form-subtitle">限量供應! 設計初學者必修課程</div>
              </div>
              <div class="swiper-slide">
                <div class="form-tag">各抽三名</div>
                <div class="form-title">專業講師精華實戰講堂</div>
                <div class="form-subtitle">線上 / 實體講堂任選一場次</div>
              </div>
            </div>

            <!--<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>-->
          </div>
        </div>
        <div class="cd-popup-container-left-bottom">
          <div class="swiper popup-swiper-form">
            <div class="swiper-wrapper swiper-wrapper-b">
              <div class="swiper-slide">
                <div class="top-banner">
                  <img src="@/assets/images/pic/popup_text_p1.svg" />
                </div>
                <div class="main-banner">
                  <img src="@/assets/images/pic/popup_p1_2x.png" alt="圖片" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top-banner">
                  <img src="@/assets/images/pic/popup_text_p2.svg" />
                </div>
                <div class="main-banner">
                  <img src="@/assets/images/pic/popup_p2_2x.png" alt="圖片" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top-banner">
                  <img src="@/assets/images/pic/popup_text_p3.svg" />
                </div>
                <div class="main-banner">
                  <img src="@/assets/images/pic/popup_p3_2x.png" alt="圖片" />
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      <!--表單-->
      <div class="cd-popup-container-right">
        <div class="cd-popup-container-right-top">
          <div class="cd-popup-container-right-top-title">
            赫啦！跟大師學設計
          </div>
          <div class="cd-popup-container-right-top-subtitle">
            填單立即送大師獨家素材包及抽獎資格
          </div>
        </div>
        <div class="cd-popup-container-right-bottom">
          <div class="popup-form _form">
            <form id="contact-form" class="form-distribution">
              <!--設定表單參數-->
              <input name="distribution" type="text" hidden value="19" />
              <input name="outletSub" type="text" hidden value="504" />
              <input name="mediaSub" type="text" hidden value="824" />
              <input name="type" type="text" hidden value="Event" />
              <input
                name="course"
                type="text"
                hidden
                value="室內設計"
              />
              <input name="gift" type="text" hidden value="線上課程+實體講堂" />
              <!--設定表單參數-->

              <div class="fieldset">
                <!--姓名-->
                <fieldset>
                  <input
                    class="fieldset-input"
                    placeholder="真實姓名*"
                    type="text"
                    name="name"
                    tabindex="1"
                  />
                </fieldset>

                <!--手機-->
                <fieldset>
                  <input
                    class="fieldset-input"
                    placeholder="手機號碼*"
                    type="tel"
                    name="cellphone"
                    tabindex="2"
                  />
                </fieldset>

                <!--城市-->
                <fieldset>
                  <div class="select-form">
                    <select
                      id="city"
                      class="select-form-block"
                      name="city"
                      tabindex="3"
                    >
                      <option value="">請選縣市</option>
                    </select>

                    <select
                      id="area"
                      class="select-form-block"
                      name="area"
                      tabindex="4"
                    >
                      <option value="">請選地區</option>
                    </select>
                  </div>
                </fieldset>

                <!--信箱-->
                <fieldset>
                  <input
                    class="fieldset-input"
                    placeholder="電子信箱*"
                    type="email"
                    name="email"
                    tabindex="5"
                  />
                </fieldset>

                <!--參加地區-->
                <fieldset>
                  <legend class="fieldset-title">
                    您是否想參與設計講堂？*
                  </legend>
                  <label class="input-check">
                    <input
                      class="checkbox styled-checkbox"
                      type="radio"
                      name="zip"
                      value="value1"
                      data-value="台北場"
                      data-mail_id="31"
                      tabindex="6"
                    />
                    <span>台北場</span>
                  </label>
                  <label class="input-check">
                    <input
                      class="checkbox styled-checkbox"
                      type="radio"
                      name="zip"
                      value="value2"
                      data-value="台中場"
                      data-mail_id="32"
                      tabindex="7"
                    />
                    <span>台中場</span>
                  </label>
                  <label class="input-check">
                    <input
                      class="checkbox styled-checkbox"
                      type="radio"
                      name="zip"
                      value="value3"
                      data-value="高雄場"
                      data-mail_id="33"
                      tabindex="8"
                    />
                    <span>高雄場</span>
                  </label>
                  <label class="input-check">
                    <input
                      class="checkbox styled-checkbox"
                      type="radio"
                      name="zip"
                      value="value4"
                      data-value="暫無興趣"
                      data-mail_id="34"
                      tabindex="9"
                    />
                    <span>暫無興趣</span>
                  </label>
                </fieldset>

                <!--詢問相關問題-->
                <fieldset>
                  <textarea
                    id="message_area"
                    class="fieldset-input"
                    placeholder="想詢問設計相關問題..."
                    name="message_area"
                    tabindex="10"
                  ></textarea>
                </fieldset>

                <!--詳細閱讀-->
                <fieldset>
                  <label class="input-checkbox privacy-wrap">
                    <input type="checkbox" name="agreement" value="horror" />
                    <div class="privacy">
                      我已詳細閱讀並同意<a
                        href="https://www.appedu.com.tw/frame-privacy"
                        target="_blank"
                        class="form-privacy"
                        >隱私權使用條款</a
                      >
                    </div>
                  </label>
                </fieldset>

                <!--送出按鈕-->
                <div class="btn-submit-wrap">
                  <input
                    class="btn-submit"
                    type="submit"
                    name="submit"
                    value="確認送出"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--手機版-->
        <a
          href="javascript:;"
          class="cd-popup-close cd-popup-close-pc img-replace"
          >Close</a
        >
      </div>
    </div>

    <!--手機版-->
    <a href="javascript:;" class="cd-popup-close cd-popup-close-m img-replace"
      >Close</a
    >
    <!-- cd-popup-container -->
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function () {
      var GET_LOCATION_ENDPOINT =
        "https://www.appedu.com.tw/Librarys/_ajax/Address.php";
      var DISTRIBUTION_ENDPOINT =
        "https://www.appedu.com.tw/Librarys/_ajax/Distribution.php";

      function loadLocation(options) {
        var $cityElement = options.city.element;
        var $areaElement = options.area.element;
        $cityElement.html(
          $("<option>").text(options.city.defaultLabel).val("")
        );
        $areaElement.html(
          $("<option>").text(options.area.defaultLabel).val("")
        );
        // load city data
        $.ajax({
          url: GET_LOCATION_ENDPOINT,
          type: "POST",
          dataType: "json",
          data: { postFlag: "LoadCity" },
        })
          .done(function (response) {
            if (response.result == "true") {
              response.data.forEach(function (v) {
                $cityElement.append($("<option>").val(v.id).text(v.name));
              });
            }
          })
          .fail(function () {
            alert(options.city.errorMessage);
          });
        // listen to city and load area data
        $cityElement.change(function () {
          $areaElement.html(
            $("<option>").text(options.area.defaultLabel).val("")
          );
          $.ajax({
            url: GET_LOCATION_ENDPOINT,
            type: "POST",
            dataType: "json",
            data: {
              postFlag: "LoadArea",
              CityID: $(this).val(),
            },
          })
            .done(function (response) {
              if (response.result == "true") {
                response.data.forEach(function (v) {
                  $areaElement.append($("<option>").val(v.id).text(v.name));
                });
              }
            })
            .fail(function () {
              alert(options.area.errorMessage);
            });
        });
      }

      $.validator.addMethod(
        "cellphone",
        function (value, element) {
          var reg = /^[09]{2}[0-9]{8}$/;
          return this.optional(element) || reg.test(value);
        },
        "Please enter a valid cellphone."
      );

      function distributionSubmitHandler(options) {
        return function (form) {
          let $checkbox = $(".styled-checkbox:checked");
          let $message_area = $("#message_area");
          let remark_text =
            "我想參加" +
            $checkbox.data("value") +
            "，" +
            "我對設計的提問是:" +
            $message_area.val();
          $.ajax({
            url: DISTRIBUTION_ENDPOINT,
            type: "POST",
            dataType: "json",
            data: {
              postFlag: "InsertData",
              distribution_id: form.distribution.value,
              media_sub_id: form.mediaSub.value,
              outlet_sub_id: form.outletSub.value,
              type: form.type.value,
              course: form.course.value,
              name: form.name.value,
              cellphone: form.cellphone.value,
              email: form.email.value,
              zip_id: form.area.value,
              remark: remark_text,
              gift: form.gift && form.gift.value,
              sms_id: 30,
              mail_id: $checkbox.data("mail_id"),
            },
          })
            .done(function (response) {
              if (typeof options == "function") {
                return options(response);
              }
              var opt = { success: null, error: null };
              if ($.isPlainObject(options)) {
                $.extend(opt, options);
              } else {
                opt.success = options;
              }
              // 舊版本相容
              if (!options.success && options.successMessage) {
                options.success = options.successMessage;
                // 舊版 errorMessage 根本沒用到，不覆蓋以維持舊頁面原樣
              }
              if (response.result == "true") {
                if (typeof options.success == "function") {
                  return options.success(response);
                } else {
                  alert(options.success);
                  top.location.href =
                    "https://drive.google.com/drive/folders/1vSmpYd9Ak5pmCBTL1NsHoK7m2easvhRb?usp=sharing";
                }
              } else {
                if (typeof options.error == "function") {
                  return options.error(response);
                } else {
                  alert("資料送出失敗，請聯絡我們或再試一次");
                }
              }
            })
            .fail(function (error) {
              console.error(error);
              alert("網路問題無法傳送資料，請聯絡我們或再試一次");
            });
          return false;
        };
      }

      var $form = $("form.form-distribution");
      loadLocation({
        city: {
          element: $form.find("[name=city]"),
          defaultLabel: "請選縣市",
          errorMessage: "無法載入縣市資料",
        },
        area: {
          element: $form.find("[name=area]"),
          defaultLabel: "請選地區",
          errorMessage: "無法載入地區資料",
        },
      });

      $form
        .submit(function (e) {
          e.preventDefault();
        })
        .validate({
          // debug: true,
          submitHandler: distributionSubmitHandler({
            successMessage: "資料已送出，將安排專人與您聯絡",
            errorMessage: "您輸入的資料有誤或者已輸入過相同資料",
          }),
          rules: {
            name: "required",
            email: { required: true, email: true },
            cellphone: { required: true, cellphone: true },
            city: "required",
            area: "required",
            remark: "required",
            course: "required",
            agreement: "required",
          },
          messages: {
            name: "請輸入您的姓名",
            email: {
              required: "請輸入您的E-mail信箱",
              email: "請輸入有效的E-mail信箱",
            },
            cellphone: {
              required: "請輸入您的聯絡電話",
              cellphone: "請輸入有效的聯絡電話",
            },
            city: "請選擇居住縣市與地區",
            area: "請選擇居住縣市與地區",
            remark: "",
            course: "請選擇想學課程",
            agreement: "您尚未接受隱私權使用條款",
          },
        });
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/from-option.scss";
@import "@/assets/scss/from.scss";
@import "@/assets/scss/swiper.scss";

.swiper-wrapper-b{
	margin-bottom: 2rem;
}

.input-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5.5px;
  line-height: 25px;
  cursor: pointer;
}

.cd-popup-container {
  .form-title {
    margin-top: 1rem;
  }

  .form-subtitle {
    margin-top: 1rem;
  }
}

.privacy-wrap {
  display: flex;
  position: relative;
  margin-bottom: 1rem;

  > #agreement-error {
    position: absolute;
    top: 28px;
    font-size: 0.9rem;
    color: $color-primary-7;

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      top: 50%;
      left: -2rem;
      margin-top: -10px;
      background-image: url("@/assets/images/icon/Alert.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}

.privacy {
  font-size: 1rem;
  color: $color-gray-1;

  > a {
    display: inline-block;
    color: $color-primary-1;
  }
}
</style>