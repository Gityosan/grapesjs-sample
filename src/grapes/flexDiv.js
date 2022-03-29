export default function flexDiv(editor) {
  const config = editor.getConfig()
  config.forceClass = 0
  editor.BlockManager.add('flex-div', {
    id: 'flex-div',
    label: '<b>フレックスボックス</b>',
    // content: '<div data-gjs-type="text">Insert your text here</div>'
    content: `<flex-div></flex-div>`
  })
  editor.DomComponents.addType('flex-div', {
    isComponent: (el) => el.tagName === 'FLEX-DIV',
    model: {
      defaults: {
        tagName: 'flex-div',
        traits: [
          {
            type: 'number',
            name: 'height',
            label: '高さ',
            default: 150
          },
          {
            type: 'select',
            name: 'justifyContent',
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
            name: 'alignItems',
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
            name: 'flexDirection',
            label: 'flex-direction',
            default: 'row',
            options: [
              { id: 'row', name: '横並べ' },
              { id: 'column', name: '縦並べ' }
            ]
          },
          {
            type: 'select',
            name: 'flexWrap',
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
