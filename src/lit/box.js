import { html, LitElement } from 'lit'

export default class TextBox extends LitElement {
  static properties = {
    text: { type: String },
    fontsize: { type: Number },
    textalign: { type: String },
    backgroundcolor: { type: String },
    width: { type: Number },
    height: { type: Number },
    padding: { type: Number },
    border: { type: String },
    oneline: { type: String }
  }

  constructor() {
    super()
    this.text = 'This is Lit Component.'
    this.fontsize = 16
    this.width = 100
    this.height = 40
    this.padding = 0
    this.textalign = 'center'
    this.backgroundcolor = '#ffffff'
    this.border = '1px solid black'
    this.oneline = 'one'
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
          padding: ${this.padding}px;
          display: inline-block;
          font-size: ${this.fontsize}px;
          text-align: ${this.textalign};
          line-height: ${this.oneline === 'one' ? this.height + 'px' : '1.5'};
          color: #262626;
          background-color: ${this.backgroundcolor};
          border: ${this.border};
          margin: 0;
          vertical-align: middle;
          overflow: hidden;
          overflow-wrap: break-word;
        }
      </style>
    `
  }

  // cp=changedProperties
  willUpdate(cp) {
    if (
      cp.has('border') ||
      cp.has('width') ||
      cp.has('fontsize') ||
      cp.has('textalign') ||
      cp.has('backgroundcolor') ||
      cp.has('border') ||
      cp.has('height') ||
      cp.has('oneline') ||
      cp.has('padding')
    ) {
      this.styles = this.returnStyle()
    }
  }
}
customElements.define('border-box', TextBox)
