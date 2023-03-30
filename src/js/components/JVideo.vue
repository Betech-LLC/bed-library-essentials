<template>
    <JClientOnly>
        <vue-plyr v-if="renderComponent" @ready="onPlayerReady" :options="playerOptions" :id="randomId" ref="player">
            <div v-if="checkIsVideo(src)" class="plyr__video-embed">
                <iframe
                    class="w-full h-auto"
                    :src="getLinkVideo(src)"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                    autoplay="false"
                ></iframe>
            </div>

            <video v-else :id="randomId" v-bind="{ ...$attrs }">
                <source :src="src" type="video/mp4" />
            </video>
        </vue-plyr>
    </JClientOnly>
</template>
<script>
// Cài package vue-plyr: yarn add vue-plyr

import JClientOnly from '@core/components/JClientOnly.vue'
import { getLinkVideo, checkIsVideo } from '@core/utils'

const defaultOptions = {
    autoplay: true,
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
}

export default {
    components: {
        JClientOnly,
    },
    props: {
        src: {
            type: String,
            required: true,
        },
        options: {
            type: Object,
            default: () => defaultOptions,
        },
        isPlay: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            playing: this.isPlay,
            playerOptions: { ...defaultOptions, ...this.options },
            randomId: 'id-' + Math.random().toString(36).substr(2, 9).toLowerCase(),
            renderComponent: true,
        }
    },

    watch: {
        src() {
            const element = document.getElementById(this.randomId)
            element.remove()

            this.forceRerender()
        },

        isPlay(value) {
            if (!value) this.pause()
        },
    },

    methods: {
        checkIsVideo,
        getLinkVideo,

        play() {
            this.$refs.player?.player.play()
        },
        pause() {
            this.$refs.player?.player.pause()
        },
        toggle() {
            this.playing ? this.pause() : this.play()
        },

        async forceRerender() {
            // Remove MyComponent from the DOM
            this.renderComponent = false

            // Wait for the change to get flushed to the DOM
            await this.$nextTick()

            // Add the component back in
            this.renderComponent = true
        },

        onPlayerReady() {
            this.$refs.player.player.on('playing', (event) => {
                this.playing = event.detail.plyr.playing
                this.$emit('change', event.detail.plyr.playing)
            })
            this.$refs.player.player.on('pause', (event) => {
                this.playing = event.detail.plyr.playing
                this.$emit('change', event.detail.plyr.playing)
            })
        },
    },
}
</script>
<style>
.plyr__video-embed {
    @apply m-auto w-full aspect-w-16 aspect-h-9;
}
</style>
