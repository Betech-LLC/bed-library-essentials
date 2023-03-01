<template>
    <section class="error">
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
            <a href="#" class="error-button">
                {{ button }}
            </a>
        </div>
        <img src="../../images/error/image-page.webp" class="error-image" alt="Error" />
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
            default: 'KHÔNG TÌM THẤY TRANG',
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
    },
    data() {
        return {
            types: [
                {
                    type: 'page',
                    image: '../../images/error/image-page.webp',
                },
                {
                    type: 'folder',
                    image: '../../images/error/image-folder.webp',
                },
                {
                    type: 'house',
                    image: '../../images/error/image-house-location.webp',
                },
                {
                    type: 'messenger',
                    image: '../../images/error/image-no-messenger.webp',
                },
                {
                    type: 'search',
                    image: '../../images/error/image-not-found.webp',
                },
            ],
        }
    },

    methods: {
        toNumber,
    },
}
</script>
