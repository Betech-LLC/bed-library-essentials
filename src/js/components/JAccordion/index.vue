<template>
    <div class="accordion">
        <slot>
            <JAccordionItem
                v-for="(item, index) in items"
                :key="index"
                :index="index"
                :item="item"
                :isActive="currentActive === index"
                @toggleItem="toggleItem"
            />
        </slot>
    </div>
</template>

<script>
import JAccordionItem from '@core/components/JAccordion/Item.vue'

export default {
    components: { JAccordionItem },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentActive: this.items && this.items.length ? this.items.findIndex((x) => !!x.active) : null,
        }
    },
    mounted() {
        document.querySelectorAll('.accordion-item .accordion-content').forEach(function (el) {
            el.style.maxHeight = el.scrollHeight + 'px'
        })
    },
    methods: {
        toggleItem(index) {
            this.currentActive = this.currentActive !== index ? index : null
        },
    },
}
</script>
