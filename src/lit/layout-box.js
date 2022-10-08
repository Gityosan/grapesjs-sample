import { html, LitElement } from 'lit'

export default class layoutBox extends LitElement {
  static properties = {
    width: { type: Number },
    height: { type: Number },
    margin: { type: Number },
    padding: { type: Number },
    border: { type: String }
  }

  constructor() {
    super()
    this.width = 60
    this.height = 40
    this.margin = 0
    this.padding = 0
    this.border = '1px solid black'
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .frame {
          width: ${this.width}px;
          min-width: 10px;
          height: ${this.height}px;
          margin: ${this.margin}px;
          padding: ${this.padding}px;
          border: ${this.border};
          overflow: hidden;
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

  // cp=changedProperties
  willUpdate(cp) {
    if (
      cp.has('border') ||
      cp.has('width') ||
      cp.has('height') ||
      cp.has('margin') ||
      cp.has('padding')
    ) {
      this.styles = this.returnStyle()
    }
  }
}
customElements.define('layout-box', layoutBox)
