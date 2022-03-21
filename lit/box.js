import { css, html, LitElement } from 'lit'

export class ResultBox extends LitElement {
  static styles = [
    css`
      .sp {
        display: none;
      }
      .container,
      .reservation a {
        position: relative;
      }
      .click_able::before {
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      .clinicList {
        background-color: #fff;
        border-top: 5px solid #34b14e;
        box-shadow: 0 0 6px #0003;
        box-sizing: border-box;
        margin: 20px 0 40px;
        padding: 20px 20px 25px;
        width: 100%;
      }
      .title {
        align-items: center;
        border-bottom: 2px solid #eaeff2;
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
      }
      .clinic_name {
        font-size: 20px;
        font-weight: bold;
      }
      .pr {
        background-color: #eaeff2;
        color: #aaa;
        font-size: 10px;
        font-weight: bold;
        line-height: 10px;
        margin: 0 0 0 auto;
        max-height: 21px;
        padding: 5px;
      }
      .information {
        align-items: flex-end;
        display: flex;
        margin-top: 15px;
        .address,
        .station {
          font-size: 14px;
          line-height: 17px;
          .icon {
            height: 17px;
            margin-right: 5px;
            vertical-align: sub;
            width: 14px;
          }
        }
        .station {
          margin-top: 10px;
        }
        .picture {
          .clinic_img {
            height: 180px;
            margin: 0 20px 0 0;
            object-fit: cover;
            width: 270px;
          }
        }
        .place {
          height: 100%;
          margin: auto 0;
          padding-top: 5px;
        }
      }
      .table_title {
        margin-top: 15px;
      }
      .table .pc {
        display: flex;
      }
      .table {
        margin-top: 5px;
        table {
          border-collapse: collapse;
          height: 100px;
          margin: 0 auto;
          width: 100%;
          th,
          td {
            border: 1px solid #aaa;
            display: table-cell;
            font-size: 12px;
            font-weight: normal;
            line-height: 30px;
            max-width: 100px;
            text-align: center;
            width: 8vw;
            span {
              white-space: nowrap;
              -ms-writing-mode: lr-tb;
              writing-mode: horizontal-tb;
            }
          }
          .week {
            font-size: 10px;
            p {
              margin: 0 2px;
            }
          }
          .mark {
            color: #34b14e;
          }
        }
      }
      .tag {
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-top: 20px;
        li {
          border: 1px solid #34b14e;
          border-radius: 27px;
          color: #34b14e;
          font-size: 12px;
          margin-right: 10px;
          margin-top: 5px;
          padding: 3px 8px 4px;
        }
      }
      .comment {
        margin-top: 20px;
        .comment_ttl {
          background-color: #eaeff2;
          color: #34b14e;
          display: inline-block;
          font-size: 12px;
          font-weight: bold;
          line-height: 23px;
          padding: 0 5px;
        }
        .comment_text {
          font-size: 14px;
          line-height: 22px;
          margin-top: 5px;
        }
      }
      .reservation {
        display: flex;
        margin-top: 20px;
        .tel {
          background-color: #f89d46;
          border-radius: 5px;
          box-shadow: 0 3px 0 #bb620d;
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          margin: 0 15px 0 auto;
          text-align: center;
          width: 290px;
          a {
            color: #fff;
            display: block;
            font-weight: bold;
            height: 40px;
          }
        }
        .tel:active {
          box-shadow: none;
          margin-bottom: -3px;
          margin-top: 3px;
        }
        .notset_tel {
          background-color: #eee;
          border-radius: 5px;
          color: #aaa;
          display: block;
          font-size: 14px;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
          margin: 0 auto 0 0;
          text-align: center;
          width: 290px;
        }
        .web {
          background-color: #eee;
          border-radius: 5px;
          font-size: 14px;
          height: 40px;
          margin: 0 auto 0 0;
          text-align: center;
          width: 290px;
          a {
            color: #aaa;
            display: block;
            font-weight: bold;
            line-height: 40px;
          }
        }
        .notset_web {
          background-color: #eee;
          border-radius: 5px;
          color: #aaa;
          display: block;
          font-size: 14px;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
          margin: 0 auto 0 0;
          text-align: center;
          width: 290px;
        }
      }
      @media screen and (max-width: 767px) {
        .pc {
          display: none;
        }
        .sp {
          display: block;
        }
        .clinicList {
          border-top: none;
          margin: 0 0 20px;
          padding: 20px 10px;
        }
        .title {
          border-bottom: 1px solid #eaeff2;
          padding: 0 0 10px;
        }
        .clinic_name {
          font-size: 16px;
        }
        .information {
          display: flex;
          margin-top: 10px;
          .picture {
            align-items: center;
            display: flex;
            .clinic_img {
              height: 110px;
              margin: 0 10px 0 0;
              object-fit: cover;
              width: 170px;
            }
            .station {
              margin-top: 15px;
            }
          }
          .place {
            p {
              font-size: 12px;
            }
          }
        }
        .table {
          margin-top: 10px;
          table {
            width: 100%;
            td {
              border: 1px solid #eaeff2;
              text-align: center;
              vertical-align: middle;
            }
          }
        }
        .tag {
          margin-top: 15px;
          li {
            font-size: 10px;
            padding: 3px 10px;
          }
        }
        .comment {
          .comment_ttl {
            font-size: 10px;
            line-height: 20px;
          }
          .comment_text {
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    `
  ]
  static properties = {
    top: { type: String },
    clinic: { type: Object },
    info: { type: Object },
    sortedOpenTime: {},
    weekday: {},
    imageURL: ''
  }

  constructor() {
    super()
    this.top = ''
    this.clinic = {}
    this.info = {}
    this.sortedOpenTime = []
    this.weekday = ['日', '月', '火', '水', '木', '金', '土']
    this.imageURL = '/img/common/no_image.png'
  }
  render() {
    return html`<div class="container">
      <nuxt-link :to="'/' + ${this.clinic.id}" class="click_able"></nuxt-link>
      <div class="clinicList">
        <div class="title">
          <h2 class="clinic_name">${this.info.name || '歯科医院'}</h2>
          <p v-if="${this.clinic.planForSort < 4}" class="pr">PR</p>
          <p v-else>ー</p>
        </div>
        <div class="information">
          <div class="picture">
            <img class="clinic_img" :src="${
              this.imageURL
            }" alt="イメージ写真" />
          </div>
          <div class="place">
            <p class="address">
              <img class="icon" src="/img/common/map_icon02.svg" alt="住所" />
              ${this.info.address}
            </p>
            <template v-if="${this.clinic.nearest.length}">
            ${this.clinic.nearest.map(
              (item) => html`
            <p class="station">
                <img class="icon" src="/img/common/train_icon.svg" alt="電車" />
                ${item.str}
              </p>
            </template>
            `
            )}
              
          </div>
        </div>
        <h3 class="table_title">診療受付時間・休診日</h3>
        <div class="table pc">
          <table>
            <thead>
              <tr>
              ${this.weekday.map((item) => html` <th>${item}</th> `)}
              </tr>
            </thead>
            <tbody>
              <tr>
              ${this.sortedOpenTime.map(
                (item) => html`
                  <td class="week">
                    ${item.map(
                      (time) => html`
                        <template>
                          <p v-if="${time.str}" :key="${time.str}">
                            ${time.str}
                          </p>
                        </template>
                      `
                    )}
                  </td>
                `
              )}
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table sp">
          <table>
          ${this.weekday.map(
            (item) => html`
              <tr :key="${item}">
                <td>${item}</td>
                <td>
                  ${this.sortedOpenTime.map(
                    (openTime) => html`
                      <div :key="${openTime}">
                        ${openTime.map(
                          (time) => html`
                            <div :key="${time}">
                              <div v-if="${time.day === item}">${time.str}</div>
                            </div>
                          `
                        )}
                      </div>
                    `
                  )}
                </td>
              </tr>
            `
          )}
            
          </table>
        </div>
        <ul class="tag">
        ${this.limitFeatures.map((item) => html` <li>#${item}</li>`)}
        </ul>
        <div class="reservation">
          <p class="tel" v-if="${this.info.phone}">
            <a :href="'tel:' + ${this.info.phone}">電話予約</a>
          </p>
          <p class="notset_tel" v-else>電話予約</p>
          <p class="web" v-if="${this.info.webReserve}">
            <a :href="${this.info.webReserve}">Web予約</a>
          </p>
          <p class="notset_web" v-else>Web予約</p>
        </div>
      </div>
    </div> `
  }
}
customElements.define('result-box', ResultBox)
