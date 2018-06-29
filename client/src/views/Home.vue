<template>
  <div id="main-container">
    <div class="map-container">
      <h4>Events Near You</h4>
      <GmapMap style="width: 65vw; height: 75vh" :zoom="12" :center="{lat:39.7392, lng:-104.9903}">
              <GmapMarker v-for="(event, index) in eventArr"
              :key="index"
              :position="event.location.geometry.location"
              />
      </GmapMap>
    </div>
      <div>
      </div>    
    <div class="cards-container">
      <div id="event-section">
        <AddEventForm :eventArr="eventArr" :getEvents="getEvents" />
      </div>
      <PreviewCards :getEvents="getEvents" :event="event" :key="event.id" v-for="event in eventArr"/>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map';
import PreviewCards from '@/components/PreviewCards';
import AddEventForm from '@/components/AddEventForm';
import API from '../API.js';

export default {
  name: 'home',
  components: {
    Map,
    PreviewCards,
    AddEventForm,
  },
  props: ['getEvents', 'eventArr'],
  data () {
    return {
      dialog3: false,
    }
  },
  beforeMount() {
    this.getEvents();
  },
  methods: {
  },
};
</script>

<style>

#main-container {
  width: 90%;
  display: flex;
}
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3vh;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start ! important;
}

.cards-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90vh;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-right: -17vh;
  overflow: auto;
  padding-top: 30px;
}
</style>

