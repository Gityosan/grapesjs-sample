import { html, LitElement } from 'lit'

export default class Image extends LitElement {
  static properties = {
    width: { type: Number },
    height: { type: Number },
    objectfit: { type: String }
  }

  constructor() {
    super()
    this.width = 50
    this.height = 50
    this.objectfit = 'contain'
  }

  render() {
    return html`
      ${this.styles}
      <div class="image_wrapper">
        <slot />
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.styles = this.returnStyle()
  }

  returnStyle() {
    return html`
      <style>
        .image_wrapper {
          width: ${this.width}px;
          height: ${this.height}px;
        }
        .image_wrapper > img {
          object-fit: ${this.objectfit};
        }
      </style>
    `
  }

  // cp=changedProperties
  willUpdate(cp) {
    if (cp.has('width') || cp.has('height') || cp.has('objectfit')) {
      this.styles = this.returnStyle()
    }
  }
}
customElements.define('simple-image', Image)
