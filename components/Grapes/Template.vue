<template>
  <div class="d-flex">
    <div id="gjs">
      <!-- <grapesjs-frame> -->
      <flex-div>
        <form-title width="200" height="100" text="タイトル"></form-title>
      </flex-div>
      <flex-div height="42">
        <border-box
          text="品目・品名"
          width="150"
          backgroundColor="#F3E9DD"
        ></border-box>
        <border-box
          text="数量"
          width="50"
          backgroundColor="#F3E9DD"
        ></border-box>
        <border-box
          text="単価"
          width="50"
          backgroundColor="#F3E9DD"
        ></border-box>
        <border-box
          text="金額"
          width="50"
          backgroundColor="#F3E9DD"
        ></border-box>
      </flex-div>
      <flex-div v-for="i in 4" :key="i" height="42">
        <border-box text="" width="150"></border-box>
        <border-box text="" width="50"></border-box>
        <border-box text="" width="50"></border-box>
        <border-box text="" width="50"></border-box>
      </flex-div>
      <!-- <flex-div height="42">
          <border-box text="住所" width="350"></border-box>
          <border-box text="東京都横浜市湘南天神1-1" width="500"></border-box>
        </flex-div> -->
      <!-- </grapesjs-frame> -->
    </div>
    <v-card class="panels my-4 mr-4" flat>
      <v-tabs
        v-model="tab"
        centered
        light
        icons-and-text
        color="#F3E9DD"
        slider-color="#4C7D38"
      >
        <v-tab>
          <v-icon color="#4C7D38">mdi-apps</v-icon>
        </v-tab>
        <v-tab>
          <v-icon color="#4C7D38">mdi-cog-outline</v-icon>
        </v-tab>
      </v-tabs>
      <div v-show="tab === 0" id="blocks"></div>
      <div v-show="tab === 1" id="traits"></div>
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
    const mainWidth = Math.floor(
      (document.body.clientWidth -
        document.getElementsByTagName('nav')[0].clientWidth) *
        0.98995
    )
    console.log(mainWidth)
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: mainWidth + 'px',
      width: '70%',
      storageManager: false,
      deviceManager: false,
      plugins: grapesjsConfig,
      // 各種便利ボタンパネル設定
      panels: {
        defaults: []
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
