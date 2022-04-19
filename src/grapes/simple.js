export default function simpleGreeting(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('simple-text', {
    id: 'simple-text',
    label: '<b>シンプルなテキスト</b>',
    content: `<simple-text></simple-text>`,
    media: "<img src='/pencil.svg' />"
  })
  editor.DomComponents.addType('simple-text', {
    isComponent: (el) => el.tagName === 'SIMPLE-TEXT',
    model: {
      defaults: {
        tagName: 'simple-text',
        traits: [
          {
            type: 'text',
            name: 'text',
            label: '文言',
            default: 'ここにテキストを入力'
          },
          {
            type: 'number',
            name: 'fontsize',
            label: 'フォントの大きさ',
            default: 16
          },
          {
            type: 'number',
            name: 'lineheight',
            label: '1行の高さ',
            default: 1.5
          }
        ],
        editable: true
      }
    }
  })
}
