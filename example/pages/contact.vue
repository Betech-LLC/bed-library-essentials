<template>
    <main class="">
        <div class="py-10">
            <JPageContact />
        </div>

        <div class="bg-gray-100">
            <div class="container pt-16 bg-gray-100">
                <div class="px-4 py-10 m-auto bg-white border border-blue-300 border-dashed rounded">
                    <!-- ROW 1 -->
                    <JForm v-model="user" :rules="rules" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
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
                        <div class="flex justify-center my-4 col-span-full">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </JForm>

                    <!-- ROW 2 -->
                    <JForm v-model="user_2" :rules="rules" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
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
                                label: 'Email',
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
                                label: 'Số điện thoại',
                                help: 'This is a hint text to help user.',
                            }"
                        >
                            <template #prefix> <JIconPhone /> </template>
                            <template #suffix> <JIconHelp /> </template
                        ></JFormField>
                    </JForm>

                    <!-- ROW 3 -->
                    <JForm v-model="user_3" :rules="rules" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
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
                    <JForm v-model="user_4" :rules="rules" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
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
                    <JForm v-model="user_5" :rules="rules" class="grid grid-cols-3 gap-4 mb-10">
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
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: null,
                phone: null,
                email: null,
            },
            user_2: {
                name: null,
                phone: null,
                email: null,
            },
            user_3: {
                name: null,
                phone: null,
                email: null,
            },
            user_4: {
                name: null,
                phone: null,
                email: null,
            },
            user_5: {
                note_1: null,
                note_2: null,
                note_3: null,
            },

            rules: {
                name: 'required',
                phone: 'phone|required',
                email: 'required|email',
            },
        }
    },
}
</script>
