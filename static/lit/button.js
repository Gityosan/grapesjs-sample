import { html, LitElement } from 'https://cdn.skypack.dev/lit'

export class MyElement extends LitElement {
  static properties = {
    condition: {}
  }

  constructor() {
    super()
    this.condition = true
  }

  render() {
    return html`
      <p>Render content conditionally:</p>
      ${this.condition
        ? html` <p>Render some HTML if condition is true.</p> `
        : html` <p>Render some other HTML if condition is false.</p> `}
      <button
        @click=${() => {
          this.condition = !this.condition
        }}
      >
        Toggle condition
      </button>
    `
  }
}
customElements.define('sample-button', MyElement)
