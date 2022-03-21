/** @type {import('stylelint').Configuration} */
module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-prettier', 'stylelint-scss', 'stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'string-quotes': 'single',
    'block-no-empty': null,
    'selector-pseudo-class-no-unknown': null,
    'number-leading-zero': null,
    // 'order/properties-alphabetical-order': true,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    indentation: 2,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null
    // 'order/order': ['custom-properties', 'declarations'],
    // 'order/properties-order': ['width', 'height']
  }
}
