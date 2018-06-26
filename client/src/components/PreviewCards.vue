<template>
    <!-- <div>
        <h5>{{event.title}}</h5>
    </div> -->
    <div id="cards">
        <div id="preview-card" class="col s12 m7">
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
                <a href="#">Details</a>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["event"],
    }
    
</script>

<style>

    #preview-card {
        width: 350px;
        height: 150px;
    }

    #preview-card img {
        width: 150px;
        height: 165px;
    }

</style>