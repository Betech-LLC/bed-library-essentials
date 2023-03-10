<template>
    <section class="error error-col">
        <div class="error-body">
            <div class="error-status">
                {{ status }}
            </div>
            <h1 class="error-title">
                {{ title }}
            </h1>
            <p class="error-description">
                {{ description }}
                <a :href="`tel:${toNumber(phone)}`"> {{ phone }} </a>
            </p>
            <JLink class="error-button" :href="link">{{ button }}</JLink>
        </div>
        <slot>
            <img src="../../images/error/image-page.webp" class="error-image" alt="Error" />
        </slot>
    </section>
</template>

<script>
import { toNumber } from '@core/utils'

export default {
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
