export default function layoutBox(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('layout-box', {
    id: 'layout-box',
    label: '<b>レイアウトボックス</b>',
    content: `<layout-box></layout-box>`,
    media: "<img src='/collage.svg' />"
  })
  editor.DomComponents.addType('layout-box', {
    isComponent: (el) => el.tagName === 'LAYOUT-BOX',
    model: {
      defaults: {
        tagName: 'layout-box',
        traits: [
          {
            type: 'number',
            name: 'width',
            label: '横幅(px)',
            default: 100
          },
          {
            type: 'number',
            name: 'height',
            label: '高さ(px)',
            default: 40
          },
          {
            type: 'number',
            name: 'margin',
            label: 'マージン(px)',
            default: 0
          },
          {
            type: 'number',
            name: 'padding',
            label: 'パディング(px)',
            default: 0
          },
          {
            type: 'checkbox',
            name: 'border',
            label: '枠線の有無',
            valueTrue: '1px solid black',
            valueFalse: 'none',
            default: '1px solid black'
          }
        ],
        editable: true
      }
    }
  })
}
