<template>
  <div>
    <Map />
    <div>
      <v-tooltip bottom>
        <v-btn slot="activator" class="right" color="white" fab dark>
          <v-icon @click="editBool=!editBool">edit</v-icon>
          <span>Edit Events</span>
        </v-btn>
      </v-tooltip>
    </div>
    <div class="event-container">
      <EventCard editBool="editBool" :key="event.id" v-for="event in eventData" :event="event" />
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map';
import EventCard from '@/components/EventCard';

export default {
  props: ['eventData'],
  components: {
    Map,
    EventCard,
  },
  data: () => ({
    editBool: false,
  }),
};
</script>

<style scoped>
  .event-container {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>