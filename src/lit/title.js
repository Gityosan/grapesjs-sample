import { html, LitElement } from 'lit'

export default class Title extends LitElement {
  static properties = {
    text: { type: String },
    textAlign: { type: String },
    backgroundColor: { type: String },
    fontSize: { type: Number },
    fontColor: { type: String },
    width: { type: Number },
    height: { type: Number }
  }

  constructor() {
    super()
    this.text = 'タイトル'
    this.textAlign = 'center'
    this.width = 100
    this.height = 40
    this.fontSize = 36
    this.fontColor = 'transparent'
    this.backgroundColor = '#ffffff'
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .text {
          display: inline-block;
          width: ${this.width}px;
          height: ${this.height}px;
          text-align: ${this.textAlign};
          line-height: ${this.height}px;
          font-size: ${this.fontSize}px;
          border-bottom: 1px solid black;
          background-color: ${this.backgroundColor};
          margin: 0;
        }
      </style>
    `
  }

  willUpdate(cp) {
    if (
      cp.has('fontSize') ||
      cp.has('width') ||
      cp.has('backgroundColor') ||
      cp.has('height') ||
      cp.has('textAlign')
    ) {
      this.styles = this.returnStyle()
    }
  }

  render() {
    return html`
      ${this.styles}
      <p class="text">${this.text}</p>
    `
  }
}
customElements.define('form-title', Title)
