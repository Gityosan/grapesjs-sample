export default function formTitle(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('form-title', {
    id: 'form-title',
    label: '<b>タイトル</b>',
    content: `<form-title></form-title>`
  })
  editor.DomComponents.addType('form-title', {
    isComponent: (el) => el.tagName === 'FORM-TITLE',
    model: {
      defaults: {
        tagName: 'form-title',
        traits: [
          {
            type: 'text',
            name: 'text',
            label: 'タイトル',
            default: '御見積書'
          },
          {
            type: 'number',
            name: 'width',
            label: '横幅',
            default: 150
          },
          {
            type: 'number',
            name: 'height',
            label: '高さ',
            default: 40
          },
          {
            type: 'number',
            name: 'fontSize',
            label: 'フォントの大きさ',
            default: 36
          },
          {
            type: 'select',
            name: 'textAlign',
            label: '揃え位置',
            default: 'center',
            options: [
              { id: 'start', name: 'start' },
              { id: 'end', name: 'end' },
              { id: 'center', name: 'center' },
              { id: 'left', name: 'left' },
              { id: 'right', name: 'right' },
              { id: 'justify', name: 'justify' },
              { id: 'unset', name: 'unset' }
            ]
          },
          {
            type: 'select',
            name: 'backgroundColor',
            label: '背景色',
            default: '#ffffff',
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
