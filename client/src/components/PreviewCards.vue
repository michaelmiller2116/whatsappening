<template>
    <div>
        <div :ref="event" id="preview-card" class="col s12 m7">
            <div class="card horizontal">
            <div class="card-image">
                <img :src="event.imageURL">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <h5 class="header">{{event.title}}</h5>
                <p>{{event.location}}</p>
                <p>{{event.date}}</p>
                </div>
                <div class="card-action">
                <v-btn color="primary" dark @click.stop="dialog3 = true, getEventById()">Details</v-btn>
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
                <strong>{{ selectedEvent.location }}</strong>
                <v-spacer></v-spacer>
                <p>Here</p>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <strong>{{ selectedEvent.description }}</strong>
                <p>Contact Establishment: {{ selectedEvent.email }}</p>
                <v-spacer></v-spacer>
                </v-card-title>
                <v-card-actions>
                <v-btn color="black" flat @click.stop="dialog3=false">Close</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>
    </div>

</template>

<script>
import API from '@/API.js';

export default {
    props: ["event"],
    data () {
        return {
            dialog3: false,
            selectedEvent: Object,
        }
    },
    methods: {
        getEventById() {
            this.selectedEvent = this.event
        }
    },
};
    
</script>

<style>

    #preview-card {
        width: 350px;
        height: 150px;
        margin: 20px;
    }

    #preview-card img {
        width: 150px;
        height: 165px;
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