<template>
  <div class="d-flex">
    <div id="gjs">
      <grapesjs-frame>
        <flex-div>
          <form-title width="300" height="100" text="タイトル"></form-title>
        </flex-div>
        <flex-div height="42">
          <border-box
            text="品目・品名"
            width="400"
            backgroundColor="#F3E9DD"
          ></border-box>
          <border-box
            text="数量"
            width="100"
            backgroundColor="#F3E9DD"
          ></border-box>
          <border-box
            text="単価"
            width="100"
            backgroundColor="#F3E9DD"
          ></border-box>
          <border-box
            text="金額"
            width="100"
            backgroundColor="#F3E9DD"
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
    <v-card class="panels my-4 mr-4" flat>
      <v-tabs
        v-model="tab"
        centered
        light
        icons-and-text
        color="#F3E9DD"
        slider-color="#DAB88B"
      >
        <v-tab>
          <v-icon color="#DAB88B">mdi-cog-outline</v-icon>
        </v-tab>
        <v-tab>
          <v-icon color="#DAB88B">mdi-apps</v-icon>
        </v-tab>
      </v-tabs>
      <div v-show="tab === 1" id="traits"></div>
      <div v-show="tab === 0" id="blocks"></div>
    </v-card>
  </div>
</template>
<script>
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import '@@/assets/grapesjs-fix.scss'
import '@@/src/lit/index'
import grapesjsConfig from '@@/src/grapes/index'
export default {
  data: () => ({
    editor: null,
    tab: true,
    sample: 'sample',
    svg: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7Z" /></svg>'
  }),
  mounted() {
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: 'calc(100vh - 64px)',
      width: '70%',
      // Disable the storage manager for the moment
      storageManager: false,
      deviceManager: false,
      plugins: grapesjsConfig,

      // 各種便利ボタンパネル設定
      // Avoid any default panel
      panels: {
        defaults: [
          // {
          //   id: 'panel-top',
          //   el: '.panel__top'
          // },
          // {
          //   id: 'options',
          //   buttons: [
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
          //     {
          //       id: 'export-template',
          //       className: 'fa fa-code',
          //       command: 'export-template',
          //       attributes: { title: 'View code' }
          //     }
          //   ]
          // }
          // {
          //   id: 'views',
          //   buttons: [
          //     {
          //       id: 'open-tm',
          //       className: 'fa fa-cog',
          //       command: 'open-tm',
          //       active: true,
          //       togglable: 0,
          //       attributes: { title: 'Settings' }
          //     },
          //     {
          //       id: 'open-sm',
          //       className: 'fa fa-paint-brush',
          //       command: 'open-sm',
          //       togglable: 0,
          //       attributes: { title: 'Open Style Manager' }
          //     },
          // {
          //   id: 'open-layers',
          //   className: 'fa fa-bars',
          //   command: 'open-layers',
          //   togglable: 0,
          //   attributes: { title: 'Open Layer Manager' }
          // }
          //     {
          //       id: 'open-blocks',
          //       className: 'fa fa-th-large',
          //       command: 'open-blocks',
          //       togglable: 0,
          //       attributes: { title: 'Open Blocks' }
          //     }
          //   ]
          // }
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
      styleManager: false,
      traitManager: {
        appendTo: '#traits'
      },
      // コンポーネント登録場所
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'text',
            label: '<b>シンプルなテキスト</b>',
            attributes: { class: 'gjs-block-section' },
            content: '<div data-gjs-type="text">Insert your text here</div>',
            media: this.svg
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
    })
  },
  methods: {
    toHtml() {
      console.log(this.editor.getHtml())
    }
  }
}
</script>
