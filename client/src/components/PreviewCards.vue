<template>
    <div data-app="true">
        <div :ref="event" id="preview-card" class="col s12 m7">
            <v-card>
                <div @click="dialog3 = true, displaySelectedModal(), toggleInfoWindow(event)">
                    <v-card-media :src="event.imageURL" height="200px"></v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ event.title }}</h3>
                        <div>{{`${event.date} @ ${event.time}`}}</div>
                        <div>{{ event.location.name }}</div>
                        <a :href="event.location.url" target="_blank">Map It</a>
                    </div>
                    </v-card-title>
                </div>
                <v-card-actions class="card-action">
                    <EditEventForm :getEvents="getEvents" :event="event" />
                    <v-btn color="red" dark @click="deleteEvent(event)">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <v-layout row justify-center>
            <v-dialog v-model="dialog3" max-width="60%">
                <v-card>
                    <v-card-title class="card-content">
                    <div class="image-container">
                        <img class="modal-image" :src="selectedEvent.imageURL">
                    </div>
                    <h3>{{ event.title }}</h3>
                    <strong>{{`${event.date} @ ${event.time}`}}</strong>
                    <h6>{{ selectedEvent.description }}</h6>
                    <h6>{{ event.location.name}}</h6>
                    <a :href="event.location.url" target="_blank">
                        <div>{{ event.location.formatted_address }}</div>
                    </a>
                    <div>{{ event.location.formatted_phone_number }}</div>
                    <br>
                    <p>Posted By: Fion Wan <small>(⭐ Denver user)</small></p>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-actions class="close-card">
                        <v-btn color="black" flat @click="dialog3=false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
import API from '../API.js';
import EditEventForm from './EditEventForm'

export default {
    props: ['event', 'getEvents', 'toggleInfoWindow'],
    data () {
        return {
            dialog3: false,
            selectedEvent: Object,
            upvotes: Array,
        }
    },

    components: {
        EditEventForm,
    },

    methods: {
        displaySelectedModal() {
            this.selectedEvent = this.event
        },
        deleteEvent(obj) {
            return fetch((`${API.API_URL}/${obj._id}`), {
                method: 'DELETE',
                body: JSON.stringify(obj),
                headers: {
                'content-type': 'application/json',
                },
            }).then(this.getEvents())
        },
    },
};
    
</script>

<style>

    #preview-card {
        margin-top: 70px;
        margin-bottom: -70px;
    }
    #preview-card:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    #main-container > div.cards-container > div {
        width: 80%;
    }

    #preview-card img {
        width: 150px;
        height: 165px;
    }
    #preview-card h3 {
        margin-top: 0;
    }
    .card-action {
        display: flex;
    }

    .image-container {
        text-align: center;
        width: 100%;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start ! important;
    }

    .modal-image {
        width: 500px;
        height: 300px;
    }

    .close-card {
        display: flex;
        flex-direction: row-reverse;
    }

</style>