export default function simpleGreeting(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('simple-greeting', {
    id: 'simple-greeting',
    label: 'simple-greeting',
    // content: '<div data-gjs-type="text">Insert your text here</div>'
    content: `<simple-greeting></simple-greeting>`
  })
  editor.DomComponents.addType('simple-greeting', {
    isComponent: (el) => el.tagName === 'SIMPLE-GREETING',
    model: {
      defaults: {
        tagName: 'simple-greeting',
        traits: ['name'],
        editable: true
      }
    }
  })
}
