<template>
    <div class="multi-checkbox">
        <JFieldCheckbox
            v-for="option in options"
            v-model="option.active"
            @update:modelValue="onChange($event, option)"
            :field="{
                label: option[labelBy],
            }"
        />
    </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => [],
        },
        keyBy: { type: String, default: 'id' },
        labelBy: { type: String, default: 'name' },
    },
    data() {
        return {
            items: {},
        }
    },

    methods: {
        onChange(active, option) {
            const keyField = option[this.keyBy]
            if (active) {
                console.log('this.items[keyField] = ', active)
                this.items[keyField] = option[this.keyBy]
            } else {
                delete this.items[keyField]
            }

            console.log('items = ', this.items)
            this.$emit('update:modelValue', Object.keys(this.items))
        },
    },
}
</script>
