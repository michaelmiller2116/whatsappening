<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn @click="test()" slot="activator" color="primary" dark>Edit</v-btn>
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
                  <v-text-field v-model="event.location" label="Location" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="event.date" label="Date of Event" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="event.time" label="Time" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6s md6>
                  <v-text-field v-model="event.email" label="Email" required></v-text-field>
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
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {

    props: ["event"],

    data: () => ({
      dialog: false,
      body: {
        title: "",
        category: "",
        date:"",
        time: "",
        location: "",
        email: "",
        description: "",
        imageURL: "",
      }
    }),
    
    methods: {
      test() {
            console.log(this.event);
            
        }
    }
  }
</script>


