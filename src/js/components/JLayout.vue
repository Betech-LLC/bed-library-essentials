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
import JCardProductRelated from './JCardProductRelated.vue'

export default {
    data() {
        return {
            relatedProducts: [
                {
                    id: 3,
                    variant_id: 3,
                    title: 'Chao đèn hình túi xách quai da nâu DT250XT-TR/DT250XG đèn hình túi xách quai da nâu DT250XT-TR/DT250XG',
                    slug: 'vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                    percent: 24,
                    sku: 'PC1072',
                    price: '395000.00',
                    old_price: '495000.00',
                    variant_title: '30 viên',
                    default_price: '395000.00',
                    image: {
                        url: 'https://salt.tikicdn.com/ts/tmp/32/be/01/fa963664aa0461022e0a956e866507de.jpg',
                        path: 'Product/go-multi-teen-everyday-8820eb16d9214161b4c245cd49c71c3a.webp',
                        alt: 'Vitamin tổng hợp cho tuổi teen Go Multi Teen Everyday',
                    },
                    url: 'http://localhost:8000/vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                },
            ],
            memberActive: null,
            paymentActive: 1,
            payments: [
                {
                    id: 1,
                    title: 'Thanh toán tiền mặt khi nhận hàng (COD)',
                    desc: 'Quý khách vui lòng giữ liên lạc để shipper liên hệ khi giao hàng nhé!',
                    image: '../../images/vnpay.png',
                },
                { id: 2, title: 'Chuyển khoản', desc: '', image: '../../images/vnpay.png' },
                {
                    id: 3,
                    title: 'Thanh toán bằng VNPAY',
                    desc: 'Quét mã QR từ ứng dụng ngân hàng',
                    image: '../../images/vnpay.png',
                },
            ],
            isBill: false,
            multiCheckboxItems: [],
            multiCheckboxItemsActive: [],
            multiCheckboxItemsID: [],
            optionBrandsMultiCheckboxV2: [
                {
                    id: 23,
                    name: 'Frontend 2',
                    active: true,
                },
                { id: 333, name: 'Backend 2' },
                { id: 3545, name: 'Accounting 2' },
                { id: 997, name: 'Management roles 2' },
            ],
            optionBrandsMultiCheckbox: [
                {
                    id: 1111,
                    name: 'Apple 2',
                    active: true,
                },
                { id: 2222, name: 'Samsung 2', active: false },
                { id: 3333, name: 'Xiaomi 2', active: false },
                { id: 4444, name: 'Oppo 2', active: false },
            ],
            team: { member: null },
            nameJobs: [],
            optionJobs: [
                {
                    name: 'Frontend',
                },
                {
                    name: 'Backend',
                },
                {
                    name: 'Accounting',
                },
                {
                    name: 'Management roles',
                },
            ],
            quantity: 1,
            optionLaptops: [
                {
                    name: 'Mac',
                    active: false,
                },
                {
                    name: 'Dell',
                    active: false,
                },
                {
                    name: 'Asus',
                    active: false,
                },
                {
                    name: 'Acer',
                    active: false,
                },
            ],
            activeLaptop: null,
            optionBrands: [
                {
                    id: 1111,
                    name: 'Apple',
                    active: false,
                },
                { id: 2222, name: 'Samsung', active: false },
                { id: 3333, name: 'Xiaomi', active: false },
                { id: 4444, name: 'Oppo', active: false },
            ],
            members: [
                {
                    id: 1,
                    name: 'Phoenix Baker 1',
                },
                {
                    id: 2,
                    name: 'Phoenix Baker 2',
                },
                {
                    id: 3,
                    name: 'Phoenix Baker 3',
                },
                {
                    id: 4,
                    name: 'Phoenix Baker 4',
                },
                {
                    id: 5,
                    name: 'Phoenix Baker 5',
                },
                {
                    id: 6,
                    name: 'Phoenix Baker 6',
                },
                {
                    id: 7,
                    name: 'Phoenix Baker 7',
                },
                {
                    id: 8,
                    name: 'Phoenix Baker 8',
                },
            ],
            user: {
                name: null,
                phone: null,
                email: null,
                isBill: null,
                list: [],
                company_name: null,
            },
            user_2: {
                name: null,
                phone: null,
                email: null,
            },
            user_3: {
                name: null,
                phone: null,
                email: null,
            },
            user_4: {
                name: null,
                phone: null,
                email: null,
            },
            user_5: {
                note_1: null,
                note_2: null,
                note_3: null,
            },
            rules: {
                name: 'required',
                phone: 'phone|required',
                email: 'required|email',
                company_name: '',
            },
            currentActive: 1,
        }
    },
    computed: {
        checkedBrands() {
            return this.optionBrands.filter((brand) => brand.active).map((brand) => brand.name)
        },
        checkedJobs() {
            const jobs = []
            this.optionJobs.forEach((job) => {
                if (!!job.active) {
                    jobs.push(job.name)
                }
            })
            return jobs
        },
    },
    watch: {
        'user.isBill'(newVal) {
            if (newVal) {
                this.rules = {
                    ...this.rules,
                    company_name: 'required',
                }
            } else {
                this.rules = {
                    ...this.rules,
                    company_name: '',
                }
            }
        },
    },
    methods: {
        onSlide() {
            console.log('onSlide runn')
        },
        onSubmitUser() {
            console.log('onSubmitUser')
        },
        toggleItem(index) {
            this.currentActive = this.currentActive !== index ? index : null
        },
    },
    components: { JCardProductRelated },
}
</script>
<style lang="scss">
.checkbox-button {
    .label {
        @apply pl-0;
    }
    &.active {
        @apply text-blue-700 bg-blue-50;
    }
}
</style>
