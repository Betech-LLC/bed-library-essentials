<template>
    <main class="container space-y-8 xl:py-14 md:py-10 py-7">
        <section class="space-y-4">
            <div class="headline-1">Banner quảng cáo</div>
            <div class="grid grid-cols-12 gap-x-8">
                <div class="col-span-3">
                    <JBannerAds :item="banner" />
                </div>
                <div class="col-span-9">
                    <JBannerAds :item="bannerHorizontal" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            banner: {
                id: 2,
                title: '<p>Banner Ads</p>',
                description: null,
                link: 'https://github.com/nhatkha1407/betech-library-essentials',
                target: '_self',
                custom_fields: null,
                image: { url: 'https://via.placeholder.com/300x600', alt: 'Demo 1' },
                image_mobile: { url: 'https://via.placeholder.com/600x600', alt: 'Demo 1' },
            },
            bannerHorizontal: {
                id: 2,
                title: '<p>Banner Ads</p>',
                description: null,
                link: 'https://github.com/nhatkha1407/betech-library-essentials',
                target: '_self',
                custom_fields: null,
                image: { url: 'https://via.placeholder.com/600x200', alt: 'Demo 1' },
                image_mobile: { url: 'https://via.placeholder.com/600x300', alt: 'Demo 1' },
            },
        }
    },
}
</script>
