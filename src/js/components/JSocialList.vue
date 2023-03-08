<template>
    <div class="share-list">
        <div class="share-title">Chia sẻ</div>

        <a v-if="checkShow('messenger') && appId" :href="messageUrl" target="_blank" class="share-item messenger">
            <slot name="messenger">
                <JImageDynamic name="messenger" />
            </slot>
        </a>

        <a v-if="checkShow('linkedin')" :href="linkedinUrl" target="_blank" class="share-item linkedin">
            <slot name="linkedin">
                <JImageDynamic name="linkedin" />
            </slot>
        </a>

        <a v-if="checkShow('facebook')" :href="facebookUrl" target="_blank" class="share-item facebook">
            <slot name="facebook">
                <JImageDynamic name="facebook" />
            </slot>
        </a>

        <div class="share-item zalo" v-if="checkShow('zalo') && oaId">
            <client-only>
                <div
                    class="zalo-share-button"
                    data-href=""
                    :data-oaid="oaId"
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

        <a v-if="checkShow('pinterest')" :href="pinterestUrl" target="_blank" class="share-item pinterest">
            <slot name="pinterest">
                <JImageDynamic name="pinterest" />
            </slot>
        </a>

        <a v-if="checkShow('twitter')" :href="twitterUrl" target="_blank" class="share-item twitter">
            <slot name="twitter">
                <JImageDynamic name="twitter" />
            </slot>
        </a>

        <div v-if="checkShow('copy-link')" class="share-item copy-link">
            <div @click="copyLink()">
                <slot name="copy-link">
                    <JImageDynamic name="copy-link" />
                </slot>
            </div>
            <input id="input-copy" type="hidden" />
            <div class="noti" :class="{ active: copySuccess }">Link copied!</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listSocial: {
            type: Array,
            default: () => ['messenger', 'facebook', 'zalo', 'pinterest', 'twitter', 'copy-link', 'linkedin'],
        },
        appId: {
            type: String,
            default: null,
        },
        oaId: {
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
        if (this.oaId) {
            let Script = document.createElement('script')
            Script.setAttribute('src', 'https://sp.zalo.me/plugins/sdk.js')
            document.head.appendChild(Script)
        }

        this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`

        this.messageUrl = `https://www.facebook.com/dialog/send?app_id=${this.appId}&display=popup&link=${window.location.href}&redirect_uri=${window.location.href}`

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
            }, 1000)
        },

        checkShow(social) {
            return this.listSocial.includes(social)
        },
    },
}
</script>
