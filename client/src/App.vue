<template>
  <div id="app">
    <Header />
    <router-view :eventData="eventArr"/>
  </div>
</template>

<script>
import API from '@/lib/API.js';
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

</style>

