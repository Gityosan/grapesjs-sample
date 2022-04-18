<template>
  <v-app class="bg">
    <v-app-bar
      app
      color="#ffffff"
      light
      flat
      dense
      style="border-bottom: 1px solid rgb(0 0 0 / 12%)"
    >
      <v-app-bar-title class="font-weight-bold text-h5">
        Lit✖️Grapesjs html builder
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-tooltip
        v-for="item in pages"
        :key="item.title"
        :disabled="$vuetify.breakpoint.xs"
        bottom
      >
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon :to="item.path" nuxt v-on="on">
            <v-icon color="#262626">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ item.title }}</span>
      </v-tooltip>

      <v-text-field
        v-model.trim.lazy="name"
        placeholder="保存するファイル名"
        dense
        hide-details
        outlined
        rounded
        style="max-width: 200px"
      ></v-text-field>
      <v-tooltip :disabled="$vuetify.breakpoint.xs" bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            icon
            v-on="on"
            @click="$store.dispatch('downloadPDF', name)"
          >
            <v-icon color="#444">mdi-download</v-icon>
          </v-btn>
        </template>
        <span>PDFとして保存</span>
      </v-tooltip>
      <v-tooltip :disabled="$vuetify.breakpoint.xs" bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            icon
            v-on="on"
            @click="
              $store.commit('setFrameDirection', !$store.getters.frameDirection)
            "
          >
            <v-icon color="#444">mdi-crop-rotate</v-icon>
          </v-btn>
        </template>
        <span>
          {{ $store.getters.frameDirection ? '横向きに変更' : '縦向きに変更' }}
        </span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    name: '',
    pages: [
      {
        title: 'トップ',
        icon: 'mdi-home',
        path: '/'
      },
      {
        title: 'メール送信',
        icon: 'mdi-email-multiple-outline',
        path: '/mailer'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.bg {
  background-color: #afafaf;
}
</style>
