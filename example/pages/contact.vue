<template>
    <main class="bg-gray-200 min-h-[100vh]">
        <div class="container pt-16">
            <div class="px-4 py-10 m-auto bg-white border border-blue-300 border-dashed rounded">
                <!-- DROPDOWN -->
                <JForm v-model="team" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <JFormField
                        :field="{
                            type: 'dropdown',
                            name: 'member',
                            placeholder: 'Select team member',
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
