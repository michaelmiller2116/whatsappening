<template>
  <div id="app">
    <Header />
<<<<<<< Updated upstream
    <router-view :eventData="eventArr"/>
=======
      <div id="button-container" class="center">
        <a v-on:click="getEvents()" class="waves-effect waves-light orange darken-2 btn">Food &amp; Drink</a>
        <a v-on:click="getEvents()" class="waves-effect waves-light green darken-1 btn">Active</a>
      </div>
    <router-view/>
>>>>>>> Stashed changes
  </div>
</template>

<script>
import API from '@/API.js';
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
<<<<<<< Updated upstream
  data: () => ({
    eventArr: [],
  }),
  async mounted () {
    this.eventArr = await API.getEvents();
  },
};
=======

  methods: {
    getEvents() {
      fetch('https://whatsappening-server.herokuapp.com/events')
        .then(response => response.json())
        .then(response => console.log(response))
    }
  }
}


>>>>>>> Stashed changes
</script>

<style scoped>

</style>

