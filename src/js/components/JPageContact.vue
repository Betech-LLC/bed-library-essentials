<template>
    <div class="container pt-8 pb-12 md:pt-11 xl:pt-16 md:pb-16 xl:pb-24">
        <div class="flex flex-col lg:flex-row lg:space-x-10 xl:space-x-16">
            <div class="flex-1">
                <div class="mb-6 md:mb-8 xl:mb-12">
                    <h1 class="mb-2.5 md:mb-3.5 xl:mb-5 display-3">Kết nối với {{ title }}</h1>
                    <p>Chúng tôi sẵn sàng ghi nhận đóng góp và cung cấp dịch vụ tốt nhất đến khách hàng.</p>
                </div>
                <div class="grid grid-cols-2 md:gap-x-6 xl:gap-x-8 gap-y-4 xl:gap-y-6">
                    <JFormField
                        v-model="form.firstName"
                        :field="{
                            type: 'text',
                            name: 'firstName',
                            label: 'Tên',
                            placeholder: 'Nhập tên của bạn',
                        }"
                        :rules="rules"
                        :errors="errors"
                        class="md:col-span-1 col-span-full"
                    />

                    <JFormField
                        v-model="form.lastName"
                        :field="{
                            type: 'text',
                            name: 'lastName',
                            label: 'Họ',
                            placeholder: 'Nhập họ của bạn',
                        }"
                        :rules="rules"
                        :errors="errors"
                        class="md:col-span-1 col-span-full"
                    />
                    <JFormField
                        v-model="form.email"
                        :field="{
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                            placeholder: 'Nhập email',
                            error: 'Địa chỉ email hợp lệ theo cấu trúc hello@example.com',
                        }"
                        :rules="rules"
                        :errors="errors"
                        class="col-span-full"
                    />

                    <JFormField
                        v-model="form.fileCV"
                        :field="{
                            type: 'upload_file',
                            name: 'fileCV',
                            label: 'Chọn file',
                            placeholder: 'Bấm vào đây để tải lên Hồ sơ/CV từ máy tính của bạn.',
                            help: 'File tải lên có định dạng .doc, .docx, .pdf, và dung lượng tối đa 5MB',
                        }"
                        class="col-span-full"
                        :rules="rules"
                        :errors="errors"
                    />

                    <JFormField
                        v-model="form.phone"
                        :field="{
                            type: 'number',
                            name: 'phone',
                            label: 'Số điện thoại',
                            placeholder: 'Nhập số điện thoại',
                        }"
                        :rules="rules"
                        :errors="errors"
                        class="col-span-full"
                    />
                    <JFormField
                        v-model="form.note"
                        :field="{
                            type: 'textarea',
                            name: 'note',
                            rows: 5,
                            label: 'Lời nhắn',
                            placeholder: 'Nhập nội dung cần hỗ trợ',
                        }"
                        :rules="rules"
                        :errors="errors"
                        class="col-span-full"
                    />
                </div>
                <div class="mt-4 md:mt-6 xl:mt-8">
                    <button @click="onSubmit" class="w-full btn btn-primary btn-lg">Submit</button>
                </div>
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
import { useForm } from '@core/composables/index'
const { useSubmitForm, useValidateForm, useResetForm } = useForm()
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            form: { fileCV: null, firstName: null, lastName: null, email: null, phone: null, note: null },
            rules: {
                note: '',
                lastName: 'required',
                firstName: 'required',
                phone: 'required|phone',
                email: 'required|email',
                fileCV: 'required',
            },
            errors: {},
        }
    },
    methods: {
        async onSubmit() {
            this.errors = useValidateForm({ form: this.form, rules: this.rules })
            if (Object.keys(this.errors).length > 0) {
                return
            }
            const res = await useSubmitForm(() => {
                return {
                    success: true,
                }
            })

            this.form = useResetForm(this.form)
        },
    },
}
</script>
