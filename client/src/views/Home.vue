<template>
  <div>
  <div class="home">
    <div>
    <v-layout row justify-center>
      
      <v-btn color="primary" dark @click.stop="dialog3 = true">Open Dialog 3</v-btn>
      
      <v-dialog v-model="dialog3" max-width="60%">
        <v-card>
          <v-card-title class="card-content">
            <div class="image-container">
              <img src="http://via.placeholder.com/500x300">
            </div>
            <h1>Title</h1>
            <strong>Location:</strong>
            <v-spacer></v-spacer>
            <p>Here is the location</p>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <strong>Description:</strong>
            <v-spacer></v-spacer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla cum ratione recusandae quae quam laborum molestiae autem fugiat provident totam praesentium dolorum commodi reiciendis possimus distinctio aspernatur deleniti voluptas magni, accusantium sint, dolor maxime sunt animi! Libero, ut eaque. Ex quo aliquid vel. Vero assumenda esse quasi temporibus a eos quos et, eligendi repellendus omnis quae fugiat earum aliquid ea blanditiis quibusdam quidem id sit fugit nulla! Tempora quaerat suscipit alias. Quae non numquam quasi adipisci modi, eaque aliquam deleniti id nobis exercitationem ratione iusto enim tempora corporis veniam, labore laboriosam nemo officiis consequuntur. Eligendi itaque temporibus alias sapiente?</p>
          </v-card-title>
          <v-card-actions>
            <v-btn color="black" flat @click.stop="dialog3=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
    <Map />
  </div>
  <div>
    <PreviewCards />
  </div>
  </div>
</template>

<script>
import Map from '@/components/Map';
import PreviewCards from '@/components/PreviewCards';

export default {
  name: 'home',
  components: {
    Map,
    PreviewCards,
  },
  data () {
    return {
      dialog3: false,
    }
  },
};
</script>

<style>
.image-container {
  text-align: center;
  width: 100%;
/* justify-content: center; */
/* justify-content: center; */
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start ! important;
}
</style>

