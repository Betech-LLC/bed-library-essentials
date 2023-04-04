<template>
    <div class="form-apply-job">
        <h2 class="form-apply-job-title">Nộp đơn ứng tuyển</h2>
        <div class="form-apply-job-field">
            <JFormField
                v-model="form.name"
                :field="{
                    type: 'text',
                    name: 'name',
                    label: 'Họ và tên',
                    placeholder: 'Nhập họ và tên',
                }"
                :rules="rules"
                :errors="errors"
                class="form-apply-job-field-name"
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
                class="form-apply-job-field-phone"
            />
            <JFormField
                v-model="form.email"
                :field="{
                    type: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'Nhập email',
                }"
                :rules="rules"
                :errors="errors"
                class="form-apply-job-field-email"
            />

            <JFormField
                v-model="form.file"
                :field="{
                    type: 'upload_file',
                    name: 'file',
                    label: 'Chọn file',
                    placeholder: 'Tải lên Hồ sơ/CV từ máy tính của bạn.',
                    help: 'File có định dạng .doc, .docx, .pdf và dung lượng tối đa 5MB',
                    error: 'File tải lên không hợp lệ',
                }"
                :rules="rules"
                :errors="errors"
                class="form-apply-job-field-file"
            >
                <template #prefix> <JIconUploadCloud /> </template>
            </JFormField>
        </div>

        <button @click="onSubmit" class="form-apply-job-button">Gửi</button>
    </div>
</template>
<script>
import { useSubmitForm, useValidateForm, useResetForm } from '@core/composables'
export default {
    props: {
        item: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            form: { file: null, name: null, email: null, phone: null },
            rules: {
                name: 'required',
                phone: 'required|phone',
                email: 'required|email',
                file: 'required',
            },
            errors: {},
            isLoading: false,
        }
    },
    methods: {
        async onSubmit() {
            this.errors = useValidateForm({ form: this.form, rules: this.rules })
            if (Object.keys(this.errors).length > 0 || this.isLoading) {
                return
            }
            this.isLoading = true
            try {
                const data = await useSubmitForm(' https://api.github.com/users', this.form)
                this.$emit('onSuccess')
                this.isLoading = false
                this.form = useResetForm(this.form)
            } catch (error) {
                this.$emit('onError')
                this.isLoading = false
            }
        },
    },
}
</script>
