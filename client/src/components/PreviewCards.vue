<template>
    <div data-app="true">
        <div :ref="event" id="preview-card" class="col s12 m7">
            <div class="card horizontal">
            <div class="card-image">
                <img :src="event.imageURL">
            </div>
            <div class="card-stacked">
                <div class="card-content" @click="dialog3 = true, displaySelectedModal(), toggleInfoWindow(event)">
                <h5 class="header">{{ event.title }}</h5>
                <p>{{ event.location.name }}</p>
                <p>{{ event.location.formatted_address }}</p>
                <p>{{ event.location.formatted_phone_number }}</p>
                <a 
                href="https://maps.google.com/?q=1701+Bryant+St,+Denver,+CO+80204,+USA&ftid=0x876c78baa82ea2b5:0xb08dbf533f1158f9">
                Directions
                </a>
                </div>
                <div class="card-action">
                    <EditEventForm :event="event" />
                    <v-btn color="warning" dark @click="deleteEvent(event)">Delete</v-btn>
                </div>
            </div>
            </div>
        </div>
        <v-layout row justify-center>
            <v-dialog v-model="dialog3" max-width="60%">
                <v-card>
                    <v-card-title class="card-content">
                    <div class="image-container">
                        <img class="modal-image" :src="selectedEvent.imageURL">
                    </div>
                    <h1>{{ selectedEvent.title }}</h1>
                    <strong>{{ selectedEvent.date }}</strong>
                    <v-spacer></v-spacer>
                    <p>Here</p>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <strong>{{ selectedEvent.description }}</strong>
                    <p>Contact Establishment: {{ selectedEvent.email }}</p>
                    <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-actions>
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

</style>