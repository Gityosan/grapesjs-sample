<template>
  <div>
    <div class="panel__top">
      <div class="panel__basic-actions"></div>
    </div>
    <div id="gjs">
      <h1>Hello World Component!</h1>
      <simple-greeting></simple-greeting>
      <border-box></border-box>
    </div>
    <div id="blocks"></div>
    <simple-greeting name="World"></simple-greeting>
    <sample-button></sample-button>
    <border-box></border-box>
  </div>
</template>
<script>
  import grapesjs from 'grapesjs'
  import 'grapesjs/dist/css/grapes.min.css'
  import '@@/components/lit/simple'
  import '@@/components/lit/button'
  import '@@/components/lit/box'
  export default {
    data: () => ({
      editor: null,
      sample: 'sample'
    }),
    mounted() {
      grapesjs.plugins.add('Simple', (editor) => {
        const config = editor.getConfig()
        config.forceClass = 0
        editor.BlockManager.add('border-box', {
          id: 'border-box',
          label: 'border-box',
          content: `<border-box></border-box>`
        })
        editor.DomComponents.addType('border-box', {
          isComponent: (el) => el.tagName === 'BORDER-BOX',
          model: {
            defaults: {
              tagName: 'border-box',
              traits: ['text'],
              editable: true
            }
          }
        })
        editor.BlockManager.add('simple-greeting', {
          id: 'simple-greeting',
          label: 'simple-greeting',
          // content: '<div data-gjs-type="text">Insert your text here</div>'
          content: `<simple-greeting></simple-greeting>`
        })
        editor.DomComponents.addType('simple-greeting', {
          isComponent: (el) => el.tagName === 'SIMPLE-GREETING',
          model: {
            defaults: {
              tagName: 'simple-greeting',
              traits: ['name'],
              editable: true
            }
          }
        })
        editor.BlockManager.add('sample-button', {
          id: 'sample-button',
          label: 'sample-button',
          // content: '<div data-gjs-type="text">Insert your text here</div>'
          content: `<sample-button></sample-button>`
        })
        editor.DomComponents.addType('sample-button', {
          isComponent: (el) => el.tagName === 'SAMPLE-BUTTON',
          model: {
            defaults: {
              tagName: 'sample-button',
              traits: [
                {
                  type: 'checkbox',
                  name: 'condition'
                }
              ],
              editable: true
            }
          }
        })
      })
      this.editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#gjs',
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: '90vh',
        width: '-webkit-fill-available',
        // Disable the storage manager for the moment
        storageManager: false,
        plugins: ['Simple', 'Simples'],

        // 各種便利ボタンパネル設定
        // Avoid any default panel
        panels: {
          defaults: [
            {
              id: 'options',
              buttons: [
                {
                  id: 'export-template',
                  className: 'fa fa-code',
                  command: 'export-template',
                  attributes: { title: 'View code' }
                }
              ]
            },
            {
              id: 'views',
              buttons: [
                {
                  id: 'open-tm',
                  className: 'fa fa-cog',
                  command: 'open-tm',
                  active: true,
                  togglable: 0,
                  attributes: { title: 'Settings' }
                },
                {
                  id: 'open-sm',
                  className: 'fa fa-paint-brush',
                  command: 'open-sm',
                  togglable: 0,
                  attributes: { title: 'Open Style Manager' }
                }
                // {
                //   id: 'open-layers',
                //   className: 'fa fa-bars',
                //   command: 'open-layers',
                //   togglable: 0,
                //   attributes: { title: 'Open Layer Manager' }
                // }
                // {
                //   id: 'open-blocks',
                //   className: 'fa fa-th-large',
                //   command: 'open-blocks',
                //   togglable: 0,
                //   attributes: { title: 'Open Blocks' }
                // }
              ]
            }
          ]
        },
        // コンポーネント登録場所
        blockManager: {
          appendTo: '#blocks',
          blocks: [
            {
              id: 'text',
              label: '<b>Text</b>',
              attributes: { class: 'gjs-block-section' },
              content: '<div data-gjs-type="text">Insert your text here</div>'
            }
          ]
        }
        // canvas: {
        //   scripts: [],
        //   styles: [
        //     'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
        //   ]
        // }
      })
    },
    methods: {
      toHtml() {
        console.log(this.editor.getHtml())
      }
    }
  }
</script>
<style lang="scss" scoped>
  /* Let's highlight canvas boundaries */

  #gjs {
    border: 3px solid #444;
  }

  /* Reset some default styling */
  .gjs-cv-canvas {
    top: 0;
    width: 100%;
    height: 100%;
  }

  .gjs-block {
    width: auto;
    height: auto;
    min-height: auto;
  }

  .panel__top {
    position: initial;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
  }

  .panel__basic-actions {
    position: initial;
  }
</style>
