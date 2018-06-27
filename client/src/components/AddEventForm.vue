<template>
    <div class='new-event-form' data-app="true">
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
                            <v-text-field v-model="body.EventTitle" label="Event Title" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-model="body.Category" label="Category" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="body.Location" label="Location" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="body.EventDate" label="Date of Event" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="body.Time" label="Time" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="body.Name" label="Name" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6s md6>
                            <v-text-field v-model="body.Email" label="Email" required></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-flex xs12>
                            <v-text-field v-model="body.Description" label="Description"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-model="body.ImageURL" label="Image URL"></v-text-field>
                        </v-flex>
                    </v-container>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false" >Create Event</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-layout>
    </div>
</template>

<script>

// import API from '../API'

    export default {
        data: () => ({
            dialog: false,
            body: {
                EventTitle: "",
                Category: "",
                EventDate:"",
                Time: "",
                Location: "",
                Name: "",
                Email: "",
                Description: "",
                ImageURL: "",
            }
        })
    }
</script>

<style>
    .new-event-form {
        margin-bottom: -8vh;
    }
</style>