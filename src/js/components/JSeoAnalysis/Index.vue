<template>
    <div class="seo-analysis">
        <div class="preview-wrapper">
            <div class="preview-toolbar">
                <h2>Xem trước</h2>
                <div class="flex space-x-2">
                    <div
                        class="preview-device-icon"
                        :class="{ active: currentDevice === 'desktop' }"
                        @click="currentDevice = 'desktop'"
                    >
                        <svg
                            width="20"
                            height="20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 64 64"
                            xml:space="preserve"
                        >
                            <path
                                d="M57,4.1H7c-2.8,0-5,2.2-5,5v31.6c0,2.8,2.2,5,5,5h18.1l-3.3,12.2h-5.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h31.6c0.6,0,1-0.4,1-1
              s-0.4-1-1-1h-5.6l-3.3-12.2H57c2.8,0,5-2.2,5-5V9.1C62,6.4,59.8,4.1,57,4.1z M40.1,57.9H23.9l3.3-12.2h9.6L40.1,57.9z M60,40.7
              c0,1.7-1.3,3-3,3H7c-1.7,0-3-1.3-3-3V9.1c0-1.7,1.3-3,3-3h50c1.7,0,3,1.3,3,3V40.7z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div
                        class="preview-device-icon"
                        :class="{ active: currentDevice === 'mobile' }"
                        @click="currentDevice = 'mobile'"
                    >
                        <svg
                            width="20"
                            height="20"
                            version="1.1"
                            id="lni_lni-mobile"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 64 64"
                            xml:space="preserve"
                        >
                            <g>
                                <circle cx="32" cy="51.8" r="2.5" fill="currentColor"></circle>
                                <path
                                    d="M35,10h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1S35.5,10,35,10z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M45,2H19c-2.8,0-5,2.2-5,5v50c0,2.8,2.2,5,5,5h26c2.8,0,5-2.2,5-5V7C50,4.2,47.8,2,45,2z M48,57c0,1.7-1.3,3-3,3H19
                  c-1.7,0-3-1.3-3-3V7c0-1.7,1.3-3,3-3h26c1.7,0,3,1.3,3,3V57z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="preview-content" :class="currentDevice">
                <div class="preview">
                    <div class="preview-url">
                        <span>{{ data.url ?? toSlug(contentData.title) }}</span>
                    </div>
                    <a class="preview-title" @click="scrollToSection('#seo-title')">
                        {{ titlePreview }}
                    </a>
                    <a class="preview-description" @click="scrollToSection('#seo-description')">{{
                        descriptionPreview
                    }}</a>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="field-group" id="seo-keywords">
                <label class="flex items-center">
                    <span>Từ khóa / Keywords</span>
                    <div class="status-bar">
                        <small>
                            <span>{{ data.keywords.split(',').length }} / 5</span>
                        </small>
                        <div class="bar">
                            <div class="line"></div>
                            <div class="progress" :style="{ width: 100 - seoAnalysis.keywordsScore?.score + '%' }"></div>
                            <div class="divide">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </label>
                <input class="input" v-model="contentData.keywords" />
                <small
                    >Từ khóa dùng để đo đếm mức độ liên quan của Tiêu đề, Mô tả và Nội dung bài viết. Hãy chọn từ khóa
                    súc tích</small
                >
            </div>
            <div class="field-group" id="seo-title">
                <label class="flex items-center">
                    <span>Tiêu đề / Title</span>
                    <div class="status-bar">
                        <small>
                            <span>{{ data.title.length }} / 60</span>
                            <span> ({{ titleWidth }}px / 580px)</span>
                        </small>
                        <div class="bar">
                            <div class="line"></div>
                            <div class="progress" :style="{ width: 100 - seoAnalysis.titleScore?.score + '%' }"></div>
                            <div class="divide">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </label>
                <input class="input" v-model="contentData.title" />
                <small> Đoạn tiêu đề này sẽ được hiển thị đầu tiên khi trên các bộ máy tìm kiếm </small>
                <div v-html="contentData.title" class="title-hidden" />
            </div>
            <div class="field-group" id="seo-description">
                <label class="flex items-center">
                    <span>Mô tả / Description</span>
                    <div class="status-bar">
                        <small>
                            <span>{{ data.description.length }} / 160</span>
                            <span> ({{ descriptionWidth }}px / 915px)</span>
                        </small>
                        <div class="bar">
                            <div class="line"></div>
                            <div
                                class="progress"
                                :style="{
                                    width: 100 - seoAnalysis.descriptionScore?.score + '%',
                                }"
                            ></div>
                            <div class="divide">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </label>
                <textarea class="input" v-model="contentData.description" />
                <small> Đoạn văn bản này sẽ được hiển thị bên dưới tiêu đề lớn khi trên các bộ máy tìm kiếm </small>
                <div v-html="contentData.description" class="description-hidden" />
            </div>
            <div class="suggestion">
                <template v-for="mainFactor of Object.keys(seoAnalysis)">
                  <li
                  v-for="(factor, index) in seoAnalysis[mainFactor]?.factors"
                  :class="[
                    { 'factor-good': factor.score >= 80 },
                    { 'factor-warning': factor.score >= 50 && factor.score < 80 },
                    { 'factor-error': factor.score < 50 },
                  ]"
                    >
                        {{ factor.message }}
                    </li>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { seoAnalysis, toSlug } from '@core/utils'
export default {
    props: ['data'],
    data() {
        return {
            currentDevice: 'desktop',
            contentData: this.data,
            titleWidth: 0,
            descriptionWidth: 0,
        }
    },
    computed: {
        titlePreview() {
            if (this.contentData.title.length > 60) {
                return this.contentData.title.substring(0, 60) + '...'
            }
            return this.contentData.title
        },
        descriptionPreview() {
            if (this.contentData.description.length > 160) {
                return this.contentData.description.substring(0, 160) + '...'
            }
            return this.contentData.description
        },
        seoAnalysis() {
            return seoAnalysis(this.contentData)
        },
    },
    watch: {
        'contentData.title'() {
            this.calculateTitleWidth()
            this.calculateDescriptionWidth()
        },
    },
    mounted() {
        this.calculateTitleWidth()
        this.calculateDescriptionWidth()
    },
    methods: {
        calculateTitleWidth() {
            this.titleWidth = document.querySelector('.title-hidden')?.scrollWidth ?? 0
        },
        calculateDescriptionWidth() {
            this.descriptionWidth = document.querySelector('.description-hidden')?.scrollWidth ?? 0
        },
        scrollToSection(element) {
            document.querySelector(element).scrollIntoView({
                behavior: 'smooth',
            })
            document.querySelector(element + ' .input').focus()
        },
        toSlug(value) {
            return toSlug(value)
        },
    },
}
</script>

<style lang="scss" scoped>
.seo-analysis {
    width: calc(600px + 32px * 2);
}
.preview-wrapper {
    @apply space-y-2;

    .preview-device-icon {
        @apply flex items-center justify-center w-8 h-8 rounded-sm cursor-pointer;
        &.active {
            @apply bg-blue-500 text-white;
        }
        &:not(.active) {
            @apply bg-gray-200 hover:bg-gray-300;
        }
    }

    .preview-toolbar {
        @apply flex items-center justify-between text-lg text-gray-600;
    }
    .preview-content {
        @apply shadow-sm border mx-auto;
        border-radius: 10px;
        max-width: 664px;
        padding: 32px;

        .preview-title,
        .preview-description {
            display: block;
            &:focus {
                @apply border-4 border-blue-400;
            }
        }
        &.mobile {
            max-width: 400px;
            padding: 20px;

            .preview-title {
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
        &.desktop {
            .preview-title {
                white-space: nowrap;
                overflow: hidden;
                margin-top: 5px;
                margin-bottom: 3px;
            }
        }
    }
    .preview {
        font-family: Arial, sans-serif !important;
    }
    .preview-url {
        font-size: 14px;
        line-height: 16px;
        overflow: hidden;
        margin: 0 0 5px;
        white-space: nowrap;
        color: #202124;
        @apply border border-transparent border-dashed cursor-pointer;
        &:hover {
            @apply bg-gray-100 border-gray-600 cursor-pointer;
        }
    }
    .preview-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.3;
        margin-bottom: 3px;
        color: #1a0dab;
        @apply border border-transparent border-dashed cursor-pointer;
        &:hover {
            @apply bg-gray-100 border-gray-600 underline;
        }
    }
    .preview-description {
        font-size: 14px;
        line-height: 1.58;
        clear: left;
        word-wrap: break-word;
        color: #545454;
        @apply border border-transparent border-dashed cursor-pointer;
        &:hover {
            @apply bg-gray-100 border-gray-600 cursor-pointer;
        }
    }
}
.content-wrapper {
    @apply mt-10 space-y-4;

    .field-group {
        @apply p-4 bg-gray-100 rounded-sm space-y-2;
        label {
            @apply text-sm font-medium flex items-center justify-between;
        }
        input,
        textarea {
            @apply w-full h-10 rounded px-2 border text-sm;
        }
        input ~ small,
        textarea ~ small {
            @apply text-gray-500 text-xs mt-4;
        }
        textarea {
            @apply py-2 h-[75px];
        }
    }

    .suggestion {
        @apply p-4 bg-gray-100 rounded-sm space-y-2 font-medium text-sm;
        .factor-good {
            @apply text-green-500;
        }
        .factor-warning {
            @apply text-yellow-400;
        }
        .factor-error {
            @apply text-red-500;
        }
    }

    .title-hidden {
        @apply whitespace-nowrap invisible absolute;
    }
    .description-hidden {
        @apply invisible absolute;
    }

    .status-bar {
        @apply flex items-center space-x-2 text-gray-500;
    }

    .bar {
        @apply relative w-[200px] h-3 border border-gray-400 rounded-sm;
        .line {
            @apply absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500;
        }
        .divide {
            @apply absolute flex w-full h-full justify-evenly;
            & > div {
                @apply w-[1px] h-full bg-gray-300;
            }
        }
        .progress {
            @apply absolute h-full bg-gray-100 right-0;
        }
    }
}
</style>
