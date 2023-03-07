<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="border border-blue-300 border-dashed rounded h-[70vh] bg-white m-auto p-4 space-y-[30px]">
                <div class="grid grid-cols-3 gap-4">
                    <JFieldInput
                        v-model="user.name"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'Họ và tên',
                            fieldName: 'name',
                            placeholder: 'Nhập họ và tên',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user.email"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'email',
                            label: 'Email',
                            name: 'Email',
                            fieldName: 'email',
                            placeholder: 'Nhập email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user.phone"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'phone',
                            label: 'Số điện thoại',
                            name: 'Số điện thoại',
                            fieldName: 'phone',
                            placeholder: 'Nhập số điện thoại',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFieldInput>
                </div>

                <!-- ROW 2 -->
                <div class="grid grid-cols-3 gap-4">
                    <JFieldInput
                        v-model="user_2.name"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'Họ và tên',
                            fieldName: 'name',
                            placeholder: 'Nhập họ và tên',
                            hintText: 'This is a hint text to help user.',
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
                            label: 'Email',
                            name: 'Email',
                            fieldName: 'email',
                            placeholder: 'Nhập email',
                            hintText: 'This is a hint text to help user.',
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
                            type: 'phone',
                            label: 'Số điện thoại',
                            name: 'Số điện thoại',
                            fieldName: 'phone',
                            placeholder: 'Nhập số điện thoại',
                            hintText: 'This is a hint text to help user.',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFieldInput>
                </div>

                <!-- ROW 3 -->
                <div class="grid grid-cols-3 gap-4">
                    <JFieldInput
                        v-model="user_3.name"
                        :field="{
                            rules: rules,
                            errors: errors,
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'Họ và tên',
                            fieldName: 'name',
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
                            name: 'Email',
                            fieldName: 'email',
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
                            type: 'phone',
                            label: 'Số điện thoại',
                            name: 'Số điện thoại',
                            fieldName: 'phone',
                            placeholder: 'Nhập số điện thoại',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFieldInput>
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
