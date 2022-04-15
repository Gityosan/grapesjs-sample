import { html, LitElement } from 'lit'

export default class CheckBox extends LitElement {
  static properties = {
    width: { type: Number },
    height: { type: Number },
    checkbox: { type: Boolean },
    accentColor: { type: String }
  }

  constructor() {
    super()
    this.width = 20
    this.height = 20
    this.checkbox = true
    this.accentColor = 'black'
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .checkbox {
          width: ${this.width}px;
          height: ${this.height}px;
          margin: 0;
          padding: 0;
          accent-color: ${this.accentColor};
        }
      </style>
    `
  }

  render() {
    return html`
      ${this.styles}
      <input
        type="checkbox"
        class="checkbox"
        value=${this.checkbox}
        .checked=${this.checkbox}
      />
    `
  }

  // cp=changedProperties
  willUpdate(cp) {
    if (
      cp.has('accentColor') ||
      cp.has('checkbox') ||
      cp.has('width') ||
      cp.has('height')
    ) {
      this.styles = this.returnStyle()
    }
  }
}
customElements.define('atom-checkbox', CheckBox)
