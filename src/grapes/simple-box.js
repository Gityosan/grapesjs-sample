export default function simpleBox(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('simple-box', {
    id: 'simple-box',
    label: '<b>シンプルなボックス</b>',
    content: `<simple-box></simple-box>`,
    media: "<img src='/cube-outline.svg' />"
  })
  editor.DomComponents.addType('simple-box', {
    isComponent: (el) => el.tagName === 'SIMPLE-BOX',
    model: {
      defaults: {
        tagName: 'simple-box',
        traits: [
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
            type: 'checkbox',
            name: 'lineheight',
            label: '1行かどうか',
            valueTrue: 'true',
            valueFalse: ''
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
            name: 'padding',
            label: 'パディング(px)',
            default: 0
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
