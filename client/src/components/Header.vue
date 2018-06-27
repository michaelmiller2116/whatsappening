<template>
  <div>
    <v-toolbar color="cyan" dark tabs>
      <v-toolbar-title class="white--text headline">What's Appenin'</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip left>
        <v-btn slot="activator" fab dark color="orange darken-3">
          <v-icon dark>add</v-icon>
          <span>Tooltip</span>
        </v-btn>
      </v-tooltip>
      <v-tabs
        slot="extension"
        v-model="model"
        centered
        color="cyan"
        slider-color="yellow"
      >
        <v-tab
          v-for="i in categories"
          :key="i"
          :href="`#tab-${i}`"
        >
          {{ i }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ['eventData', 'categories'],
  data () {
    return {
    }
  }
};
</script>

<style scoped>
  .nav-wrapper {
    padding-left: 10px;
  }
</style>