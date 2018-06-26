<template>
  <div>
  <div class="home">
    
    <Map />
  </div>
  <div class="cards">
    <PreviewCards :event="event" :key="event.id" v-for="event in eventData"/>
  </div>
  </div>
</template>

<script>
import Map from '@/components/Map';
import PreviewCards from '@/components/PreviewCards';

export default {
  name: 'home',
  components: {
    Map,
    PreviewCards,
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
.image-container {
  text-align: center;
  width: 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start ! important;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 1000px; 
}
</style>

