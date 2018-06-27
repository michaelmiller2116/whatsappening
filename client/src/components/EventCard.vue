<template>
  <v-layout row wrap>
      <v-card class="v-card" width="350px">
        <v-card-media :src="event.imageURL" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ event.title }}</h3>
            <strong>{{ event.date.substr(0,10) }}</strong>
            <div>{{ event.location }}</div>
          </div>
        </v-card-title>
        <v-card-text>
          <p>{{ event.description }}</p>
        </v-card-text>
        <v-card-actions v-bind:class="{ hidden: !editBool }">
          <v-btn flat color="orange">Update</v-btn>
          <v-btn flat color="orange">Delete</v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>

<script>
  export default {
    props: ['event', 'editBool'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.v-card {
  margin-top: 20px;
}
 .v-card:hover {
  transform: scale(1.07);
  cursor: pointer;
 }
 .hidden {
   display: none;
 }
</style>