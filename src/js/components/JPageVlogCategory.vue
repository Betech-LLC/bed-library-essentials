<template>
    <main>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <div class="page-vlog-category-items">
                    <JCardVlog class="item" :item="item" v-for="(item, index) in vlogs" :key="index" />
                </div>
                <div class="page-vlog-category-button">
                    <button class="btn-see-more">Xem thêm 16 bài viết</button>
                </div>
            </div>
        </section>

        <JModal
            @close="close"
            class="bg-dark !overflow-hidden !py-0 !px-0"
            maxWidth="screen"
            :show="false"
            modalClass="max-md:!my-0 max-md:!overflow-y-auto"
            id="modal-vlog"
        >
            <div class="relative h-auto md:!h-screen">
                <div class="relative md:h-full">Video</div>
                <div class="w-full md:h-full h-52 bg-zinc-900" v-if="isLoading"></div>

                <div class="bg-video" v-if="!isPlaying">
                    <div class="pb-8 md:container xl:pb-10 max-md:px-6">
                        <div class="grid grid-cols-12 xl:gap-x-8 md:gap-x-6">
                            <div class="relative z-20 md:col-span-6 xl:col-span-5 col-span-full">
                                <div
                                    class="mb-4 font-semibold text-white h2 xl:mb-4 md:mb-3 md:line-clamp-3"
                                    v-if="vlog && vlog.title"
                                >
                                    {{ vlog.title }}
                                </div>
                                <div
                                    :class="{ 'line-clamp-none': seeMoreButton === false }"
                                    class="font-medium text-white line-clamp-4"
                                    v-if="vlog && vlog.description"
                                >
                                    <span id="vlog-description" v-html="vlog.description"></span>
                                </div>
                                <button
                                    @click="seeMoreButton = !seeMoreButton"
                                    v-if="isSeeMoreButton"
                                    class="mt-2 text-right text-orange-500 underline caption"
                                >
                                    {{ seeMoreButton ? 'See more' : 'See less' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="relative z-20 pt-12 pb-5 duration-500 bg-white max-md:hidden"
                    v-if="vlogMostView && vlogMostView.length > 0 && !isPlaying"
                    :class="isShowRecommendVid ? '-translate-y-full' : 'translate-y-0'"
                >
                    <Button
                        class="!absolute right-7 flex items-center !pl-4 !pr-1.5 !z-30 button-position"
                        :class="isShowRecommendVid ? 'active' : ''"
                        :icon="true"
                        :iconClass="isShowRecommendVid ? 'rotate-180 max-lg:w-3 max-lg:h-3' : 'max-lg:w-3 max-lg:h-3'"
                        @click="toggleRecommendedVid()"
                        >{{ btnText }}</Button
                    >
                    <div class="relative ml-custom">
                        <swiper
                            :loop="true"
                            :allowTouchMove="true"
                            :navigation="{
                                prevEl: '.btn-vlog-prev',
                                nextEl: '.btn-vlog-next',
                            }"
                            :modules="modules"
                            :breakpoints="{
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 22,
                                },
                                1280: {
                                    slidesPerView: 4.3,
                                    spaceBetween: 32,
                                },
                            }"
                            class="swiper-recommended"
                        >
                            <swiper-slide
                                v-for="(recommendedVideo, recommendedVideoIndex) in vlogMostView"
                                :key="recommendedVideoIndex"
                            >
                                <CardVlog
                                    :vlog="recommendedVideo"
                                    :isSuggested="true"
                                    @click="toggleVideo(recommendedVideo)"
                                />
                            </swiper-slide>
                        </swiper>
                        <button class="swiper-btn swiper-btn--prev btn-vlog-prev">
                            <IconArrowUp class="-rotate-90" />
                        </button>
                        <button class="swiper-btn swiper-btn--next btn-vlog-next">
                            <IconArrowUp class="rotate-90" />
                        </button>
                    </div>
                </div>
                <div
                    @click="close()"
                    class="fixed z-20 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-pointer lg:w-10 lg:h-10 xl:top-8 md:top-6 top-3 xl:right-10 md:right-7 right-2"
                    :class="isFullScreenVid ? 'max-md:hidden' : ''"
                >
                    <IconCloseModal class="max-md:w-3 max-md:h-3" />
                </div>
                <div
                    @click="closeFullScreenVid()"
                    class="fixed z-20 items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-pointer md:hidden lg:w-10 lg:h-10 xl:top-8 md:top-6 top-3 xl:right-10 md:right-7 right-2"
                    :class="isFullScreenVid ? 'max-md:flex' : 'hidden'"
                >
                    <IconCloseModal class="max-md:w-3 max-md:h-3" />
                </div>
            </div>
            <div class="px-6 py-8 space-y-6 bg-white md:hidden" :class="isPlaying ? 'hidden' : ''">
                <div class="font-semibold border-b-2 border-orange-500 h2">Up next</div>
                <CardVlog
                    :vlog="suggestItem"
                    v-for="(suggestItem, suggestItemIndex) in vlogMostView"
                    :key="suggestItemIndex"
                    :isSuggested="true"
                    @click="toggleVideo(suggestItem)"
                ></CardVlog>
            </div>
        </JModal>
    </main>
</template>

<script>
import JCardVlog from '@core/components/JCardVlog.vue'

export default {
    components: { JCardVlog },
    props: ['vlogs'],

    data() {
        return {
            vlog: this.vlogs[0],
        }
    },
}
</script>
