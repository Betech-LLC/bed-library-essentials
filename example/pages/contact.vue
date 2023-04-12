<template>
    <main>
        <JPageContact title="JAMstack Vietnam" description="description" :breadcrumb="breadcrumb" />
    </main>
</template>

<script>
export default {
    computed: {
        breadcrumb() {
            return [
                {
                    title: 'Trang chủ',
                    link: '/',
                },
                {
                    title: 'Liên hệ',
                },
            ]
        },
    },
}
</script>
