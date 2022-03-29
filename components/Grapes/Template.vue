<template>
  <div>
    <div class="panel__top">
      <div class="panel__basic-actions"></div>
    </div>
    <div id="gjs">
      <grapesjs-frame>
        <flex-div>
          <form-title width="300" height="100" text="タイトル"></form-title>
        </flex-div>
        <flex-div height="42">
          <border-box
            text="品目・品名"
            width="400"
            backgroundColor="#ff963b"
          ></border-box>
          <border-box
            text="数量"
            width="100"
            backgroundColor="#ff963b"
          ></border-box>
          <border-box
            text="単価"
            width="100"
            backgroundColor="#ff963b"
          ></border-box>
          <border-box
            text="金額"
            width="100"
            backgroundColor="#ff963b"
          ></border-box>
        </flex-div>
        <flex-div v-for="i in 4" :key="i" height="42">
          <border-box text="" width="400"></border-box>
          <border-box text="" width="100"></border-box>
          <border-box text="" width="100"></border-box>
          <border-box text="" width="100"></border-box>
        </flex-div>
        <!-- <flex-div height="42">
          <border-box text="住所" width="350"></border-box>
          <border-box text="東京都横浜市湘南天神1-1" width="500"></border-box>
        </flex-div> -->
      </grapesjs-frame>
    </div>
    <div id="blocks"></div>
  </div>
</template>
<script>
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import '@@/src/lit/index'
import grapesjsConfig from '@@/src/grapes/index'
export default {
  data: () => ({
    editor: null,
    sample: 'sample'
  }),
  mounted() {
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
      plugins: grapesjsConfig,

      // 各種便利ボタンパネル設定
      // Avoid any default panel
      panels: {
        defaults: [
          // {
          //   id: 'panel-top',
          //   el: '.panel__top'
          // },
          {
            id: 'options',
            buttons: [
              // {
              //   active: true,
              //   id: 'sw-visibility',
              //   className: 'fa fa-square-o',
              //   command: 'sw-visibility',
              //   context: 'sw-visibility',
              //   attributes: { title: 'View components' }
              // },
              // {
              //   id: 'preview',
              //   className: 'fa fa-eye',
              //   command: 'preview',
              //   context: 'preview',
              //   attributes: { title: 'Preview' }
              // },
              // {
              //   id: 'fullscreen',
              //   className: 'fa fa-arrows-alt',
              //   command: 'fullscreen',
              //   context: 'fullscreen',
              //   attributes: { title: 'Fullscreen' }
              // },
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
              },
              // {
              //   id: 'open-layers',
              //   className: 'fa fa-bars',
              //   command: 'open-layers',
              //   togglable: 0,
              //   attributes: { title: 'Open Layer Manager' }
              // }
              {
                id: 'open-blocks',
                className: 'fa fa-th-large',
                command: 'open-blocks',
                togglable: 0,
                attributes: { title: 'Open Blocks' }
              }
            ]
          }
          // {
          //   id: 'basic-actions',
          //   // el: '.panel__basic-actions',
          //   buttons: [
          //     {
          //       id: 'visibility',
          //       active: true, // active by default
          //       className: 'btn-toggle-borders',
          //       label: '<u>B</u>',
          //       command: 'sw-visibility' // Built-in command
          //     },
          //     {
          //       id: 'export',
          //       className: 'btn-open-export',
          //       label: 'Exp',
          //       command: 'export-template',
          //       context: 'export-template' // For grouping context of buttons from the same panel
          //     },
          //     {
          //       id: 'show-json',
          //       className: 'btn-show-json',
          //       label: 'JSON',
          //       context: 'show-json',
          //       command(editor) {
          //         editor.Modal.setTitle('Components JSON')
          //           .setContent(
          //             `<textarea style="width:100%; height: 250px;">
          //   ${JSON.stringify(editor.getComponents())}
          // </textarea>`
          //           )
          //           .open()
          //       }
          //     }
          //   ]
          // }
        ]
      },
      // コンポーネント登録場所
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'text',
            label: '<b>シンプルなテキスト</b>',
            attributes: { class: 'gjs-block-section' },
            content: '<div data-gjs-type="text">Insert your text here</div>'
          }
          // {
          //   id: 'image',
          //   label: 'Image',
          //   // Select the component once it's dropped
          //   select: true,
          //   // You can pass components as a JSON instead of a simple HTML string,
          //   // in this case we also use a defined component type `image`
          //   content: { type: 'image' },
          //   // This triggers `active` event on dropped components and the `image`
          //   // reacts by opening the AssetManager
          //   activate: true
          // },
          // {
          //   id: 'simples',
          //   label: 'SIMPLES',
          //   // content: '<div data-gjs-type="text">Insert your text here</div>'
          //   content: `<sample-button condition="true"></sample-button>`
          // }
        ]
      }
      // canvas: {
      //   scripts: [],
      //   styles: [
      //     'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css'
      //   ]
      // }
    })
    // this.editor.Css.addRules('.gjs-blocks-cs { background-color: #ffffff}')
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

.gjs-blocks-c {
  background-color: #fff;
}

.panel__top {
  position: initial;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}

.panel__basic-actions {
  position: initial;
}
</style>
