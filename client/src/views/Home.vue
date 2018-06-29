<template>
  <div id="main-container">
    <div class="map-container">
      <h4>Events Near You</h4>
      <gmap-map style="width: 65vw; height: 75vh" :zoom="11" :center="{lat:39.7392, lng:-104.9903}">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </gmap-info-window>

      <gmap-marker :key="i" v-for="(m,i) in eventArr" :position="m.location.geometry.location" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
    </gmap-map>
    </div>
      <div>
      </div>    
    <div class="cards-container">
      <div id="event-section">
        <AddEventForm :eventArr="eventArr" :getEvents="getEvents" />
      </div>
      <PreviewCards :getEvents="getEvents"  :toggleInfoWindow="toggleInfoWindow" :event="event" :key="event.id" v-for="event in eventArr"/>
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
      infoContent: "",
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    }
  },

  mounted: function () {
    this.getEvents () 
  }, 

  methods: {
    // beforeMount() {
    //   this.getEvents()
    // }, 

    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.location.geometry.location;
      this.infoContent = marker.title;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
}
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

