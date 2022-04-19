export default function sampleButton(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('atom-checkbox', {
    id: 'atom-checkbox',
    label: '<b>チエックボックス</b>',
    content: `<atom-checkbox></atom-checkbox>`,
    media: "<img src='/checkbox-outline.svg' />"
  })
  editor.DomComponents.addType('atom-checkbox', {
    isComponent: (el) => el.tagName === 'ATOM-CHECKBOX',
    model: {
      defaults: {
        tagName: 'atom-checkbox',
        traits: [
          {
            type: 'number',
            name: 'width',
            label: '横幅(px)',
            default: 20
          },
          {
            type: 'number',
            name: 'height',
            label: '高さ(px)',
            default: 20
          },
          {
            type: 'checkbox',
            name: 'checkbox',
            label: 'チェックの有無',
            default: true
          },
          {
            type: 'select',
            name: 'accentcolor',
            label: '背景色',
            options: [
              { id: '#ffffff', name: '白' },
              { id: '#000000', name: '黒' },
              { id: '#f7f5f5', name: 'グレー' },
              { id: '#4073ff', name: '青' },
              { id: '#3bd8ff', name: '水色' },
              { id: '#1fbf3f', name: '緑' },
              { id: '#ff963b', name: 'オレンジ' },
              { id: 'transparent', name: '透明' }
            ]
          }
        ],
        editable: true
      }
    }
  })
}
