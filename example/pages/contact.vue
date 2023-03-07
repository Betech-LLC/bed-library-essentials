<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="px-4 py-10 m-auto bg-white border border-blue-300 border-dashed rounded">
                <!-- ROW 1 -->
                <div class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFieldInput
                        v-model="user.name"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'name',
                            placeholder: 'Nhập họ và tên',
                        }"
                    >
                    </JFieldInput>
                    <JFieldInput
                        v-model="user.email"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user.phone"
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

                        ></JFieldInput
                    >
                </div>

                <!-- ROW 2 -->
                <div class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFieldInput
                        v-model="user_2.name"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_2.email"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_2.phone"
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
                    ></JFieldInput>
                </div>

                <!-- ROW 3 -->
                <div class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFieldInput
                        v-model="user_3.name"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_3.email"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_3.phone"
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
                    ></JFieldInput>
                </div>

                <!-- ROW 4 -->
                <div class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFieldInput
                        v-model="user_4.name"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_4.email"
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
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_4.phone"
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
                    ></JFieldInput>
                </div>

                <!-- ROW 5 -->
                <div class="grid grid-cols-3 gap-4 mb-10">
                    <JFieldInput
                        v-model="note_1"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'textarea',
                            label: 'Description',
                            name: 'note_1',
                            placeholder: 'Enter a description...',
                        }"
                    />

                    <JFieldInput
                        v-model="note_2"
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
                    <JFieldInput
                        v-model="note_2"
                        :field="{
                            rules: rules,
                            rows: 5,
                            errors: errors,
                            type: 'textarea',
                            label: 'Description disabled',
                            name: 'note_2',
                        }"
                        placeholder="Enter a description disabled..."
                        :disabled="true"
                    />
                </div>
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
            note_1: '',
            note_2: '',
            errors: {},
            rules: {
                name: 'required',
                phone: 'phone|required|min:10|max:10',
                email: 'required|email',
            },
        }
    },
}
</script>
<style lang=""></style>
