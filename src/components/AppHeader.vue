<template>
    <div>
        <div class="ss level">
            <div class="level-left"></div>
            <div class="level-right">
                <p class="level-item">
                    <span class="icon"><i class="fa fa-phone"></i></span> (561) 685-0749
                </p>
                <p class="level-item">
                    <span class="icon"><i class="fa fa-envelope"></i></span> info@thatawesome.co
                </p>
            </div>
        </div>
        <div class="header level">
            <div class="level-left">
                <div class="level-item">
                    <img src="images/logo.png" alt="That Awesome Entertainment Company">
                </div>
            </div>
            <div class="level-right">
                <nav class="navbar is-size-5" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <div class="navbar-burger burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-end">
                            <router-link to="/" class="navbar-item">Home</router-link>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <router-link to="/services" class="navbar-link">Services</router-link>
                                <div class="navbar-dropdown">
                                    <router-link to="/services/dj" class="navbar-item">Disc Jockeys and MCs</router-link>
                                    <router-link to="/services/planning" class="navbar-item">Event Planning</router-link>
                                    <router-link to="/services/weddings" class="navbar-item">Wedding Planning</router-link>
                                    <router-link to="/services/movie-nights" class="navbar-item">Movie Nights</router-link>
                                    <router-link to="/services/photo-booths" class="navbar-item">Photo Booths</router-link>
                                    <router-link to="/services/add-ons" class="navbar-item">Add-Ons</router-link>
                                </div>
                            </div>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <router-link to="/services" class="navbar-link">Events</router-link>
                                <div class="navbar-dropdown">
                                    <router-link to="/events" class="navbar-item">Corporate Events</router-link>
                                    <router-link to="/events" class="navbar-item">Coming-of-Age Parties</router-link>
                                </div>
                            </div>
                            <router-link to="/reviews" class="navbar-item">Reviews</router-link>
                            <router-link to="/contact" class="navbar-item">Contact Us</router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.ss 
    background: #db7c30
    color: #000
    padding: .25em 2em
.header
    border-bottom: #db7c30 solid 5px
    padding: 1.3em
    margin-bottom: 0px !important
</style>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>
