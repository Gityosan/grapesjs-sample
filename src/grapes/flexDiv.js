export default function flexDiv(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('flex-div', {
    id: 'flex-div',
    label: '<b>フレックスボックス</b>',
    content: `<flex-div></flex-div>`,
    media: "<img src='/collage.svg' />"
  })
  editor.DomComponents.addType('flex-div', {
    isComponent: (el) => el.tagName === 'FLEX-DIV',
    model: {
      defaults: {
        tagName: 'flex-div',
        traits: [
          {
            type: 'number',
            name: 'width',
            label: '横幅(px)',
            default: 100
          },
          {
            type: 'select',
            name: 'widthunit',
            label: '横幅の単位',
            default: '%',
            options: [
              // Array of options id=value/name=label
              { id: '%', name: '%' },
              { id: 'px', name: 'px' }
            ]
          },
          {
            type: 'number',
            name: 'height',
            label: '高さ(px)',
            default: 150
          },
          {
            type: 'select',
            name: 'justifycontent',
            label: 'justify-content',
            default: 'center',
            options: [
              // Array of options id=value/name=label
              { id: 'space-between', name: 'space-between' },
              { id: 'space-around', name: 'space-around' },
              { id: 'space-evenly', name: 'space-evenly' },
              { id: 'center', name: 'center' },
              { id: 'start', name: 'start' },
              { id: 'end', name: 'end' }
            ]
          },
          {
            type: 'select',
            name: 'alignitems',
            label: 'align-items',
            default: 'center',
            options: [
              // Array of options id=value/name=label
              { id: 'start', name: 'start' },
              { id: 'end', name: 'end' },
              { id: 'center', name: 'center' },
              { id: 'baseline', name: 'baseline' }
            ]
          },
          {
            type: 'select',
            name: 'flexdirection',
            label: 'flex-direction',
            default: 'row',
            options: [
              { id: 'row', name: '横並べ' },
              { id: 'column', name: '縦並べ' }
            ]
          },
          {
            type: 'select',
            name: 'flexwrap',
            label: 'flex-wrap',
            default: 'wrap',
            options: [
              { id: 'wrap', name: '折り返す' },
              { id: 'nowrap', name: '折り返さない' }
            ]
          }
        ],
        editable: true
      }
    }
  })
}
