<template>
    <div class="container py-10 space-y-10">
        <JSliderItems
            :breakpoints="{
                sm: {
                    cols: '2',
                    gutter: '0px',
                    align: 'start',
                },
                md: {
                    cols: '2',
                    gutter: '0px',
                    align: 'start',
                },
                lg: {
                    cols: '3.2',
                    gutter: '0px',
                    align: 'start',
                },
                xl: {
                    cols: '4.6',
                    gutter: '12px',
                    align: 'start',
                },
            }"
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :pagination="true"
        >
            <template #slide-item="{ item }">
                <div class="aspect-w-1 aspect-h-1">
                    <JPicture
                        src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
                        wrapperClass="picture-cover"
                    />
                </div>
            </template>
        </JSliderItems>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: null,
                phone: null,
                email: null,
            },

            rules: {
                name: 'required',
                phone: 'phone|required',
                email: 'required|email',
            },
        }
    },
}
</script>
