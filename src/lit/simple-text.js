import { html, LitElement } from 'lit'

export default class SimpleText extends LitElement {
  static properties = {
    text: { type: String },
    fontsize: { type: Number },
    lineheight: { type: Number }
  }

  constructor() {
    super()
    this.text = 'Somebody'
    this.fontsize = 16
    this.lineheight = 1.5
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .text {
          color: black;
          font-size: ${this.fontsize}px;
          line-height: ${this.lineheight};
          margin: 0;
        }
      </style>
    `
  }

  willUpdate(cp) {
    if (cp.has('fontsize') || cp.has('lineheight')) {
      this.styles = this.returnStyle()
    }
  }

  render() {
    return html`${this.styles}
      <p class="text">${this.text}</p>`
  }
}
customElements.define('simple-text', SimpleText)
