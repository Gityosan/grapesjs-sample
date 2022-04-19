import { html, LitElement } from 'lit'

export default class Title extends LitElement {
  static properties = {
    text: { type: String },
    textalign: { type: String },
    backgroundcolor: { type: String },
    fontsize: { type: Number },
    fontcolor: { type: String },
    width: { type: Number },
    height: { type: Number },
    underbar: { type: String }
  }

  constructor() {
    super()
    this.text = 'タイトル'
    this.textalign = 'center'
    this.width = 100
    this.height = 40
    this.fontsize = 36
    this.fontcolor = 'transparent'
    this.backgroundcolor = '#ffffff'
    this.underbar = '1px solid black'
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
          text-align: ${this.textalign};
          line-height: ${this.height}px;
          font-size: ${this.fontsize}px;
          border-bottom: ${this.underbar};
          background-color: ${this.backgroundcolor};
          margin: 0;
        }
      </style>
    `
  }

  willUpdate(cp) {
    if (
      cp.has('width') ||
      cp.has('height') ||
      cp.has('fontsize') ||
      cp.has('textalign') ||
      cp.has('backgroundcolor') ||
      cp.has('underbar')
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
