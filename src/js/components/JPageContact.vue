<template>
    <div class="container pt-8 pb-12 md:pt-11 xl:pt-16 md:pb-16 xl:pb-24">
        <div class="flex flex-col lg:flex-row lg:space-x-10 xl:space-x-16">
            <div class="flex-1">
                <div class="mb-6 md:mb-8 xl:mb-12">
                    <h1 class="mb-2.5 md:mb-3.5 xl:mb-5 display-3">Kết nối với {{ title }}</h1>
                    <p>Chúng tôi sẵn sàng ghi nhận đóng góp và cung cấp dịch vụ tốt nhất đến khách hàng.</p>
                </div>
                <JForm v-model="form" :rules="rules" @onSubmit="onSubmit">
                    <div class="grid grid-cols-2 md:gap-x-6 xl:gap-x-8 gap-y-4 xl:gap-y-6">
                        <JFormField
                            :field="{
                                type: 'text',
                                name: 'firstName',
                                label: 'Tên',
                                placeholder: 'Nhập tên của bạn',
                            }"
                            class="md:col-span-1 col-span-full"
                        />
                        <JFormField
                            :field="{
                                type: 'text',
                                name: 'lastName',
                                label: 'Họ',
                                placeholder: 'Nhập họ của bạn',
                            }"
                            class="md:col-span-1 col-span-full"
                        />
                        <JFormField
                            :field="{
                                type: 'email',
                                name: 'email',
                                label: 'Email',
                                placeholder: 'Nhập email',
                            }"
                            class="col-span-full"
                        />
                        <JFormField
                            :field="{
                                type: 'number',
                                name: 'phone',
                                label: 'Số điện thoại',
                                placeholder: 'Nhập số điện thoại',
                            }"
                            class="col-span-full"
                        />
                        <JFormField
                            :field="{
                                type: 'textarea',
                                name: 'note',
                                rows: 5,
                                label: 'Lời nhắn',
                                placeholder: 'Nhập nội dung cần hỗ trợ',
                            }"
                            class="col-span-full"
                        />
                    </div>
                    <div class="mt-4 md:mt-6 xl:mt-8">
                        <button type="submit" class="w-full btn btn-primary btn-lg">Submit</button>
                    </div>
                </JForm>
            </div>
            <div class="flex-1 mt-4 lg:mt-0">
                <template v-if="$slots.banner">
                    <slot name="banner" />
                </template>
                <div v-else class="h-[420px] md:h-[520px] lg:h-[620px] xl:h-[800px]">
                    <img src="../../images/contact.webp" alt="Contact" class="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            form: { firstName: null, lastName: null, email: null, phone: null, note: null },
            rules: {
                firstName: 'required',
                lastName: 'required',
                phone: 'required|phone',
                email: 'required|email',
                note: '',
            },
        }
    },
    methods: {
        onSubmit() {
            console.log('onSubmit contact', this.form)
            this.resetForm(this.form)
        },

        resetForm() {
            const keyFields = Object.keys(this.form)
            keyFields.forEach((keyField) => {
                this.form[keyField] = null
            })
        },
    },
}
</script>
