export default function borderBox(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('simple-image', {
    id: 'simple-image',
    label: '<b>シンプルな画像</b>',
    content: `<simple-image></simple-image>`,
    media: "<img src='/image.svg' />",
    onClick: (block, editor) => editor.AssetManager.open()
  })
  editor.DomComponents.addType('simple-image', {
    isComponent: (el) => el.tagName === 'SIMPLE-IMAGE',
    model: {
      defaults: {
        tagName: 'simple-image',
        traits: [
          {
            type: 'number',
            name: 'width',
            label: '横幅',
            default: 50
          },
          {
            type: 'number',
            name: 'height',
            label: '高さ',
            default: 50
          },
          {
            type: 'select',
            name: 'objectfit',
            label: '表示方法',
            default: 'contain',
            options: [
              { id: 'fill', name: 'サイズいっぱい引き伸ばす' },
              { id: 'contain', name: '短辺に合わせる' },
              { id: 'cover', name: '長辺に合わせる' },
              { id: 'none', name: '拡大縮小しない' },
              { id: 'scale-down', name: 'noneかcontainの小さい方に合わせる' }
            ]
          }
        ],
        editable: true
      }
    }
  })
}
