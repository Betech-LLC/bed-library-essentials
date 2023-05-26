<template>
    <section class="page-error">
        <div class="page-error-body">
            <div class="page-error-status">
                {{ status }}
            </div>
            <h1 class="page-error-title">
                {{ title }}
            </h1>
            <p class="page-error-description">
                <span v-html="description"></span>
                <a :href="`tel:${toNumber(phone)}`"> {{ phone }} </a>
            </p>
            <JLink class="page-error-button" :href="link">{{ button }}</JLink>
        </div>
        <slot>
            <img src="../../images/error/image-page.webp" class="page-error-image" alt="Error" />
        </slot>
    </section>
</template>

<script>
import { toNumber } from '@core/utils'
import JLink from '@core/components/JLink.vue'

export default {
    components: { JLink },

    props: {
        status: {
            type: String,
            default: '404 error',
        },
        title: {
            type: String,
            default: 'Không tìm thấy trang',
        },
        description: {
            type: String,
            default:
                'Địa chỉ truy cập không tồn tại hoặc đã bị xóa. Trong trường hợp khẩn cấp, Quý khách vui lòng liên hệ hotline',
        },
        phone: {
            type: String,
            default: '+1800 9090 9090',
        },
        button: {
            type: String,
            default: 'QUAY LẠI TRANG CHỦ',
        },
        link: {
            type: String,
            default: '/',
        },
    },

    methods: {
        toNumber,
    },
}
</script>
