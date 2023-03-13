<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="px-4 py-10 m-auto bg-white border border-blue-300 border-dashed rounded">
                <!-- DROPDOWN -->
                <JForm v-model="team" :rules="rules" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFormField
                        :field="{
                            type: 'dropdown',
                            name: 'member',
                            label: 'Select team member',
                            help: 'This is a hint text to help user.',
                            options: members,
                        }"
                        class="z-100"
                    >
                        <template #suffix>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                            >
                                <path
                                    d="M1 1.5L6 6.5L11 1.5"
                                    stroke="currentColor"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </template>
                    </JFormField>
                </JForm>

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
                        <template #prefix> <JIconMobilePhone /> </template>
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
                            label: 'Họ và tên 2',
                            help: 'This is a hint text to help user.',
                        }"
                    >
                        <template #suffix>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                            >
                                <path
                                    d="M1 1.5L6 6.5L11 1.5"
                                    stroke="currentColor"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </template>
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
                        <template #prefix> <JIconMobilePhone /> </template>
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
                        <template #prefix> <JIconMobilePhone /> </template>
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
                        <template #prefix> <JIconMobilePhone /> </template>
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
    </main>
</template>
<script>
export default {
    data() {
        return {
            team: { member: null },
            members: [
                {
                    id: 1,
                    name: 'Phoenix Baker 1',
                },
                {
                    id: 2,
                    name: 'Phoenix Baker 2',
                },
                {
                    id: 3,
                    name: 'Phoenix Baker 3',
                },
                {
                    id: 4,
                    name: 'Phoenix Baker 4',
                },
                {
                    id: 5,
                    name: 'Phoenix Baker 5',
                },
                {
                    id: 6,
                    name: 'Phoenix Baker 6',
                },
                {
                    id: 7,
                    name: 'Phoenix Baker 7',
                },
                {
                    id: 8,
                    name: 'Phoenix Baker 8',
                },
            ],
            user: {
                name: null,
                phone: null,
                email: null,
            },

            user_2: {
                name: null,
                phone: null,
                email: null,
                options_name: null,
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
