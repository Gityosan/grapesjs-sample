<template>
  <v-app class="bg">
    <v-app-bar
      app
      color="#4C7D38"
      light
      flat
      dense
      style="border-bottom: 1px solid rgb(0 0 0 / 12%)"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-app-bar-title class="font-weight-bold text-h5 font_color">
        Lit+GrapesJs Sample App
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#ffffff" @click="$store.dispatch('downloadPDF')">
          mdi-download
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#ffffff">mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#ffffff">mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      light
      :permanent="$vuetify.breakpoint.smAndUp"
      color="#4C7D38"
      height="100%"
      width="200px"
      expand-on-hover
    >
      <v-list dense nav rounded>
        <v-list-item
          v-for="(item, index) in 100"
          :key="item"
          :class="$vuetify.breakpoint.xs ? '' : 'mt-3'"
        >
          <v-list-item-icon>
            <v-avatar color="#89b577" size="24" style="color: #fff">
              {{ index + 1 }}
            </v-avatar>
            <!-- <v-icon color="#ffffff">
              {{ item.icon }}
            </v-icon> -->
          </v-list-item-icon>
          <v-list-item-title style="color: #fff" class="font-weight-bold">
            テンプレート{{ index + 1 }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- <template #append>
        <v-list dense nav rounded>
          <v-list-item
            v-if="$vuetify.breakpoint.xs"
            color="#ffffff"
            @click.stop="drawer = false"
          >
            <v-list-item-icon>
              <v-icon color="#ffffff">mdi-backspace-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>メニューを閉じる</v-list-item-title>
          </v-list-item>
        </v-list>
      </template> -->
    </v-navigation-drawer>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    badge: false,
    drawer: false,
    pages: [
      {
        title: 'テンプレート',
        icon: 'mdi-home',
        path: '/'
      },
      {
        title: 'テンプレート',
        icon: 'mdi-cog-outline',
        path: '/setting'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.bg {
  color: #fff;
  background-color: #dee06d;
}

.font_color {
  color: #fff;
}
</style>
