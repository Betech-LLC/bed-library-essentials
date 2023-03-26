<template>
    <div class="accordion-item" :class="{ active: isActiveItem }">
        <div class="accordion-header">
            <button @click="toggleItem()">
                <span class="accordion-title">{{ item.title }}</span>
                <span class="accordion-icon" :class="{ active: isActiveItem }">
                    <JIconChevronDown />
                </span>
            </button>
        </div>
        <div class="accordion-content">
            <slot>
                <div v-if="item.content" v-html="item.content" class="accordion-content-inner"></div>
            </slot>
        </div>
    </div>
</template>

<script>
import JIconChevronDown from '@core/components/JIcon/ChevronDown.vue'

export default {
    components: { JIconChevronDown },

    props: ['item', 'isActive', 'index'],

    data() {
        return {
            isActiveItem: this.isActive,
        }
    },

    watch: {
        isActive(value) {
            this.isActiveItem = value
        },
    },

    methods: {
        toggleItem() {
            this.isActiveItem = !this.isActiveItem
            this.$emit('toggleItem', parseInt(this.index))
        },
    },
}
</script>
