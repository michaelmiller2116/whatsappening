<template>
    <div class='new-event-form' data-app="true">
        <v-layout row justify-left>
            <v-dialog v-model="dialog" persistent max-width="500px" >
            <v-btn slot="activator" color="green darken-1" dark>Add a new event</v-btn>
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
                        Location*
                        <GmapAutocomplete
                            @place_changed="setPlace">
                        </GmapAutocomplete>
                    </v-flex>
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
                        <v-text-field v-model="body.description" label="Description" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field v-model="body.imageURL" label="Image URL" required></v-text-field>
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
                }).then(console.log(obj), this.resetBody(), this.getEvents())
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
        },
    }
</script>

<style>
    .new-event-form {
        margin-bottom: -8vh;
    }
</style>