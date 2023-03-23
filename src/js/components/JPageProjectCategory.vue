<template>
    <main>
        <section class="page-project-category">
            <div class="page-project-category-wrap">
                <div class="page-project-category-head">
                    <div
                        class="flex justify-between xl:px-3 md:px-2 px-1.5 xl:py-2 md:py-1.5 py-1 xl:space-x-2 md:space-x-1.5 space-x-1 overflow-auto bg-white md:rounded-lg rounded shadow-md list-category flex-nowrap"
                    >
                        <div
                            v-for="index in 5"
                            :key="index"
                            class="flex-1 xl:px-10 md:px-7 px-5 xl:py-2 md:py-1.5 py-1 text-center text-gray-500 md:rounded-lg rounded list-category-item hover:bg-primary hover:text-white base-transition title-2 whitespace-nowrap"
                            :class="{ 'bg-primary text-white': index === 1 }"
                        >
                            Tất cả
                        </div>
                    </div>
                </div>

                <div class="page-project-category-body">
                    <div class="page-project-category-card-items">
                        <JCardProject class="card-item" v-for="(item, index) in projects" :key="index" :item="item" />
                    </div>
                    <div class="page-project-category-button">
                        <button class="btn-see-more">Xem thêm 16 bài viết</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JCardProject from '@core/components/JCardProject.vue'

export default {
    components: { JCardProject },

    props: ['projects'],
}
</script>
