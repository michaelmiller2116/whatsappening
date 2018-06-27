<template>
  <div id="app">
    <Header :eventData="eventArr" :categories="categories" />
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
    categories: ['Family Fun', 'Food & Drink', 'Active'],
  }),
  async mounted () {
    this.eventArr = await API.getEvents();
  },
};
</script>

<style scoped>

</style>

