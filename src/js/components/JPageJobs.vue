<template>
    <main>
        <section class="jobs">
            <div class="jobs-wrap">
                <div class="jobs-filters">
                    <div class="filter">
                        <p class="title">Ngành nghề</p>
                    </div>
                </div>

                <div class="jobs-body">
                    <h2 class="jobs-title">Khám phá cơ hội việc làm</h2>
                    <p class="jobs-count">56 công việc</p>

                    <div class="jobs-list">
                        <JCardJob v-for="(job, index) in jobs" :key="index" :item="job" />
                    </div>

                    <div class="jobs-button">
                        <button class="btn-see-more">Xem thêm 12 việc làm</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    props: ['jobs'],
}
</script>
