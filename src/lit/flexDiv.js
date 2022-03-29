import { html, css, LitElement } from 'lit'

export default class FlexDiv extends LitElement {
  static properties = {
    height: { type: Number },
    justifyContent: { type: String },
    alignItems: { type: String },
    flexDirection: { type: String },
    flexWrap: { type: String }
  }

  constructor() {
    super()
    this.height = 200
    this.justifyContent = 'center'
    this.alignItems = 'center'
    this.flexDirection = 'row'
    this.flexWrap = 'wrap'
    // this.styles = this.returnStyle()
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .flex {
          width: 100%;
          min-width: 10px;
          display: flex;
          justify-content: ${this.justifyContent};
          align-items: ${this.alignItems};
          height: ${this.height}px;
          flex-direction: ${this.flexDirection};
          flex-wrap: ${this.flexWrap};
        }
        .flex:hover {
          background-color: #f7f5f5;
        }
      </style>
    `
  }

  // cp=changedProperties
  willUpdate(cp) {
    if (
      cp.has('height') ||
      cp.has('justifyContent') ||
      cp.has('alignItems') ||
      cp.has('flexDirection') ||
      cp.has('flexWrap')
    ) {
      this.styles = this.returnStyle()
    }
  }

  render() {
    return html`
      ${this.styles}
      <div class="flex">
        <slot />
      </div>
    `
  }
}
customElements.define('flex-div', FlexDiv)
