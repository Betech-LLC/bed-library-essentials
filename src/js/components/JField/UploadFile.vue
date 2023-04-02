<template>
    <div class="cursor-pointer pointer-events-none">
        <input class="input" type="text" autocomplete="off" :readonly="true" :placeholder="fieldPlaceholder" />
    </div>
    <input type="file" @input="onInputFile" class="hidden" :id="field.name" :name="field.name" />
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
            let _size = file.size
            let fSExt = new Array('Bytes', 'KB', 'MB', 'GB')
            while (_size > 900) {
                _size /= 1024
                i++
            }
            const sizeCalc = Math.round(_size * 100) / 100
            const exactSize = sizeCalc + ' ' + fSExt[i]
            const isSizeCorrect =
                exactSize.includes('Bytes') || exactSize.includes('KB') || (exactSize.includes('MB') && sizeCalc <= 5)

            if (!isTypeCorrect || !isSizeCorrect) {
                console.log('file error')
                alert(this.field.help)
                this.$emit('update:modelValue', null)
                return
            }

            console.log('file success')
            this.$emit('update:modelValue', file)
        },
    },
    computed: {
        fieldPlaceholder() {
            if (this.modelValue) {
                return this.modelValue.name || this.field.placeholder
            }
            return this.field.placeholder
        },
    },
}
</script>
