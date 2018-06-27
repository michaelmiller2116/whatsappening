<template>
  <div id="app">
    <Header />
    <router-view :getEvents="getEvents" :eventArr="eventArr"/>
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
  methods: {
    getEvents() {
      fetch((API.API_URL), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
        .then(res => res.json())
        .then((data) => {
          this.eventArr = data;
          this.eventArr.reverse()
        });
    },
  },
};
</script>

<style scoped>

</style>

