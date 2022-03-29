export default function borderBox(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('border-box', {
    id: 'border-box',
    label: '<b>シンプルなボックス</b>',
    content: `<border-box></border-box>`
  })
  editor.DomComponents.addType('border-box', {
    isComponent: (el) => el.tagName === 'BORDER-BOX',
    model: {
      defaults: {
        tagName: 'border-box',
        traits: [
          {
            type: 'text',
            name: 'text',
            label: '文言',
            default: 'ここに入力'
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
