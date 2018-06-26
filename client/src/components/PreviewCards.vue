<template>
    <div class="cards">
        <div id="preview-card" class="col s12 m7">
            <h5 class="header">Volleyball at Wash Park</h5>
            <div class="card horizontal">
            <div class="card-image">
                <img src="https://perryandco.files.wordpress.com/2011/12/washington_park_denver_sign.jpg?w=1000">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>Where: Wash Park</p>
                <p>When: 3:00pm </p>
                </div>
                <div class="card-action">
                <a href="#">Details</a>
                </div>
            </div>
            </div>
        </div>
        <div id="preview-card" class="col s12 m7">
            <h5 class="header">Beer Party</h5>
            <div class="card horizontal">
            <div class="card-image">
                <img src="http://denverbeerco.com/wp-content/uploads/2014/10/taproom2.jpg">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>Where: Denver Beer Co</p>
                <p>When: 6:00pm </p>
                </div>
                <div class="card-action">
                <a href="#">Details</a>
                </div>
            </div>
            </div>
        </div>
        <div id="preview-card" class="col s12 m7">
            <h5 class="header">What's Appening Board Meeting</h5>
            <div class="card horizontal">
            <div class="card-image">
                <img src="https://static1.squarespace.com/static/52292291e4b046b16fdae37c/55660a0ee4b0b59322205433/55660a21e4b07094a8013bb2/1432750626073/1N5A5494_SquareSpace_porfolio.jpg">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>Where: Galvanize, Inc.</p>
                <p>When: 5:00pm </p>
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
        
    }
</script>

<style>

    .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    #preview-card {
        width: 350px;
        height: 150px;
    }

    #preview-card img {
        width: 150px;
        height: 165px;
    }

</style>