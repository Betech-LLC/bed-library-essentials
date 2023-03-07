<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="px-4 py-10 m-auto bg-white border border-blue-300 border-dashed rounded">
                <!-- ROW 1 -->
                <JForm v-model="user" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'name',
                            placeholder: 'Nhập họ và tên',
                        }"
                    >
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'email',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Nhập email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'number',
                            label: 'Số điện thoại',
                            name: 'phone',
                            placeholder: 'Nhập số điện thoại',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>

                        ></JFormField
                    >
                </JForm>

                <!-- ROW 2 -->
                <JForm v-model="user_2" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',

                            name: 'phone',

                            placeholder: 'Nhập họ và tên',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'email',

                            name: 'email',

                            placeholder: 'Nhập email',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'number',
                            name: 'phone',
                            placeholder: 'Nhập số điện thoại',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFormField>
                </JForm>

                <!-- ROW 3 -->
                <JForm v-model="user_3" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'name',
                            placeholder: 'Nhập họ và tên',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'email',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Nhập email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'number',
                            label: 'Số điện thoại',
                            name: 'phone',
                            placeholder: 'Nhập số điện thoại',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFormField>
                </JForm>

                <!-- ROW 4 -->
                <JForm v-model="user_4" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'name',
                            placeholder: 'Nhập họ và tên',
                        }"
                        :disabled="true"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'email',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Nhập email',
                        }"
                        :disabled="true"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'number',
                            label: 'Số điện thoại',
                            name: 'phone',
                            placeholder: 'Nhập số điện thoại',
                        }"
                        :disabled="true"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFormField>
                </JForm>

                <!-- ROW 5 -->
                <JForm v-model="user_5" class="grid grid-cols-3 gap-4 mb-10">
                    <JFormField
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'textarea',
                            label: 'Description',
                            name: 'note_1',
                            placeholder: 'Enter a description...',
                        }"
                    />

                    <JFormField
                        :field="{
                            rules: rules,
                            rows: 4,
                            errors: errors,
                            type: 'textarea',
                            label: 'Description 2',
                            name: 'note_2',
                            help: 'This is a hint text to help user.',
                            placeholder: 'Enter a description 2...',
                        }"
                    />
                    <JFormField
                        :field="{
                            rules: rules,
                            rows: 5,
                            errors: errors,
                            type: 'textarea',
                            label: 'Description disabled',
                            name: 'note_3',
                            placeholder: 'Enter a description disabled...',
                        }"
                        :disabled="true"
                    />
                </JForm>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: '',
                phone: '',
                email: '',
            },

            user_2: {
                name: '',
                phone: '',
                email: '',
            },

            user_3: {
                name: '',
                phone: '',
                email: '',
            },
            user_4: {
                name: '',
                phone: '',
                email: '',
            },
            user_5: {
                note_1: '',
                note_2: '',
                note_3: '',
            },

            errors: {},
            rules: {
                name: 'required',
                phone: 'phone|required|min:10|max:10',
                email: 'required|email',
            },
        }
    },

    provide() {
        return {
            user: this.user,
            user_2: this.user_2,
            user_3: this.user_3,
            user_4: this.user_4,
        }
    },
}
</script>
