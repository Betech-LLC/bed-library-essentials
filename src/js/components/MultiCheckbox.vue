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
        modelBy: { type: String, default: 'id' },
        labelBy: { type: String, default: 'name' },
    },
    data() {
        return {
            items: {},
        }
    },

    methods: {
        onChange(active, option) {
            const keyField = option[this.modelBy]
            if (active) {
                this.items[keyField] = option[this.modelBy]
            } else {
                delete this.items[keyField]
            }
            this.$emit('update:modelValue', Object.keys(this.items))
        },
    },
}
</script>
