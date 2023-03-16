<template>
    <div>
        <vue-plyr class="flex w-full h-full" :options="playerOptions" ref="player">
            <div v-if="checkIsVideo(src)" class="plyr__video-embed">
                <iframe :src="getLinkVideo(src)" allowfullscreen allowtransparency allow="autoplay"></iframe>
            </div>

            <video v-else :id="randomId" v-bind="{ ...$attrs }">
                <source :src="src" type="video/mp4" />
            </video>
        </vue-plyr>
        <!-- <HomeButtonPlayVideo @click="play()" v-show="!playAlwayHide && (playAlwayShow || !playing)" :uid="randomId" /> -->
    </div>
</template>
<script>
const defaultOptions = {
    autoplay: true,
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
}
export default {
    props: ['change'],
    props: {
        src: {
            type: String,
            required: true,
        },
        options: {
            type: Object,
            default: () => defaultOptions,
        },
        playAlwayShow: {
            type: Boolean,
            default: false,
        },
        playAlwayHide: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            playing: false,
            playerOptions: { ...defaultOptions, ...this.options },
            randomId: 'id-' + Math.random().toString(36).substr(2, 9).toLowerCase(),
        }
    },

    // mounted() {
    //     this.$refs.player.player.on('playing', (event) => {
    //         this.playing = event.detail.plyr.playing
    //         this.$emit('change', event.detail.plyr.playing)
    //     })
    //     this.$refs.player.player.on('pause', (event) => {
    //         this.playing = event.detail.plyr.playing
    //         this.$emit('change', event.detail.plyr.playing)
    //     })
    // },

    methods: {
        play() {
            this.$refs.player.player.play()
        },
        pause() {
            this.$refs.player?.player.pause()
        },
        toggle() {
            this.playing ? this.pause() : this.play()
        },

        checkIsVideo(url) {
            return url.includes('https://www.youtube.com') || url.includes('https://vimeo.com/')
        },

        getLinkVideo(link) {
            if (link) {
                let video_id = ''
                if (link.includes('https://www.youtube.com')) {
                    if (link.includes('?v=')) {
                        video_id = link.split('?v=').pop()
                        let ampersandPosition = video_id.indexOf('&')
                        if (ampersandPosition != -1) {
                            video_id = video_id.substring(0, ampersandPosition)
                        }
                    }
                    if (link.includes('embed')) {
                        video_id = link.split('/').pop()
                    }
                    return (
                        'https://www.youtube.com/embed/' +
                        video_id +
                        '?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;autoplay=1'
                    )
                } else {
                    video_id = link.split('/').pop()
                    return 'https://player.vimeo.com/video/' + video_id
                }
            }
        },
    },
}
</script>
<style>
.plyr {
    @apply m-auto w-full;
}
</style>
