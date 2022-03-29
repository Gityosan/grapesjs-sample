import { html, LitElement } from 'lit'

export default class MyElement extends LitElement {
  static properties = {
    condition: { type: Boolean }
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
