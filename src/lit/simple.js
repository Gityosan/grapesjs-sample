import { html, LitElement } from 'lit'

export default class SimpleGreeting extends LitElement {
  static properties = {
    name: { type: String }
  }

  constructor() {
    super()
    this.name = 'Somebody'
    this.styles = html`
      <style>
        p {
          color: blue;
          font-size: 25px;
        }
      </style>
    `
  }

  render() {
    return html`${this.styles}
      <p>Hello, ${this.name}!</p>`
  }
}
customElements.define('simple-greeting', SimpleGreeting)
