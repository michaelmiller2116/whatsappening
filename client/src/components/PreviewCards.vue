<template>
    <div data-app="true">
        <div @click="dialog3 = true, displaySelectedModal()" :ref="event" id="preview-card" class="col s12 m7">
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
                    <EditEventForm />
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

import EditEventForm from './EditEventForm'

export default {
    props: ['event', 'deleteEvent'],
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
    },
};
    
</script>

<style>

    #preview-card {
        width: 500px;
        height: 150px;
        margin: 20px;
        margin-top: 70px;
    }
    #preview-card:hover {
        transform: scale(1.1);
        cursor: pointer;
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