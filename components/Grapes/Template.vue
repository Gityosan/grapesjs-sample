<template>
  <div>
    <div class="panel__top">
      <div class="panel__basic-actions"></div>
    </div>
    <div id="gjs">
      <h1>Hello World Component!</h1>
      <simple-greeting name="World"></simple-greeting>
      <h1>Hello World Component!</h1>
    </div>
    <div id="blocks"></div>
    <v-btn @click="toHtml()">{{ sample }}</v-btn>
    <simple-greeting name="World"></simple-greeting>
    <sample-button></sample-button>
    <result-box></result-box>
  </div>
</template>
<script>
  import grapesjs from 'grapesjs'
  import 'grapesjs/dist/css/grapes.min.css'
  // import Vue from 'vue'
  // import Vuetify from 'vuetify'
  import '@@/lit/simple'
  import '@@/lit/button'
  import '@@/lit/box'
  export default {
    data() {
      return {
        editor: null,
        sample: 'sample'
      }
    },
    // head: {
    //   script: [{ src: './simple.js', type: 'module' }]
    // },
    mounted() {
      // grapesjs.plugins.add('components-vue', (editor, options) => {
      //   var blockManager = editor.BlockManager
      //   var comps = editor.DomComponents
      //   var config = editor.getConfig()
      //   config.forceClass = 0
      //   blockManager.add('v-btn', {
      //     label: 'Button',
      //     content: '<v-btn />'
      //   })
      //   // comps.addType('v-btn', VBtn(editor))
      // })
      grapesjs.plugins.add('vBtnPlugin', (editor) => {
        var config = editor.getConfig()
        config.forceClass = 0
        editor.BlockManager.add('v-btn', {
          id: 'v-btn',
          label: 'Button',
          content: '<v-btn color="red">B</v-btn>'
        })
        editor.DomComponents.addType('v-btn', {
          isComponent: (el) => el.tagName === 'V-BTN',

          // Model definition
          model: {
            // Default properties
            defaults: {
              tagName: 'p'
            }
          }
        })
      })
      const script = function (props) {
        // const script = document.createElement('script')
        // // script.onload = initLib
        // script.src = './lit/simple.js'
        // document.body.appendChild(script)
        console.log('this', this)
        console.log('props', props)
      }
      grapesjs.plugins.add('Simple', (editor) => {
        var config = editor.getConfig()
        config.forceClass = 0
        editor.BlockManager.add('simple', {
          id: 'simple',
          label: 'Simple',
          // content: '<div data-gjs-type="text">Insert your text here</div>'
          content: `<simple-greeting name="iihara"></simple-greeting>`
        })
        editor.DomComponents.addType('simple', {
          isComponent: (el) => el.tagName === 'SIMPLE-GREETING',
          model: {
            defaults: {
              tagName: 'simple-greeting',
              traits: ['name'],
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
        height: '300px',
        width: '-webkit-fill-available',
        // Disable the storage manager for the moment
        storageManager: false,
        plugins: ['Simple', 'vBtnPlugin'],
        // Avoid any default panel
        panels: {
          defaults: [
            {
              id: 'panel-top',
              el: '.panel__top'
            },
            {
              id: 'options',
              buttons: [
                {
                  active: true,
                  id: 'sw-visibility',
                  className: 'fa fa-square-o',
                  command: 'sw-visibility',
                  context: 'sw-visibility',
                  attributes: { title: 'View components' }
                },
                {
                  id: 'preview',
                  className: 'fa fa-eye',
                  command: 'preview',
                  context: 'preview',
                  attributes: { title: 'Preview' }
                },
                {
                  id: 'fullscreen',
                  className: 'fa fa-arrows-alt',
                  command: 'fullscreen',
                  context: 'fullscreen',
                  attributes: { title: 'Fullscreen' }
                },
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
                  id: 'open-sm',
                  className: 'fa fa-paint-brush',
                  command: 'open-sm',
                  active: true,
                  togglable: 0,
                  attributes: { title: 'Open Style Manager' }
                },
                {
                  id: 'open-tm',
                  className: 'fa fa-cog',
                  command: 'open-tm',
                  togglable: 0,
                  attributes: { title: 'Settings' }
                },
                {
                  id: 'open-layers',
                  className: 'fa fa-bars',
                  command: 'open-layers',
                  togglable: 0,
                  attributes: { title: 'Open Layer Manager' }
                },
                {
                  id: 'open-blocks',
                  className: 'fa fa-th-large',
                  command: 'open-blocks',
                  togglable: 0,
                  attributes: { title: 'Open Blocks' }
                }
              ]
            },
            {
              id: 'basic-actions',
              // el: '.panel__basic-actions',
              buttons: [
                {
                  id: 'visibility',
                  active: true, // active by default
                  className: 'btn-toggle-borders',
                  label: '<u>B</u>',
                  command: 'sw-visibility' // Built-in command
                },
                {
                  id: 'export',
                  className: 'btn-open-export',
                  label: 'Exp',
                  command: 'export-template',
                  context: 'export-template' // For grouping context of buttons from the same panel
                },
                {
                  id: 'show-json',
                  className: 'btn-show-json',
                  label: 'JSON',
                  context: 'show-json',
                  command(editor) {
                    editor.Modal.setTitle('Components JSON')
                      .setContent(
                        `<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
                      )
                      .open()
                  }
                }
              ]
            }
          ]
        },
        blockManager: {
          // appendTo: '#blocks',
          blocks: [
            {
              id: 'section', // id is mandatory
              label: '<b>Section</b>', // You can use HTML/SVG inside labels
              attributes: { class: 'gjs-block-section' },
              content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`
            },
            {
              id: 'text',
              label: 'Text',
              content: '<div data-gjs-type="text">Insert your text here</div>'
            },
            {
              id: 'image',
              label: 'Image',
              // Select the component once it's dropped
              select: true,
              // You can pass components as a JSON instead of a simple HTML string,
              // in this case we also use a defined component type `image`
              content: { type: 'image' },
              // This triggers `active` event on dropped components and the `image`
              // reacts by opening the AssetManager
              activate: true
            }
          ]
        },
        canvas: {
          scripts: [
            { src: './simple.js', type: 'module' }
            // { src: 'https://cdn.skypack.dev/lit', type: 'module' },
            // 'https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js',
            // 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js'
          ],
          styles: ['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css']
        }
      })
      console.log(this.editor)
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
    padding: 0;
    width: 100%;
    display: flex;
    position: initial;
    justify-content: center;
    justify-content: space-between;
  }
  .panel__basic-actions {
    position: initial;
  }
</style>
