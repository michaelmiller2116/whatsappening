<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="primary" dark>Edit</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Edit event</span>
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
              <v-flex xs12 sm6 md4>
                  <v-text-field v-model="body.location" label="Location" required></v-text-field>
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
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
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
    })
  }
</script>


