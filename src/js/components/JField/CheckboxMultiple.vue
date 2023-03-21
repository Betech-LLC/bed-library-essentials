<template>
    <div class="multi-checkbox">
        <JFieldCheckbox
            v-for="option in field.options"
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
    props: ['field'],

    data() {
        return {
            items: {},
        }
    },

    computed: {
        labelBy() {
            return this.field.labelBy || 'name'
        },
        keyBy() {
            return this.field.keyBy || 'id'
        },
    },

    methods: {
        onChange(active, option) {
            const keyField = option[this.keyBy]
            if (active) {
                this.items[keyField] = option[this.keyBy]
            } else {
                delete this.items[keyField]
            }
            this.$emit('update:modelValue', Object.keys(this.items))
        },
    },
}
</script>
