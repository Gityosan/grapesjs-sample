import { html, LitElement } from 'lit'

export default class TextBox extends LitElement {
  static properties = {
    text: { type: String },
    textAlign: { type: String },
    backgroundColor: { type: String },
    width: { type: Number },
    height: { type: Number }
  }

  constructor() {
    super()
    this.text = 'This is Lit Component.'
    this.width = 100
    this.height = 40
    this.textAlign = 'center'
    this.backgroundColor = '#ffffff'
  }

  render() {
    return html`
      ${this.styles}
      <p class="text">${this.text}</p>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .text {
          width: ${this.width}px;
          height: ${this.height}px;
          display: inline-block;
          text-align: ${this.textAlign};
          line-height: ${this.height}px;
          font-size: 20px;
          color: #262626;
          background-color: ${this.backgroundColor};
          border: 1px solid black;
          margin: 0;
        }
      </style>
    `
  }

  // cp=changedProperties
  willUpdate(cp) {
    if (cp.has('width') || cp.has('textAlign') || cp.has('height')) {
      this.styles = this.returnStyle()
    }
  }
}
customElements.define('border-box', TextBox)
