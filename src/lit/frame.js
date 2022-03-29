import { html, LitElement } from 'lit'

export default class Frame extends LitElement {
  // static properties = {
  //   text: { type: String }
  // }

  constructor() {
    super()
    this.styles = html`
      <style>
        .frame {
          width: calc(100vw - 60px);
          min-height: calc(100vh - 60px);
          margin: 30px;
          padding: 10px;
          background-color: #c2c2c2;
          overflow: auto;
        }
      </style>
    `
  }

  render() {
    return html`
      ${this.styles}
      <div class="frame"><slot /></div>
    `
  }
}
customElements.define('grapesjs-frame', Frame)
