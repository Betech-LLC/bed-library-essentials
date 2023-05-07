<template>
    <main>
        <div class="page-contact">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>
            <div class="page-contact-wrap">
                <div class="page-contact-left">
                    <div class="page-contact-content">
                        <h1 class="page-contact-title">{{ title }}</h1>
                        <p class="page-contact-description">{{ description }}</p>
                    </div>
                    <div class="page-contact-fields">
                        <JFormField
                            v-model="form.contact.data['Tên']"
                            :field="{
                                type: 'text',
                                name: 'Tên',
                                label: 'Tên',
                                placeholder: 'Nhập tên của bạn',
                            }"
                            :rules="rules"
                            :errors="errors"
                            class="page-contact-field-lastname"
                        />

                        <JFormField
                            v-model="form.contact.data['Họ']"
                            :field="{
                                type: 'text',
                                name: 'Họ',
                                label: 'Họ',
                                placeholder: 'Nhập họ của bạn',
                            }"
                            :rules="rules"
                            :errors="errors"
                            class="page-contact-field-firstname"
                        />
                        <JFormField
                            v-model="form.contact.data['Email']"
                            :field="{
                                type: 'email',
                                name: 'Email',
                                label: 'Email',
                                placeholder: 'Nhập email',
                            }"
                            :rules="rules"
                            :errors="errors"
                            class="page-contact-field-email"
                        />
                        <!-- TODO -->
                        <!-- <JFormField
                            v-model="form.contact.data['Password']"
                            :field="{
                                type: 'password',
                                name: 'Password',
                                label: 'Password',
                                placeholder: 'Nhập Password',
                                toggleMask: true,
                            }"
                            :rules="rules"
                            :errors="errors"
                            class="page-contact-field-email"
                        /> -->

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
                            class="page-contact-field-phone"
                        />
                        <JFormField
                            v-model="form.contact.data['Lời nhắn']"
                            :field="{
                                type: 'textarea',
                                name: 'Lời nhắn',
                                rows: 5,
                                label: 'Lời nhắn',
                                placeholder: 'Nhập nội dung cần hỗ trợ',
                            }"
                            :rules="rules"
                            :errors="errors"
                            class="page-contact-field-note"
                        />
                    </div>
                    <div class="page-contact-field-button">
                        <button @click="onSubmit" class="w-full btn btn-primary btn-lg">
                            <slot name="button-title">Gửi ngay</slot>
                        </button>
                    </div>
                </div>
                <div class="page-contact-right">
                    <template v-if="$slots.banner">
                        <slot name="banner" />
                    </template>
                    <div v-else class="page-contact-banner">
                        <img src="../../images/contact.webp" alt="Contact" />
                    </div>
                </div>
            </div>
        </div>

        <JPopupNotify
            :show="isShow"
            @close="isShow = false"
            title="Yêu cầu thành công"
            description="Hệ thống đã nhận thông tin yêu cầu của Quý khách. Chúng tôi sẽ liên hệ để tư vấn trong thời gian sớm nhất."
        />
    </main>
</template>
<script>
import JPopupNotify from '@core/components/JPopupNotify.vue'
import JFormField from '@core/components/JFormField.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import { useSubmitForm, useValidateForm, useResetForm } from '@core/composables'
export default {
    components: { JPopupNotify, JFormField, JBreadcrumb, JIconArrowRight },
    props: {
        title: {
            type: String,
            default: null,
        },
        description: { type: String, default: null },
        urlApiForm: { type: String },
        breadcrumb: {
            type: Array,
        },
    },
    data() {
        return {
            isShow: false,
            isLoading: false,
            form: {
                contact: {
                    data: {
                        Họ: null,
                        Tên: null,
                        'Số điện thoại': null,
                        'Lời nhắn': null,
                        Email: null,
                    },
                    type: 'CONTACT_FORM',
                },
            },
            rules: {
                Họ: 'required',
                Tên: 'required',
                'Số điện thoại': 'required|phone',
                'Lời nhắn': '',
                Email: 'required|email',
            },
            errors: {},
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
                const { data } = await useSubmitForm(this.urlApiForm, this.form)
                if (data && data.success) {
                    this.form.contact.data = useResetForm(this.form.contact.data)
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
        },
        onErrorApply() {
            console.log('error')
        },
    },
}
</script>
