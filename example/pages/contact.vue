<template>
    <main>
        <JPageContact title="JAMstack Vietnam" :breadcrumb="breadcrumb" />
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
