<template>
  <div id="main-container">
    <div class="map-container">
      <Map />
    </div>
    <div>
      <AddEventForm />
    </div>
    <div class="cards-container">
      <h4>Events Near You</h4>
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
}
</style>

