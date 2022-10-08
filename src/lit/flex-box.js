import { html, LitElement } from 'lit'

export default class flexBox extends LitElement {
  static properties = {
    width: { type: Number },
    widthunit: { type: String },
    height: { type: Number },
    justifycontent: { type: String },
    alignitems: { type: String },
    flexdirection: { type: String },
    flexwrap: { type: String }
  }

  constructor() {
    super()
    this.width = 100
    this.widthunit = '%'
    this.height = 200
    this.justifycontent = 'center'
    this.alignitems = 'center'
    this.flexdirection = 'row'
    this.flexwrap = 'wrap'
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .flex {
          width: ${this.width + this.widthunit};
          min-width: 50px;
          display: flex;
          justify-content: ${this.justifycontent};
          align-items: ${this.alignitems};
          height: ${this.height}px;
          flex-direction: ${this.flexdirection};
          flex-wrap: ${this.flexwrap};
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
      cp.has('width') ||
      cp.has('widthunit') ||
      cp.has('height') ||
      cp.has('justifycontent') ||
      cp.has('alignitems') ||
      cp.has('flexdirection') ||
      cp.has('flexwrap')
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
customElements.define('flex-box', flexBox)
