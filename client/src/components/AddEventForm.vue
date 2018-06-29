<template>
    <div class='new-event-form' data-app="true">
        <GmapMap style="width: 600px; height: 300px;" :zoom="12" :center="{lat:39.7392, lng:-104.9903}">
                <!-- <GmapMarker v-for="(event, index) in eventArr"
                    :key="index"
                    :position="event.pins[0].position"
                    /> -->
                    <!-- v-if="this.place" -->
                <!-- <GmapMarker
                    v-for="(event, index) in eventArr"
                    :key="index"
                    label="★"
                    :position="event.pins[index].position"
                    /> -->
                <!-- <GmapMarker v-for="(marker, index) in markers"
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
                    /> -->
        </GmapMap>
        <v-layout row justify-left>
            <v-dialog v-model="dialog" persistent max-width="500px" >
            <v-btn slot="activator" color="primary" dark>Add a new event</v-btn>
            <v-card>
                <v-card-title>
                <span class="headline">New Event</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                    <v-flex xs12>
                        <v-text-field v-model="body.title" label="Event Title" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field v-model="body.category" label="Category" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4 v-model="body.location">
                        Location
                        <GmapAutocomplete
                         @place_changed="setPlace">
                        </GmapAutocomplete>
                        <!-- <button @click="usePlace, setPlace">Confirm Location</button> -->
                    </v-flex>
                    <!-- <v-flex xs12 sm6 md4>
                        <v-text-field v-model="body.location" label="Location" required></v-text-field>
                    </v-flex> -->
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="body.date" label="Date of Event" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="body.time" label="Time" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6s md6>
                        <v-text-field v-model="body.email" label="Email" required></v-text-field>
                    </v-flex>
                    </v-layout>
                    <v-flex xs12>
                        <v-text-field v-model="body.description" label="Description"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field v-model="body.imageURL" label="Image URL"></v-text-field>
                    </v-flex>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn @click="setPlace, postEvent(body)" color="blue darken-1" flat @click.native="dialog = false" >Create Event</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
import API from '../API'

    export default {
        props: ['getEvents', 'eventArr'],
        data: () => ({
            dialog: false,
            markers: [],
            place: null,
            body: {
                title: "",
                category: "",
                date:"",
                time: "",
                location: {},
                pins: [],
                description: "",
                imageURL: "",
            }
        }),
        description: 'Autocomplete Example (#164)',
        methods: {
            resetBody() {
                this.body = {
                    title: "",
                    category: "",
                    date:"",
                    time: "",
                    location: {},
                    pins: [],
                    description: "",
                    imageURL: "",
                }
            },
            postEvent(obj) {
                console.log(this.body);
                return fetch((API.API_URL), {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                'content-type': 'application/json',
                },
                }).then(this.resetBody(), this.getEvents())
            },
            setDescription(description) {
                this.description = description;
            },
            setPlace(place) {
                this.place = place
                this.body.location = this.place
                this.markers.push({
                    position: {
                        lat: this.place.geometry.location.lat(),
                        lng: this.place.geometry.location.lng(),
                    }
                    })
                this.body.pins = this.markers
            },
            // usePlace(place) {
            //     console.log('1');
                
            //     if (this.place) {
            //         this.markers.push({
            //         position: {
            //             lat: this.place.geometry.location.lat(),
            //             lng: this.place.geometry.location.lng(),
            //         }
            //         })
            //         // this.place = null;
            //     }
            //         // this.body.pins = ['hello']
            // },
        },
    }
</script>

<style>
    .new-event-form {
        margin-bottom: -8vh;
    }
</style>