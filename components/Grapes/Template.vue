<template>
  <div class="editor_frame">
    <div
      id="gjs"
      :class="[
        {
          vertical_frame: $store.getters.frameDirection,
          landscape_frame: !$store.getters.frameDirection
        },
        'ma-4'
      ]"
    >
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
    </div>
    <v-card
      :class="[
        {
          vertical_panels: $store.getters.frameDirection,
          landscape_panels: !$store.getters.frameDirection
        },
        'my-4',
        'mr-4'
      ]"
      flat
      :style="{ width: $store.getters }"
    >
      <v-card class="d-flex justify-space-around" flat>
        <v-card-text>
          縦：{{ $store.getters.frameDirection ? '848.4' : '600' }}px
        </v-card-text>
        <v-card-text>
          横：{{ $store.getters.frameDirection ? '600' : '848.4' }}px
        </v-card-text>
      </v-card>
      <v-tabs
        v-model="tab"
        centered
        light
        icons-and-text
        color="black"
        show-arrows
        center-active
      >
        <v-tabs-slider color="#efefef"></v-tabs-slider>

        <v-tab>
          <v-icon>mdi-cog-outline</v-icon>
        </v-tab>
        <v-tab>
          <v-icon>mdi-apps</v-icon>
        </v-tab>
        <v-tab>
          <v-icon>mdi-form-select</v-icon>
        </v-tab>
        <v-tab>
          <v-icon>mdi-layers-outline</v-icon>
        </v-tab>
      </v-tabs>
      <div v-show="tab === 0" id="traits"></div>
      <div v-show="tab === 1" id="blocks"></div>
      <div
        v-if="tab === 2"
        class="ma-5 d-flex flex-wrap flex-column justify-space-between align-center"
      >
        <div v-for="item in pages" :key="item.title" class="d-flex flex-nowrap">
          <v-btn
            class="my-2"
            width="100%"
            append="mdi-trash-can-outline"
            @click="selectTemplate(item.page_id)"
          >
            {{ item.title }}
          </v-btn>
          <v-icon @click="deleteTemplate(item.id)">
            mdi-trash-can-outline
          </v-icon>
        </div>
        <v-card class="my-5 pa-5 rounded-xl">
          <v-card-text>今の状態を新規テンプレートとして保存</v-card-text>
          <v-text-field
            v-model.trim.lazy="title"
            placeholder="テンプレート名"
            dense
            class="px-5"
          ></v-text-field>
          <v-btn
            class="my-2 mx-5"
            width="-webkit-fill-available"
            min-height="40px"
            @click="createTemplate()"
            >保存
          </v-btn>
        </v-card>
      </div>
      <div v-show="tab === 3" id="layers"></div>
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
    pages: [],
    title: '',
    frameHeight: 0,
    frameWidth: 0
  }),
  async mounted() {
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
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
      layerManager: {
        appendTo: '#layers'
      },
      // コンポーネント登録場所
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'text',
            label: '<b>シンプルなテキスト</b>',
            attributes: { class: 'gjs-block-section' },
            content: '<div data-gjs-type="text">ここにテキストを入力</div>',
            media: "<img src='/pencil.svg' />"
          },
          {
            id: 'image',
            label: '<b>画像</b>',
            media: "<img src='/image.svg' />",
            content: { type: 'image' },
            activate: true
          }
        ]
      },
      assetManager: {
        noAssets: '画像がありません',
        showUrlInput: false,
        assets: ['xscore_logo.png']
      }
    })
    await this.readTemplate()
    // 編集作業箇所を横向きにする
    this.$store.commit('setFrameDirection', !this.$store.getters.frameDirection)
  },
  methods: {
    header() {
      return {
        headers: { 'X-MICROCMS-API-KEY': this.$config.MICROCMS_API_KEY }
      }
    },
    toHtml() {
      console.log(this.editor.getHtml())
    },
    selectTemplate(id) {
      this.editor.Pages.select(id)
    },
    async readTemplate() {
      await this.$axios
        .get(this.$config.MICROCMS_API_URL + '/template', this.header())
        .then((res) => {
          this.pages = res.data.contents
          for (let i = 0, len = this.pages.length; i < len; i++) {
            const v = this.pages[i]
            this.editor.Pages.add({
              id: v.page_id,
              component: v.html
            })
          }
        })
        .catch((e) => {
          console.log('microCMS/listTemplate/Error', e)
        })
    },
    createTemplate() {
      const html = this.editor.getHtml()
      const page = this.editor.Pages.add({
        component: html
      })
      const pageId = page.id
      this.$axios
        .post(
          this.$config.MICROCMS_API_URL + '/template',
          { page_id: pageId, title: this.title, html },
          this.header()
        )
        .then(() => {
          this.readTemplate()
        })
        .catch((e) => {
          console.log('microCMS/createTodo/Error', e)
        })
    },
    async deleteTemplate(id) {
      await this.$axios
        .delete(
          this.$config.MICROCMS_API_URL + '/template/' + id,
          this.header()
        )
        .then(() => {
          this.readTemplate()
        })
        .catch((e) => {
          console.log('microCMS/deleteTemplate/Error', e)
        })
    },
    addpage() {
      const page = this.editor.Pages.add({
        // id: 'new-page-id', // without an explicit ID, a random one will be created
        styles: `.my-class { color: blue }`, // or a JSON of styles
        component: '<div class="my-class">My element</div>' // or a JSON of components
      })
      console.log(page)
      const allpages = this.editor.Pages.getAll()
      console.log(allpages)
      this.editor.Pages.select('new-page-id')
    }
  }
}
</script>
<style lang="scss" scoped>
.editor_frame {
  display: flex;
  flex-flow: column nowrap;

  .vertical_frame {
    width: 600px !important;
    height: 848.4px !important;
  }

  .landscape_frame {
    width: 848.4px !important;
    height: 600px !important;
  }

  .vertical_panels {
    width: calc(100% - 32px);
    min-height: 600px;
    margin-left: 16px;
    border-radius: unset;
    box-shadow: none;
  }

  .landscape_panels {
    width: calc(100% - 32px);
    min-height: 600px;
    margin-left: 16px;
    border-radius: unset;
    box-shadow: none;
  }
}
@media screen and (min-width: 1300px) {
  .editor_frame {
    flex-flow: row wrap;

    .vertical_panels {
      width: calc(100% - 600px - 48px);
      margin-left: 0;
    }

    .landscape_panels {
      width: calc(100% - 848.4px - 48px);
      margin-left: 0;
    }
  }
}
</style>
