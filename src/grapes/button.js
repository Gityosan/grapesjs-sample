export default function sampleButton(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('sample-button', {
    id: 'sample-button',
    label: 'sample-button',
    // content: '<div data-gjs-type="text">Insert your text here</div>'
    content: `<sample-button></sample-button>`
  })
  editor.DomComponents.addType('sample-button', {
    isComponent: (el) => el.tagName === 'SAMPLE-BUTTON',
    model: {
      defaults: {
        tagName: 'sample-button',
        traits: [
          {
            type: 'checkbox',
            name: 'condition'
          }
        ],
        editable: true
      }
    }
  })
}
