<template>
    <div class="social-share">
        <div class="social-share-title">Chia sẻ</div>

        <div class="social-share-items">
            <a v-if="messenger && facebookAppId" :href="messageUrl" target="_blank" class="social-share-item messenger">
                <slot name="messenger">
                    <JImageDynamic name="messenger" />
                </slot>
            </a>

            <a v-if="linkedin" :href="linkedinUrl" target="_blank" class="social-share-item linkedin">
                <slot name="linkedin">
                    <JImageDynamic name="linkedin" />
                </slot>
            </a>

            <a v-if="facebook" :href="facebookUrl" target="_blank" class="social-share-item facebook">
                <slot name="facebook">
                    <JImageDynamic name="facebook" />
                </slot>
            </a>

            <div class="social-share-item zalo" v-if="zalo && zaloOAId">
                <client-only>
                    <div
                        class="zalo-share-button"
                        data-href=""
                        :data-oaid="zaloOAId"
                        data-layout="3"
                        data-color="blue"
                        data-customize="true"
                    >
                        <slot name="zalo">
                            <JImageDynamic name="zalo" />
                        </slot>
                    </div>
                </client-only>
            </div>

            <a v-if="pinterest" :href="pinterestUrl" target="_blank" class="social-share-item pinterest">
                <slot name="pinterest">
                    <JImageDynamic name="pinterest" />
                </slot>
            </a>

            <a v-if="twitter" :href="twitterUrl" target="_blank" class="social-share-item twitter">
                <slot name="twitter">
                    <JImageDynamic name="twitter" />
                </slot>
            </a>

            <div v-if="copyLink" class="social-share-item copy-link">
                <div @click="copyLink()">
                    <slot name="copy-link">
                        <JImageDynamic name="copy-link" />
                    </slot>
                </div>
                <input id="input-copy" type="hidden" />
                <div class="message" :class="{ active: copySuccess }">Link copied!</div>
            </div>
        </div>
    </div>
</template>

<script>
import JImageDynamic from '@core/components/JImageDynamic.vue'
export default {
    components: { JImageDynamic },

    props: {
        messenger: {
            type: Boolean,
            default: true,
        },
        facebook: {
            type: Boolean,
            default: false,
        },
        zalo: {
            type: Boolean,
            default: true,
        },
        pinterest: {
            type: Boolean,
            default: false,
        },
        twitter: {
            type: Boolean,
            default: false,
        },
        copyLink: {
            type: Boolean,
            default: true,
        },
        linkedin: {
            type: Boolean,
            default: false,
        },
        facebookAppId: {
            type: String,
            default: null,
        },
        zaloOAId: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            messageUrl: null,
            facebookUrl: null,
            pinterestUrl: null,
            twitterUrl: null,
            linkedinUrl: null,
            copySuccess: false,
        }
    },

    mounted() {
        if (this.zaloOAId) {
            let zaloOAScript = document.createElement('script')
            zaloOAScript.setAttribute('src', 'https://sp.zalo.me/plugins/sdk.js')
            document.head.appendChild(zaloOAScript)
        }

        this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`

        this.messageUrl = `https://www.facebook.com/dialog/send?app_id=${this.facebookAppId}&display=popup&link=${window.location.href}&redirect_uri=${window.location.href}`

        this.pinterestUrl = `http://pinterest.com/pin/create/button/?url=${window.location.href}`

        this.twitterUrl = `http://twitter.com/share?text=${window.location.href}`

        this.linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
    },
    methods: {
        copyLink() {
            const input = document.querySelector('#input-copy')
            input.value = window.location.href
            input.setAttribute('type', 'text')
            input.select()
            input.setSelectionRange(0, 99999)
            document.execCommand('copy')
            input.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
            this.copySuccess = true
            setTimeout(() => {
                this.copySuccess = false
            }, 500)
        },
    },
}
</script>
