<template>
    <div class="form-notification">
        <div class="form-notification-left">
            <div class="form-notification-fields">
                <div class="form-notification-title">Nhận thông báo khi chúng tôi cập nhật bài viết mới nhất</div>
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
                    class="form-notification-field-name"
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
                    class="form-notification-field-email"
                />
                <button @click="onSubmit()" class="btn btn-secondary btn-lg mt-4 md:mt-6 xl:mt-8 w-[220px]">
                    Đăng ký
                </button>
            </div>
        </div>
        <div class="form-notification-right">
            <JPicture :src="image && (image.url || image)" />
        </div>
    </div>

    <JModal :show="isShow" @close="isShow = false">
        <JNotify
            title="Đăng ký thành công"
            description="Chúng tôi sẽ gửi thông báo đến email của bạn khi cập nhật bài viết mới nhất."
        />
    </JModal>
</template>
<script>
import JPicture from '@core/components/JPicture.vue'
import JNotify from '@core/components/JNotify.vue'
import JModal from '@core/components/JModal.vue'
import { useSubmitForm, useValidateForm, useResetForm } from '@core/composables'

export default {
    components: { JPicture, JModal, JNotify },
    props: ['apiURL', 'image'],
    data() {
        return {
            isShow: false,
            form: {
                contact: {
                    data: {
                        'Họ và tên': null,
                        Email: null,
                    },
                    type: 'CONTACT_FORM',
                },
            },
            rules: {
                'Họ và tên': 'required',
                Email: 'required|email',
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
            this.form = useResetForm(this.form.contact.data)

            try {
                const { data } = await useSubmitForm(this.apiURL, this.form)
                if (data && data.status === 200) {
                    this.form = useResetForm(this.form.contact.data)
                    this.onSuccessApply()
                } else {
                    this.onErrorApply()
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
