<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="px-4 py-10 m-auto bg-white border border-blue-300 border-dashed rounded">
                <!-- ROW 1 -->
                <JForm
                    v-model="user"
                    :rules="rules"
                    :errors="errors"
                    class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3"
                >
                    <JFormField
                        :field="{
                            type: 'text',
                            name: 'name',
                            label: 'Họ và tên',
                        }"
                    >
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'number',
                            name: 'phone',
                            label: 'Số điện thoại',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        ></JFormField
                    >
                </JForm>

                <!-- ROW 2 -->
                <JForm
                    v-model="user_2"
                    :rules="rules"
                    :errors="errors"
                    class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3"
                >
                    <JFormField
                        :field="{
                            type: 'text',
                            name: 'name',
                            label: 'Họ và tên',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'email',
                            name: 'email',
                            label: 'email',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'number',
                            name: 'phone',
                            label: 'Nhập số điện thoại',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFormField>
                </JForm>

                <!-- ROW 3 -->
                <JForm
                    v-model="user_3"
                    :rules="rules"
                    :errors="errors"
                    class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3"
                >
                    <JFormField
                        :field="{
                            type: 'text',
                            name: 'name',
                            label: 'Họ và tên',
                        }"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'email',
                            label: 'Email',
                            name: 'email',
                        }"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'number',
                            label: 'Số điện thoại',
                            name: 'phone',
                        }"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFormField>
                </JForm>

                <!-- ROW 4 -->
                <JForm
                    v-model="user_4"
                    :rules="rules"
                    :errors="errors"
                    class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3"
                >
                    <JFormField
                        :field="{
                            type: 'text',
                            label: 'Họ và tên',
                            name: 'name',
                        }"
                        :disabled="true"
                    >
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                        }"
                        :disabled="true"
                    >
                        <template #prefix> <JIconEmail /> </template>
                        <template #suffix> <JIconHelp /> </template>
                    </JFormField>
                    <JFormField
                        :field="{
                            type: 'number',
                            name: 'phone',
                            label: 'Số điện thoại',
                        }"
                        :disabled="true"
                    >
                        <template #prefix> <JIconPhone /> </template>
                        <template #suffix> <JIconHelp /> </template
                    ></JFormField>
                </JForm>

                <!-- ROW 5 -->
                <JForm v-model="user_5" :rules="rules" :errors="errors" class="grid grid-cols-3 gap-4 mb-10">
                    <JFormField
                        :field="{
                            type: 'textarea',
                            name: 'note_1',
                            label: 'Description',
                        }"
                    />

                    <JFormField
                        :field="{
                            rows: 4,
                            name: 'note_2',
                            type: 'textarea',
                            label: 'Description 2',

                            help: 'This is a hint text to help user.',
                        }"
                    />
                    <JFormField
                        :field="{
                            rows: 5,
                            name: 'note_3',
                            type: 'textarea',
                            label: 'Description disabled',
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
