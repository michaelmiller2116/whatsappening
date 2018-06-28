<template>
    <div>
        <label>
            AutoComplete
            <GmapAutocomplete @place_changed="setPlace">
            </GmapAutocomplete>
            <button @click="usePlace">Add</button>
        </label>
        <br>
        <GmapMap style="width: 600px; height: 300px;" :zoom="13" :center="{lat:39.7392, lng:-104.9903}">
        <GmapMarker v-for="(marker, index) in markers"
            :key="index"
            :position="marker.position"
            />
        <GmapMarker
            v-if="this.place"
            label="★"
            :position="{
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
            }"
            />
        </GmapMap>
    </div>
</template>

<script>
export default {
    data() {
        return {
        markers: [],
        place: null,
        }
    },
    description: 'Autocomplete Example (#164)',
    methods: {
        setDescription(description) {
        this.description = description;
        },
    }
}
</script>