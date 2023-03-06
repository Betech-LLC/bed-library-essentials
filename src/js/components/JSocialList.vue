<template>
    <div class="flex items-center space-x-3 xl:space-x-5 md:space-x-4 share-list">
        <div class="flex-none font-semibold select-none share-title text-zinc-900">Share on</div>

        <div class="flex-shrink-0 flex items-center flex-none xl:space-x-3 md:space-x-2.5 space-x-2 share-items">
            <a :href="facebookUrl" target="_blank">
                <IconFacebook class="size-icon facebook" />
            </a>
            <div class="cursor-pointer" @click="linkedinLink" target="_blank">
                <IconLinkedIn class="size-icon linkedin" />
            </div>
            <div class="relative inline-block cursor-pointer">
                <div class="size-icon icon-copy" @click="copyLink()">
                    <IconCopy class="w-full h-full share" />
                </div>
                <input id="input-copy" type="hidden" />
                <div
                    class="absolute top-0 hidden px-2 py-1 mx-1 text-white duration-300 -translate-y-1/2 rounded cursor-default bg-zinc-300 w-max left-full label lg:block"
                    :class="copySuccess ? 'opacity-100 visible' : 'opacity-0 invisible'"
                >
                    Link copied!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['link'],
    data() {
        return {
            facebookUrl: null,
            linkedinUrl: null,
            copySuccess: false,
        }
    },

    mounted() {
        this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${
            this.link ? this.link : window.location.href
        }`
        this.linkedinUrl = this.link ? this.link : window.location.href
    },
    methods: {
        copyLink() {
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
            }, 1000)
        },

        linkedinLink() {
            window.open(
                'https://linkedin.com/shareArticle' +
                    this.objectToGetParams({
                        mini: true,
                        url: this.linkedinUrl,
                    }),
                '__blank'
            )
        },

        objectToGetParams(object) {
            return (
                '?' +
                Object.keys(object)
                    .filter((key) => !!object[key])
                    .map((key) => `${key}=${encodeURIComponent(object[key])}`)
                    .join('&')
            )
        },
    },
}
</script>
<style lang="scss" scoped>
.share-list {
    svg {
        @apply duration-200 ease-in-out;
        color: #a1a1aa;
        &.facebook:hover {
            color: #1977f2;
        }
        &.linkedin:hover {
            color: #1a77b5;
        }
        &.share:hover {
            color: #e2750f;
        }
    }
}

.share-col {
    @screen lg {
        @apply space-x-0;
        .share-title {
            @apply hidden;
        }

        .share-items {
            @apply flex-col space-x-0 space-y-4;

            svg,
            .icon-copy {
                @apply w-7 h-7;
            }
        }
    }
}
</style>
