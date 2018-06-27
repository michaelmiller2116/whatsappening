<template>
  <div id="main-container">
    <div class="map-container">
      <!-- <Map /> -->
      <GmapMap
        :center="{lat:39.7392, lng:-104.9903}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
      <gmap-circle
        v-if="displayCircle"
        :bounds="circleBounds" 
        :center="reportedCenter"
        :radius="100000"
        :options="{editable: true}"
        @radius_changed="updateCircle('radius', $event)"
        @bounds_changed="updateCircle('bounds', $event)">
      </gmap-circle>
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
    </div>
    <div class="cards-container">
      <h4>Events Near You</h4>
      <AddEventForm />
      <PreviewCards :event="event" :key="event.id" v-for="event in eventData"/>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map';
import PreviewCards from '@/components/PreviewCards';
import AddEventForm from '@/components/AddEventForm';


export default {
  name: 'home',
  components: {
    Map,
    PreviewCards,
    AddEventForm,
  },
  props: ['eventData'],
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
};
</script>

<style>

#main-container {
  width: 90%;
  display: flex;
}
.map-container {
  margin-left: 3vh;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start ! important;
}

.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-right: -17vh;
}
</style>

