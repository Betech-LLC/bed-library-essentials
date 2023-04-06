<template>
    <div class="form-apply-job">
        <h2 class="form-apply-job-title">Nộp đơn ứng tuyển</h2>
        <div class="form-apply-job-field">
            <JFormField
                v-model="form.contact.data['Họ và tên']"
                :field="{
                    type: 'text',
                    name: 'Họ và tên',
                    label: 'Họ và tên',
                    placeholder: 'Nhập họ và tên',
                }"
                :rules="rules"
                :errors="errors"
                class="form-apply-job-field-name"
            />
            <JFormField
                v-model="form.contact.data['Số điện thoại']"
                :field="{
                    type: 'number',
                    name: 'Số điện thoại',
                    label: 'Số điện thoại',
                    placeholder: 'Nhập số điện thoại',
                }"
                :rules="rules"
                :errors="errors"
                class="form-apply-job-field-phone"
            />
            <JFormField
                v-model="form.contact.data.Email"
                :field="{
                    type: 'email',
                    name: 'Email',
                    label: 'Email',
                    placeholder: 'Nhập email',
                }"
                :rules="rules"
                :errors="errors"
                class="form-apply-job-field-email"
            />
            <JFormField
                v-model="form.contact.data['File CV']"
                :field="{
                    type: 'upload_file',
                    name: 'File CV',
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

    <JModal :show="isShow" @close="isShow = false">
        <JNotify
            title="Ứng tuyển thành công"
            description="Chúng tôi đã nhận hồ sơ ứng tuyển. Phòng Nhân sự sẽ liên hệ đến bạn trong thời gian sớm nhất."
        />
    </JModal>
</template>
<script>
import JNotify from '@core/components/JNotify.vue'
import JModal from '@core/components/JModal.vue'
import JIconUploadCloud from '@core/components/JIcon/UploadCloud.vue'
import { useSubmitForm, useValidateForm, useResetForm } from '@core/composables'
export default {
    components: { JModal, JNotify, JIconUploadCloud },
    props: {
        job: {
            type: Object,
            default: {},
        },
        apiURL: {
            type: String,
        },
    },
    data() {
        return {
            isShow: false,
            form: {
                contact: {
                    data: {
                        'Họ và tên': null,
                        'Số điện thoại': null,
                        Email: null,
                        'File CV': null,
                        Job: {
                            id: this.job.id,
                            slug: this.job.slug,
                            title: this.job.title,
                        },
                    },
                    type: 'APPLY_FORM',
                },
            },
            rules: {
                'Họ và tên': 'required',
                'Số điện thoại': 'required|phone',
                Email: 'required|email',
                'File CV': 'required',
            },
            errors: {},
            isLoading: false,
        }
    },
    methods: {
        async onSubmit() {
            this.errors = useValidateForm({ form: this.form.contact.data, rules: this.rules })
            if (Object.keys(this.errors).length > 0 || this.isLoading) {
                return
            }
            this.isLoading = true
            try {
                const { data } = await useSubmitForm(this.apiURL, this.form)
                if (data && data.status === 200) {
                    this.onSuccessApply()
                    this.form = useResetForm(this.form.contact.data)
                } else {
                    this.onSuccessApply()
                }
                this.isLoading = false
            } catch (error) {
                this.onErrorApply()
                this.isLoading = false
            }
        },

        onSuccessApply() {
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
            }, 2000)
        },
        onErrorApply() {
            console.log('error')
        },
    },
}
</script>
