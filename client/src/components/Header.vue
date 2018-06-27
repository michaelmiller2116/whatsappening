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
          v-for="i in 3"
          :key="i"
          :href="`#tab-${i}`"
        >
          Item {{ i }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <!-- <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :id="`tab-${i}`"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  </div>
  <!-- <nav>
    <div class="nav-wrapper indigo">
      <a href="#" class="brand-logo left">What's Appening</a>
    <div id="button-container" class="right">
      <a class="waves-effect waves-light orange darken-2 btn">Food &amp; Drink</a>
      <a class="waves-effect waves-light green darken-1 btn">Active</a>
      <v-btn fab dark color="teal">
        <v-icon dark>add</v-icon>
      </v-btn>
    </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  data () {
    return {
      model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
};
</script>

<style scoped>
  .nav-wrapper {
    padding-left: 10px;
  }
</style>