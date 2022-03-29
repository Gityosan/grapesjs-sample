export default function grapesjsFrame(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('grapesjs-frame', {
    id: 'grapesjs-frame',
    label: 'grapesjs-frame',
    content: `<grapesjs-frame></grapesjs-frame>`
  })
  editor.DomComponents.addType('grapesjs-frame', {
    isComponent: (el) => el.tagName === 'GRAPESJS-FRAME',
    model: {
      defaults: {
        tagName: 'grapesjs-frame',
        // traits: ['text'],
        editable: true
      }
    }
  })
}
