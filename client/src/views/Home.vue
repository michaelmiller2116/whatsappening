<template>
  <div>
  <div class="home">
    <Map />
  </div>
  <div>
    <PreviewCards />
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
}
</script>
