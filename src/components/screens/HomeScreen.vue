<template>
    <div>
        <div class="image-gallery">
            <img src="images/dj.jpg" alt="">
        </div>
        <section class="section">
            <div class="columns">
                <div class="column">
                    <h1 class="title">
                        South Florida's Premiere DJ and Events Service
                    </h1>
                    We are That Awesome Entertainment Company, your one-stop source for sound. Whether it's a birthday party or
                    a corporate event, That Awesome Entertainment Company is there to bring fresh beats and music to your event.
                    <br>
                    <br>
                    <a class="button is-large">Call Us Now</a>

                </div>
                <div class="column">
                    <img src="http://placekitten.com/g/600/400" alt="">
                </div>
            </div>
        </section>

        <!-- That Awesome Difference -->
        <section class="section">
            <h1 class="section-title title has-text-centered is-size-1">That Awesome Difference</h1>
            <br>
            <div class="columns">
                <div class="icons column has-text-centered">
                    <img src="images/icons/beats.svg" width="40%">
                    <h1 class="title">Always Fresh</h1>
                    <div class="description is-size-5">
                        We keep our library up to date with the latest <span class="awesome">awesome</span> music
                    </div>
                </div>
                <div class="icons column has-text-centered">
                    <img src="images/icons/tap.svg" alt="" width="40%">
                    <h1 class="title">Personal Touch</h1>
                    <div class="description is-size-5">
                        We personally work with you from the beginning 
                        to make your event <span class="awesome">awesome</span>
                    </div>
                </div>
                <div class="icons column has-text-centered">
                    <img src="images/icons/microphone.svg" alt="" width="40%">
                    <h1 class="title">More than a DJ</h1>
                    <div class="description is-size-5">
                        Event Planning. Movie Nights. Photo Booths. 
                        Whatever <span class="awesome">awesome</span> thing you need we've got you covered!
                    </div>
                </div>
            </div>
        </section>

        <!-- Events -->
        <section class="section">
            <h1 class="section-title title has-text-centered is-size-1">Any event. Big or small.</h1>
            <div class="columns">
                <div class="icons column has-text-centered">
                    <img src="images/icons/rings.svg" width="40%">
                    <h1 class="title">Weddings</h1>
                </div>
                <div class="icons column has-text-centered">
                    <img src="images/icons/star.svg" alt="" width="40%">
                    <h1 class="title">Coming-Of-Age</h1>
                </div>
                <div class="icons column has-text-centered">
                    <img src="images/icons/cake.svg" alt="" width="40%">
                    <h1 class="title">Birthday Parties</h1>
                </div>
                <div class="icons column has-text-centered">
                    <img src="images/icons/briefcase.svg" alt="" width="40%">
                    <h1 class="title">Corporate Events</h1>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="ready section has-text-centered">
            <h1 class="title">Ready to get started?</h1>
            <a href="#" class="button is-large is-inverted">Call Us Now!</a>
        </section>

        <!-- That Awesome Tech -->
        <section class="section">
            <h1 class="section-title title has-text-centered">That Awesome Tech</h1>
            <h2 class="subtitle has-text-centered">We get it. Your event needs to be different. Let's make it <span class="awesome">awesome</span>.</h2>
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">TextRequest</h1>
                        <h2 class="subtitle">Give your guests the power to request</h2>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section class="section">
            <h1 class="section-title title">Let's Talk</h1>
            <div class="columns">
                <div class="column">
                    
                </div>
                <div class="column">
                    <strong>That Awesome Entertainment Company</strong><br>
                    101 Margate St<br>
                    Margate, FL 33156
                    <br><br>
                    (561) 685-0749<br>
                    <a href="mailto:that.awesome.co@gmail.com" style="color: #f6881f">that.awesome.co@gmail.com</a>
                </div>
            </div>
        </section>

    </div>
    
</template>

<script>

export default {
    components: {  },
    data() {
        return {

        }
    }
}
</script>

<style lang="sass">

/* Sections */
.section-title
    padding: 1em 0
    color: #f6881f

/* Icons */
.icons
    margin: 0 1em
.icons .description
    padding: 0 2em
.icons img
    border: 5px solid #000
    border-radius: 30%
    padding: 1em

/* Ready */
.ready.section 
    padding: 5em 0
    background: url(/images/dj2.jpg)
    background-position: center
</style>

<script>
    
</script>
