/* vim: set softtabstop=2 shiftwidth=2 expandtab : */

<template>
  <div>
    <h1>yo</h1>
    <GmapMap style="width: 65vw; height: 75vh" :zoom="12" :center="{lat:39.7392, lng:-104.9903}">
      <GmapMarker v-for="(event, index) in eventArr"
      :key="index"
      :position="event.location.geometry.location"
      />
    </GmapMap>
    <div ref="flyaway"> <!-- so named because it will fly away to another component -->
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default (function (x) { return x.default || x })(require('/Users/t/whatsappening/client/node_modules/vue2-google-maps/src/components/infoWindowImpl.js'))
</script>
