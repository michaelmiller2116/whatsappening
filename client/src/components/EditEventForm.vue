<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="blue" dark>Edit</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Event</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
              <v-flex xs12>
                  <v-text-field v-model="event.title" label="Event Title" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                  <v-text-field v-model="event.category" label="Category" required></v-text-field>
              </v-flex>
             <v-flex xs12 sm6 md4>
                  Location*
                  <GmapAutocomplete v-model="event.location.name"
                      @place_changed="setPlace">
                  </GmapAutocomplete>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="event.date" label="Date of Event" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="event.time" label="Time" required></v-text-field>
              </v-flex>
              </v-layout>
              <v-flex xs12>
                  <v-text-field v-model="event.description" label="Description"></v-text-field>
              </v-flex>
              <v-flex xs12>
                  <v-text-field v-model="event.imageURL" label="Image URL"></v-text-field>
              </v-flex>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn @click="putEvent(event), getEvents()" color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import API from '../API.js';
  export default {

    props: ['event', 'getEvents'],

    data: () => ({
      dialog: false,
      markers: [],
      place: null,
    }),
    methods: {
      putEvent(obj) {
        obj.email = "N/A"
        return fetch((`${API.API_URL}/${this.event._id}`), {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
        'content-type': 'application/json',
        },
        }).then(this.getEvents())
      },
      setPlace(place) {
          this.place = place
          this.event.location = this.place
          this.markers.push({
              position: {
                  lat: this.place.geometry.location.lat(),
                  lng: this.place.geometry.location.lng(),
              }
              })
          this.event.pins = this.markers
      },
    },
  }
</script>


