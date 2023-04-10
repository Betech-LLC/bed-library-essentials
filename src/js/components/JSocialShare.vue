<template>
    <div class="social-share">
        <div class="social-share-title">
            <slot name="title"> Chia sẻ </slot>
        </div>

        <div class="social-share-items">
            <a v-if="messenger && facebookAppId" :href="messageUrl" target="_blank" class="social-share-item messenger">
                <slot name="messenger">
                    <img src="../../images/messenger.png" />
                </slot>
            </a>

            <a v-if="linkedin" :href="linkedinUrl" target="_blank" class="social-share-item linkedin">
                <slot name="linkedin">
                    <img src="../../images/linkedin.png" />
                </slot>
            </a>

            <a v-if="facebook" :href="facebookUrl" target="_blank" class="social-share-item facebook">
                <slot name="facebook">
                    <img src="../../images/facebook.png" />
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
                            <img src="../../images/zalo.png" />
                        </slot>
                    </div>
                </client-only>
            </div>

            <a v-if="pinterest" :href="pinterestUrl" target="_blank" class="social-share-item pinterest">
                <slot name="pinterest"> <img src="../../images/pinterest.png" /> </slot>
            </a>

            <a v-if="twitter" :href="twitterUrl" target="_blank" class="social-share-item twitter">
                <slot name="twitter">
                    <img src="../../images/twitter.png" />
                </slot>
            </a>

            <a v-if="instagram" :href="instagramUrl" target="_blank" class="social-share-item instagram">
                <slot name="instagram">
                    <img src="../../images/instagram.png" />
                </slot>
            </a>

            <div v-if="copyLink" class="social-share-item copy-link">
                <div @click="copyCurrentLink()">
                    <slot name="copy-link">
                        <img src="../../images/copy-link.png" />
                    </slot>
                </div>
                <input id="input-copy" type="hidden" />
                <div class="message" :class="{ active: copySuccess }">Link copied!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        messenger: {
            type: Boolean,
            default: false,
        },
        facebook: {
            type: Boolean,
            default: true,
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
        instagram: {
            type: Boolean,
            default: null,
        },
        copyLink: {
            type: Boolean,
            default: true,
        },
        link: {
            type: String,
            default: null,
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
        instagramUrl: {
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
        copyCurrentLink() {
            const input = document.querySelector('#input-copy')
            input.value = this.link ? this.link : window.location.href
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
