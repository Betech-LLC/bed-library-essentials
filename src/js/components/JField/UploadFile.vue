<template>
    <div class="cursor-pointer pointer-events-none">
        <input class="input" type="text" autocomplete="off" :readonly="true" :placeholder="fieldPlaceholder" />
    </div>
    <input type="file" @input="onInputFile" class="hidden" :id="field.name" :name="field.name" v-bind="fieldAttrs" />
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],
    methods: {
        onInputFile(event) {
            let file = event.target.files[0]
            if (!file) return

            const fileExtension = file.name.split('.').pop()
            const isTypeCorrect = ['doc', 'docx', 'pdf'].includes(fileExtension)
            let i = 0
            let size = file.size
            let fSExt = new Array('Bytes', 'KB', 'MB', 'GB')
            while (size > 900) {
                size /= 1024
                i++
            }
            const sizeCalc = Math.round(size * 100) / 100
            const exactSize = sizeCalc + ' ' + fSExt[i]
            const isSizeCorrect =
                exactSize.includes('Bytes') || exactSize.includes('KB') || (exactSize.includes('MB') && sizeCalc <= 5)

            if (!isTypeCorrect || !isSizeCorrect) {
                alert(this.field.help)
                return
            }
            this.$emit('update:modelValue', file)
        },
    },
    computed: {
        fieldAttrs() {
            return this.field.attrs || {}
        },
        fieldPlaceholder() {
            if (this.modelValue) {
                return this.modelValue.name || this.field.placeholder
            }
            return this.field.placeholder
        },
    },
}
</script>
