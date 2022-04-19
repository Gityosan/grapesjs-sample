export default function borderBox(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('border-boxes', {
    id: 'border-box',
    label: '<b>複数ボックス</b>',
    content:
      '<flex-div height="42">' +
      '<border-box></border-box>'.repeat(3) +
      '</flex-div>',
    media: "<img src='/chart-tree.svg' />"
  })
  editor.DomComponents.addType('border-box', {
    isComponent: (el) => el.tagName === 'BORDER-BOX',
    model: {
      defaults: {
        tagName: 'border-box',
        traits: [
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
            name: 'padding',
            label: 'パディング(px)',
            default: 0
          },
          {
            type: 'text',
            name: 'text',
            label: '文言',
            default: ''
          },
          {
            type: 'number',
            name: 'fontsize',
            label: 'フォントの大きさ',
            default: 16
          },
          {
            type: 'select',
            name: 'oneline',
            label: '1行かどうか',
            default: '1行',
            options: [
              { id: 'one', name: '1行' },
              { id: 'over', name: '2行以上' }
            ]
          },
          {
            type: 'select',
            name: 'textalign',
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
            name: 'backgroundcolor',
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
