<template>
    <div id="service-screen">
        <div class="service columns">
            <div class="header column">
                <div class="title">{{ this.content.title }}</div>
                <div class="subtitle">{{ this.content.subtitle }}</div>
            </div>
            <div class="info column">
                <img :src="this.content.mainPic" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="sass">

.service
    padding: 2em

</style>


<script>
import _ from 'lodash'
import Vue from 'vue'

export default {
    data() {
        return {
           contentDict: {
               dj: {
                   pageID: 'dj',
                   title: 'Disc Jockeys and MCs', 
                   subtitle: "It's what we do best!",
                   mainPic: 'http://placekitten.com/g/1920/1080',
                   pics: []
               },
               planning: {
                   pageID: 'planning',
                   title: 'Event Planning', 
                   subtitle: "Make your event awesome",
                   mainPic: 'http://placekitten.com/g/1920/1080',
                   pics: []
               }, 
               weddings: {
                   pageID: 'weddings',
                   title: 'Weddings', 
                   subtitle: "Make your event awesome",
                   mainPic: 'http://placekitten.com/g/1920/1080',
                   pics: []
               },
               movieNights: {
                   pageID: 'movie-nights',
                   title: 'Movie NIghts', 
                   subtitle: "Make your event awesome",
                   mainPic: 'http://placekitten.com/g/1920/1080',
                   pics: []
               }, 
               photoBooths: {
                   pageID: 'photo-booth',
                   title: 'Photo Booths', 
                   subtitle: "Make your event awesome",
                   mainPic: 'http://placekitten.com/g/1920/1080',
                   pics: []
               },
               addOns: {
                   pageID: 'add-ons',
                   title: 'Add-Ons', 
                   subtitle: "Make your event awesome",
                   mainPic: 'http://placekitten.com/g/1920/1080',
                   pics: []
               }
           },
           service: '',
            content: null

        }
    }, 
    created() {
        this.service = this.$route.params.service
        this.content = this.refreshService()
    },
    methods: {
        refreshService() {
            console.log('refreshing service!')
            let contentKey = _.find(Object.keys(this.contentDict), (obj) => {
                return this.contentDict[obj].pageID == this.service
            });

            return this.contentDict[contentKey];
        }
    },
    watch: {
        '$route.params.service': function(newService) {
            this.content = this.refreshService();
            Vue.set(this.content, 'title', this.content.title)
        }
    }
}    
</script>

