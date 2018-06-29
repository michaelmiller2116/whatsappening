<template>
  <div id="main-container">
    <div class="map-container">
      <!-- <Map /> -->
      <!-- <GmapMap
        :center="{ lat:39.7392, lng:-104.9903 }"
        :zoom="13"
        map-type-id="roadmap"
        style="width: 65vw; height: 75vh"
      > -->
      <!-- <gmap-circle
        v-if="displayCircle"
        :bounds="circleBounds" 
        :center="reportedCenter"
        :radius="100000"
        :options="{editable: true}"
        @radius_changed="updateCircle('radius', $event)"
        @bounds_changed="updateCircle('bounds', $event)">
      </gmap-circle> -->
        <!-- <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap> -->
    </div>
      <div>
      <!-- <LocationAutoComplete /> -->
      </div>    
      <div>
        <h4 style="text-align: center">Your Area</h4>
        <AddEventForm :eventArr="eventArr" :getEvents="getEvents" />
      </div>
    <div class="cards-container">
      <div id="event-section">
        <h4>Events Near You</h4>
      </div>
      <PreviewCards :getEvents="getEvents" :event="event" :key="event.id" v-for="event in eventArr"/>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map';
import PreviewCards from '@/components/PreviewCards';
import AddEventForm from '@/components/AddEventForm';
// import LocationAutoComplete from '@/components/LocationAutoComplete';
import API from '../API.js';

export default {
  name: 'home',
  components: {
    Map,
    PreviewCards,
    AddEventForm,
    // LocationAutoComplete,
  },
  props: ['getEvents', 'eventArr'],
  data () {
    return {
      dialog3: false,
      markers: [
        {
          position: { lat: 39.7577, lng: -105.0070},
        }
      ]
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
}
</style>

