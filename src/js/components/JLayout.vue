<template>
    <div class="container py-10 space-y-10">
        <div id="jam-muilti-checkbox">
            <div class="mb-4 display-3">Muilti-Checkbox</div>
            <div class="p-4 py-10 border border-dashed rounded-lg">
                <div class="grid grid-cols-3 gap-x-2">
                    <div class="space-y-3">
                        <div class="mb-1">Multiple Checkbox <code>modelBy="name"</code></div>
                        <JFieldCheckboxMultiple
                            v-model="multiCheckboxItems"
                            :options="optionBrandsMultiCheckbox"
                            keyBy="name"
                        />

                        <!-- <JFormField
                            v-model="multiCheckboxItems"
                            :field="{
                                type: 'checkbox_multiple',
                            }"
                            keyBy="name"
                            :options="optionBrandsMultiCheckbox"
                        /> -->
                    </div>
                    <div class="space-y-3">
                        <div class="mb-1">Multiple Checkbox <code>modelBy="id"</code></div>
                        <JFieldCheckboxMultiple
                            :options="optionBrandsMultiCheckboxV2"
                            keyBy="id"
                            v-model="multiCheckboxItemsID"
                        />
                    </div>

                    <div class="space-y-3">
                        <div><code>modelBy="name"</code>: {{ multiCheckboxItems }}</div>
                        <div><code>modelBy="id"</code>: {{ multiCheckboxItemsID }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="jam-checkbox">
            <div class="mb-4 display-3">Checkbox / Radio</div>
            <div class="p-4 py-10 border border-dashed rounded-lg">
                <div class="grid grid-cols-3 gap-x-2 gap-y-4">
                    <div class="space-y-4">
                        <div class="label-1">Checked: {{ checkedBrands }}</div>
                        <JFieldCheckbox
                            v-for="option in optionBrands"
                            v-model="option.active"
                            :field="{
                                label: option.name,
                                help: 'This is a hint text to help user.',
                            }"
                        />
                        <JFieldCheckbox
                            :field="{ label: 'Realme', help: 'This is a hint text to help user.' }"
                            :disabled="true"
                        />
                    </div>

                    <div class="space-y-4">
                        <div class="label-1">Checked: "{{ activeLaptop }}"</div>
                        <JFieldRadio
                            v-for="option in optionLaptops"
                            v-model="activeLaptop"
                            :field="{
                                label: option.name,
                                value: option.name,
                                help: 'This is a hint text to help user.',
                            }"
                        />

                        <JFieldRadio
                            v-model="activeLaptop"
                            :field="{
                                label: 'Lenovo',
                                value: 'Lenovo',
                                help: 'This is a hint text to help user.',
                            }"
                            :disabled="true"
                        />
                    </div>

                    <div class="space-y-4">
                        <div class="label-1">Checked: {{ checkedJobs }}</div>
                        <JFieldCheckbox
                            v-for="option in optionJobs"
                            v-model="option.active"
                            :field="{
                                label: option.name,
                                value: option.name,
                            }"
                            class="checkbox-button"
                        >
                            <template #checkmark="{ label }">
                                <div
                                    class="border rounded-lg px-4 py-2.5 inline-block"
                                    :class="
                                        option.active
                                            ? 'border-blue-700 bg-blue-50 text-blue-700'
                                            : 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700'
                                    "
                                >
                                    {{ label }}
                                </div>
                            </template>
                        </JFieldCheckbox>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dropdown  -->
        <div id="jam-dropdown">
            <div class="mb-4 display-3">Dropdown</div>
            <div class="p-4 py-10 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <JForm v-model="team" class="max-w-[400px] w-full mx-auto">
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
        <!-- Fieldset Input -->
        <div id="jam-fieldset">
            <div class="mb-4 display-3">Fieldset Input</div>
            <div class="p-4 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <!-- ROW 1 -->
                <JForm v-model="user" :rules="rules" class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <div class="space-y-4">
                        <JFormField
                            :field="{
                                type: 'checkbox',
                                name: 'isBill',
                                label: 'Xuất hóa đơn công ty',
                            }"
                        />

                        <JFormField
                            :field="{
                                type: 'checkbox_multiple',
                                name: 'list',
                                label: 'Thương hiệu',
                            }"
                            keyBy="name"
                            :options="optionBrandsMultiCheckbox"
                        />

                        <JFormField
                            :field="{
                                type: 'text',
                                name: 'name',
                                label: 'Họ và tên',
                            }"
                        >
                        </JFormField>
                    </div>

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
        <!-- Breadcrumb -->
        <div id="jam-breadcrumb">
            <div class="mb-4 display-3">Breadcrumb</div>
            <div class="p-4 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <div class="body-2">Default</div>
                <JBreadcrumb
                    :items="[
                        {
                            title: 'Trang chủ',
                            link: '/',
                        },
                        {
                            title: 'Thực phẩm chức năng',
                            link: '/thuc-pham-chuc-nang',
                        },
                        {
                            title: 'Dép Cá Sấu cho người lớn',
                        },
                    ]"
                />
                <hr />
                <div class="body-2">Arrow ICON</div>
                <JBreadcrumb
                    :items="[
                        {
                            title: 'Trang chủ',
                            link: '/',
                        },
                        {
                            title: 'Thực phẩm chức năng',
                            link: '/thuc-pham-chuc-nang',
                        },
                        {
                            title: 'Dép Cá Sấu cho người lớn, dép Khủng Long Mắt to',
                        },
                    ]"
                >
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>
                <hr />
                <div class="body-2">Tick ICON - Nhúng Code SVG trực tiếp</div>
                <JBreadcrumb
                    :items="[
                        {
                            title: 'Trang chủ',
                            link: '/',
                        },
                        {
                            title: 'Thực phẩm chức năng',
                            link: '/thuc-pham-chuc-nang',
                        },
                        {
                            title: 'Dép Cá Sấu cho người lớn, dép Khủng Long Mắt to, dép Cá Sấu há miệng',
                        },
                    ]"
                >
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                            <path
                                d="M17 1L6 12L1 7"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </template>
                </JBreadcrumb>
                <hr />
                <div class="body-2">Ký tự Dollar</div>
                <JBreadcrumb
                    :items="[
                        {
                            title: 'Trang chủ',
                            link: '/',
                        },
                        {
                            title: 'Thực phẩm chức năng',
                            link: '/thuc-pham-chuc-nang',
                        },
                        {
                            title: 'Dép Cá Sấu cho người lớn, dép Khủng Long Mắt to, dép Cá Sấu há miệng, dép Hà Mã quai ngang siêu dễ thương',
                        },
                    ]"
                >
                    <template #icon> $ </template>
                </JBreadcrumb>

                <hr />

                <div class="body-2">Ký tự +</div>
                <JBreadcrumb
                    :items="[
                        {
                            title: 'Trang chủ',
                            link: '/',
                        },
                        {
                            title: 'Thực phẩm chức năng',
                            link: '/thuc-pham-chuc-nang',
                        },
                        {
                            title: 'Dép Cá Sấu cho người lớn, dép Khủng Long Mắt to, dép Cá Sấu há miệng, dép Hà Mã quai ngang siêu dễ thương',
                        },
                    ]"
                >
                    <template #icon>
                        <div>+</div>
                    </template>
                </JBreadcrumb>
            </div>
        </div>
        <!-- Button -->
        <div id="jam-button">
            <div class="mb-4 display-3">Button</div>
            <div class="p-4 py-10 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <JButton label="Button" class="btn-primary btn-lg" />
                        <JButton label="Button" class="btn-secondary btn-lg" />
                        <JButton label="Button" class="btn-success btn-lg" />
                        <JButton label="Button" class="btn-warning btn-lg" />
                        <JButton label="Button" class="btn-danger btn-lg" />
                    </div>
                    <div class="flex space-x-2">
                        <JButton label="Button" class="btn-primary" />
                        <JButton label="Button" class="btn-secondary" />
                        <JButton label="Button" class="btn-success" />
                        <JButton label="Button" class="btn-warning" />
                        <JButton label="Button" class="btn-danger" />
                    </div>
                    <div class="flex space-x-2">
                        <JButton label="Button" class="btn-primary btn-sm" />
                        <JButton label="Button" class="btn-secondary btn-sm" />
                        <JButton label="Button" class="btn-success btn-sm" />
                        <JButton label="Button" class="btn-warning btn-sm" />
                        <JButton label="Button" class="btn-danger btn-sm" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Accordion -->
        <div id="jam-accordion">
            <div class="mb-4 display-3">Accordion</div>
            <div class="p-4 py-10 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <JAccordion
                    :items="[
                        {
                            title: 'Accordion item 1',
                            content:
                                'Yes, you can try us for free for 30 days. If you want, we\’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                            active: true,
                        },
                        {
                            title: 'Accordion item 2',
                            content:
                                'WARN  warn - No utility classes were detected in your source files. If this is unexpected, double-check the content option in your Tailwind CSS configuration.WARN warn - No utility classes were detected in your source files. If this is unexpected, double-check the content option in your Tailwind CSS configuration.',
                            active: false,
                        },
                        {
                            title: 'Accordion item 3',
                            content: 'Content of accordion item 3',
                            active: false,
                        },
                    ]"
                />
            </div>
        </div>
        <!-- Prose Content -->
        <div id="jam-prose">
            <div class="mb-4 display-3">Prose Content</div>
            <div class="p-4 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <div class="grid grid-cols-12 gap-x-8">
                    <div class="lg:col-span-10 lg:col-start-2 col-span-full">
                        <div class="prose">
                            <h3>Chi nhánh Hải Phòng</h3>
                            <ul>
                                <li>Địa chỉ: 151 Đại Lộ Đông tây, VSIP Hải Phòng, Huyện Thủy Nguyên, Tỉnh Hải Phòng</li>
                                <li>Số điện thoại: +84 225.8831 118</li>
                                <li>Fax: +84 225.8831 119</li>
                                <li>Email: <a href="mailto:nomura@kvi.konoike.net">nomura@kvi.konoike.net</a></li>
                                <li>Diện tích kho: 6,000 mét vuông</li>
                                <li>Trong đó diện tích kho chứa hàng: 5700 mét vuông</li>
                                <li>Diện tích văn phòng: 300 mét vuông</li>
                            </ul>
                            <p>
                                <img
                                    src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    width="749"
                                    height="421"
                                />
                            </p>
                            <p>
                                Kho có thềm cao, được xây dựng và hoàn thiện tháng 8 năm 2015 theo tiêu chuẩn của
                                Singapore giúp đáp ứng được các yêu cầu khắt khe của khách hàng. Ngoài ra, kho Hải Phòng
                                được trang bị hệ thống PCCC hiện đại, an toàn; đội ngũ nhân viên thủ kho, công nhân giàu
                                kinh nghiệm; hệ thống xe nâng chuyên nghiệp phục vụ nhu cầu xếp dỡ hàng hóa.
                            </p>
                            <h3>Chi nhánh Đà Nẵng</h3>
                            <ul>
                                <li>
                                    Địa chỉ: Đường số 11B, Khu Công Nghiệp Hòa Khánh, Quận Liên Chiểu, Thành phố Đà Nẵng
                                </li>
                                <li>Số điện thoại: +84 236.3551 759 / +84 236.3551 769</li>
                                <li>Email: <a href="mailto:danang@kvi.konoike.net">danang@kvi.konoike.net</a></li>
                                <li>Tổng diện tích: 7000 mét vuông</li>
                                <li>Diện tích văn phòng: 300 mét vuông</li>
                                <li>Diện tích kho: 3500 mét vuông</li>
                            </ul>
                            <p>
                                <img
                                    src="https://images.unsplash.com/photo-1452740868507-bbdbdb0338ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
                                    width="832"
                                    height="468"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ImageDynamic name="logo" alt="asd" />
    </div>

    <!-- <div class="fixed top-0 bottom-0 left-0 w-[300px] bg-white shadow">
        <div class="flex flex-col p-4">
            <a href="#jam-breadcrumb" class="p-3">jam-breadcrumb</a>
            <a href="#jam-dropdown" class="p-3">jam-dropdown</a>
            <a href="#jam-fieldset" class="p-3">jam-fieldset</a>
            <a href="#jam-button" class="p-3">jam-button</a>
            <a href="#jam-accordion" class="p-3">jam-accordion</a>
            <a href="#jam-prose" class="p-3"> jam-prose</a>
        </div>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            isBill: false,
            multiCheckboxItems: [],
            multiCheckboxItemsActive: [],
            multiCheckboxItemsID: [],
            optionBrandsMultiCheckboxV2: [
                {
                    id: 23,
                    name: 'Frontend 2',
                },
                { id: 333, name: 'Backend 2' },
                { id: 3545, name: 'Accounting 2' },
                { id: 997, name: 'Management roles 2' },
            ],
            optionBrandsMultiCheckbox: [
                {
                    id: 1111,
                    name: 'Apple 2',
                    active: false,
                },
                { id: 2222, name: 'Samsung 2', active: false },
                { id: 3333, name: 'Xiaomi 2', active: false },
                { id: 4444, name: 'Oppo 2', active: false },
            ],
            team: { member: null },
            nameJobs: [],
            optionJobs: [
                {
                    name: 'Frontend',
                },
                {
                    name: 'Backend',
                },
                {
                    name: 'Accounting',
                },
                {
                    name: 'Management roles',
                },
            ],
            optionLaptops: [
                {
                    name: 'Mac',
                    active: false,
                },
                {
                    name: 'Dell',
                    active: false,
                },
                {
                    name: 'Asus',
                    active: false,
                },
                {
                    name: 'Acer',
                    active: false,
                },
            ],
            activeLaptop: null,
            optionBrands: [
                {
                    id: 1111,
                    name: 'Apple',
                    active: false,
                },
                { id: 2222, name: 'Samsung', active: false },
                { id: 3333, name: 'Xiaomi', active: false },
                { id: 4444, name: 'Oppo', active: false },
            ],
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
                isBill: null,
                list: [],
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
    computed: {
        checkedBrands() {
            return this.optionBrands.filter((brand) => brand.active).map((brand) => brand.name)
        },
        checkedJobs() {
            const jobs = []
            this.optionJobs.forEach((job) => {
                if (!!job.active) {
                    jobs.push(job.name)
                }
            })
            return jobs
        },
    },
}
</script>
<style lang="scss">
.checkbox-button {
    .label {
        @apply pl-0;
    }
    &.active {
        @apply text-blue-700 bg-blue-50;
    }
}
</style>
