import { html, LitElement } from 'lit'

export default class TextBox extends LitElement {
  static properties = {
    text: { type: String }
  }

  constructor() {
    super()
    this.text = 'This is Lit Component.'
    this.styles = html`
      <style>
        p {
          display: inline-block;
          line-height: 1.5;
          font-size: 20px;
          color: green;
        }
      </style>
    `
  }

  render() {
    return html`
      ${this.styles}
      <p class="text">${this.text}</p>
    `
  }
}
customElements.define('border-box', TextBox)
