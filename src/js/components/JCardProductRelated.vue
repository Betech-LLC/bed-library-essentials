<template>
    <div v-if="product" class="card-product-related">
        <JLink :href="product.url" class="card-product-related-thumbnail">
            <JPicture :src="product.image.url" :alt="product.image.alt" wrapperClass="picture-contain" />
        </JLink>
        <div class="card-product-related-right">
            <slot name="title">
                <JLink :href="product.url" class="card-product-related-title">
                    <h3>{{ product.title }}</h3>
                </JLink>
            </slot>
            <div class="card-product-related-price">{{ toMoney(product.price) }}</div>
            <div v-if="Number(product.old_price) > 0" class="card-product-related-old-price">
                {{ toMoney(product.old_price) }}
            </div>
            <div v-if="product.percent > 0" class="card-product-related-discount">Giảm {{ product.percent }}%</div>
        </div>
    </div>
</template>
<script>
import { toMoney } from '@core/utils'
export default {
    props: ['product'],
    methods: {
        toMoney,
    },
}
</script>
