<template>
  <div id="app">
    <Header />
      <div id="button-container" class="center">
        <a class="waves-effect waves-light orange darken-2 btn">Food &amp; Drink</a>
        <a class="waves-effect waves-light green darken-1 btn">Active</a>
      </div>
    <router-view :eventData="eventArr"/>
  </div>
</template>

<script>
import API from '@/API.js';
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  data: () => ({
    eventArr: [],
  }),
  async mounted () {
    this.eventArr = await API.getEvents();
  },
};
</script>

<style scoped>
#button-container {
  margin-top: 20px;
}
</style>
