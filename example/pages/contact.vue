<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="border border-blue-300 border-dashed rounded h-[70vh] bg-white m-auto p-4 space-y-[30px]">
                <div class="grid grid-cols-3 gap-4">
                    <JFieldInput
                        v-model="user.name"
                        :field="{
                            type: 'text',
                            label: 'Họ và tên',
                            placeholder: 'Nhập họ và tên',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user.email"
                        :field="{
                            type: 'email',
                            label: 'Email',
                            placeholder: 'Nhập email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user.phone"
                        :field="{
                            type: 'phone',
                            label: 'Số điện thoại',
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
                            type: 'text',
                            label: 'Họ và tên',
                            placeholder: 'Nhập họ và tên',
                            hintText: 'This is a hint text to help user.',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_2.email"
                        :field="{
                            type: 'email',
                            label: 'Email',
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
                            type: 'phone',
                            label: 'Số điện thoại',
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
                            type: 'text',
                            label: 'Họ và tên',
                            placeholder: 'Nhập họ và tên',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_3.email"
                        :field="{
                            type: 'email',
                            label: 'Email',
                            placeholder: 'Nhập email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFieldInput>
                    <JFieldInput
                        v-model="user_3.phone"
                        :field="{
                            type: 'phone',
                            label: 'Số điện thoại',
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
        }
    },
}
</script>
<style lang=""></style>
