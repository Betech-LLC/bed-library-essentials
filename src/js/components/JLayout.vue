<template>
    <div class="container py-10 space-y-10">
        <JSliderItems
            :breakpoints="{
                sm: {
                    cols: '2',
                    gutter: '12px',
                    align: 'start',
                },
                md: {
                    cols: '3',
                    gutter: '16px',
                    align: 'start',
                },
                lg: {
                    cols: '3',
                    gutter: '16px',
                    align: 'start',
                },
                xl: {
                    cols: '4.7',
                    gutter: '16px',
                    align: 'start',
                },
            }"
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :pagination="true"
        >
            <template #slide-item="{ item }">
                <div class="aspect-w-1 aspect-h-1">
                    <JPicture
                        src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
                        wrapperClass="picture-cover"
                    />
                </div>
            </template>
        </JSliderItems>
        <div id="jam-button">
            <div class="mb-4 display-3">Button</div>
            <div class="p-4 py-10 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <div>
                    <div>Số lượng bugs: {{ quantity }}</div>
                    <JFieldQuantity v-model="quantity" :max="99" />
                    <div class="italic">(nhập số 0 hoặc số âm thì auto trả về 1)</div>
                </div>
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <JButton class="btn-primary btn-sm">Áp dụng</JButton>

                        <div class="w-1/4">
                            <JButton class="w-full btn-danger btn-lg"> Đặt hàng</JButton>
                        </div>

                        <JButton class="btn-secondary">Sửa giỏ hàng</JButton>
                    </div>
                </div>
                <div class="space-x-2 space-y-2">
                    <span class="badge badge-blue">Hello world!</span>

                    <div class="badge badge-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M7 3.5H8.16863C8.29092 3.5 8.35207 3.5 8.40962 3.51382C8.46063 3.52606 8.50941 3.54627 8.55414 3.57368C8.6046 3.6046 8.64784 3.64784 8.73431 3.73431L10.7657 5.76569C10.8522 5.85216 10.8954 5.8954 10.9263 5.94586C10.9537 5.99059 10.9739 6.03937 10.9862 6.09038C11 6.14793 11 6.20908 11 6.33137V7.75C11 7.98297 11 8.09946 10.9619 8.19134C10.9112 8.31386 10.8139 8.41119 10.6913 8.46194C10.5995 8.5 10.483 8.5 10.25 8.5M7.75 8.5H7M7 8.5V3.6C7 3.03995 7 2.75992 6.89101 2.54601C6.79513 2.35785 6.64215 2.20487 6.45399 2.10899C6.24008 2 5.96005 2 5.4 2H2.6C2.03995 2 1.75992 2 1.54601 2.10899C1.35785 2.20487 1.20487 2.35785 1.10899 2.54601C1 2.75992 1 3.03995 1 3.6V7.5C1 8.05228 1.44772 8.5 2 8.5M7 8.5H5M5 8.5C5 9.32843 4.32843 10 3.5 10C2.67157 10 2 9.32843 2 8.5M5 8.5C5 7.67157 4.32843 7 3.5 7C2.67157 7 2 7.67157 2 8.5M10.25 8.75C10.25 9.44036 9.69036 10 9 10C8.30964 10 7.75 9.44036 7.75 8.75C7.75 8.05964 8.30964 7.5 9 7.5C9.69036 7.5 10.25 8.05964 10.25 8.75Z"
                                stroke="#12B76A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span class="ml-1">Free shipping</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="jam-muilti-checkbox">
            <div class="mb-4 display-3">Muilti-Checkbox</div>
            <div class="p-4 py-10 border border-dashed rounded-lg">
                <div class="grid grid-cols-3 gap-x-2">
                    <div class="space-y-3">
                        <div class="mb-1">Multiple Checkbox <code>modelBy="name"</code></div>
                        <JFieldCheckboxMultiple
                            v-model="multiCheckboxItems"
                            :field="{
                                options: optionBrandsMultiCheckbox,
                                keyBy: 'name',
                            }"
                        />
                    </div>
                    <div class="space-y-3">
                        <div class="mb-1">Multiple Checkbox <code>modelBy="id"</code></div>
                        <JFieldCheckboxMultiple
                            v-model="multiCheckboxItemsID"
                            :field="{
                                options: optionBrandsMultiCheckboxV2,
                                keyBy: 'id',
                            }"
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
                    <div class="col-span-3 space-y-4">
                        <div>paymentActive: {{ paymentActive }}</div>
                        <JFieldRadio
                            v-model="paymentActive"
                            :field="{
                                label: 'Thanh toán tiền mặt khi nhận hàng (COD)',
                                value: 1,
                                help: 'Quý khách vui lòng giữ liên lạc để shipper liên hệ khi giao hàng nhé!',
                            }"
                        />
                        <JFieldRadio
                            v-model="paymentActive"
                            :field="{
                                value: 2,
                            }"
                        >
                            <div class="flex space-x-2">
                                <div class="w-6 h-6">
                                    <img src="../../images/vnpay.png" alt="" />
                                </div>
                                <div class="space-y-0.5">
                                    <div>Thanh toán bằng VNPAY</div>
                                    <div class="cursor-default">Quét mã QR từ ứng dụng ngân hàng</div>
                                </div>
                            </div>
                        </JFieldRadio>

                        <JFieldRadio
                            v-model="paymentActive"
                            :field="{
                                value: 3,
                            }"
                        >
                            <div class="">
                                <div class="flex space-x-2">
                                    <div class="flex-none w-6 h-6">
                                        <img src="../../images/vnpay.png" alt="" />
                                    </div>
                                    <div class="label-1">Chuyển khoản</div>
                                </div>

                                <div v-if="paymentActive == 3" class="px-6 py-3 mt-1 ml-8 bg-gray-100 cursor-default">
                                    <div class="text-gray-700">
                                        Quý khách vui lòng chuyển khoản vào số tài khoản dưới đây:
                                    </div>

                                    <div>
                                        <div class="mb-2 font-semibold text-gray-900 title-3">
                                            1. Miền Bắc & Miền Trung
                                        </div>

                                        <div class="flex flex-wrap fl md:flex-row">
                                            <div>Tên tài khoản:</div>
                                            <div>Nguyễn Văn A</div>
                                        </div>
                                        <div>Tên ngân hàng: Ngân hàng Ngoại Thương Việt Nam (VietcomBank)</div>
                                        <div>Số tài khoản: 0021006888888</div>
                                        <div>Nội dung: Tên - Số điện thoại - Sản phẩm</div>
                                    </div>
                                </div>
                            </div>
                        </JFieldRadio>
                    </div>
                    <div class="space-y-4 md:col-span-1 col-span-full">
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

                    <div class="space-y-4 md:col-span-1 col-span-full">
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

                    <div class="space-y-4 md:col-span-1 col-span-full">
                        <div class="label-1">Checked: {{ checkedJobs }}</div>

                        <div class="flex space-x-2">
                            <JFieldCheckboxCustom
                                v-for="option in optionJobs"
                                v-model="option.active"
                                @update:modelValue="
                                    () => {
                                        console.log('hello world')
                                    }
                                "
                            >
                                <span class="badge" :class="option.active ? 'badge-primary' : 'badge-gray'">
                                    {{ option.name }}
                                </span>
                            </JFieldCheckboxCustom>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dropdown  -->
        <div id="jam-dropdown">
            <div class="mb-4 display-3">Dropdown</div>
            <div
                class="flex items-center justify-center p-4 py-10 space-x-2 border border-gray-400 border-dashed rounded-lg"
            >
                <!-- TODO -->
                <div class="max-w-[160px] w-full">
                    <JFormField
                        v-model="memberActive"
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
                </div>
                <div class="max-w-[160px] w-full">
                    <JFormField
                        v-model="memberActive"
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
                </div>
                <div class="max-w-[160px] w-full">
                    <JFormField
                        v-model="memberActive"
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
                </div>
            </div>
        </div>
        <!-- Fieldset Input -->
        <div id="jam-fieldset">
            <div class="mb-4 display-3">Fieldset Input</div>
            <div class="p-4 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <!-- ROW 1 -->
                <div class="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-3">
                    <div class="space-y-4">
                        <JFormField
                            v-model="user.isBill"
                            :field="{
                                type: 'checkbox',
                                name: 'isBill',
                                label: 'Xuất hóa đơn công ty',
                            }"
                            :rules="rules"
                        />

                        <div>
                            <JFormField
                                v-model="user.company_name"
                                :field="{
                                    type: 'text',
                                    name: 'company_name',
                                    label: 'Tên công ty',
                                }"
                                :rules="rules"
                            >
                            </JFormField>
                        </div>

                        <JFormField
                            v-model="user.list"
                            :field="{
                                type: 'checkbox_multiple',
                                name: 'list',
                                label: 'Thương hiệu',
                                keyBy: 'name',
                                options: optionBrandsMultiCheckbox,
                            }"
                            :rules="rules"
                        />

                        <JFormField
                            v-model="user.name"
                            :field="{
                                type: 'text',
                                name: 'name',
                                label: 'Họ và tên',
                            }"
                            :rules="rules"
                        >
                        </JFormField>
                    </div>

                    <JFormField
                        v-model="user.email"
                        :field="{
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                        }"
                        :rules="rules"
                    >
                        <template #prefix> <JIconEmail /> </template>
                    </JFormField>
                    <JFormField
                        v-model="user.phone"
                        :field="{
                            type: 'number',
                            name: 'phone',
                            label: 'Số điện thoại',
                        }"
                        :rules="rules"
                    >
                        <template #prefix> <JIconMobilePhone /> </template>
                        ></JFormField
                    >
                    <div class="flex justify-center my-4 col-span-full">
                        <button @click="onSubmitUser" class="btn btn-primary">Submit</button>
                    </div>
                </div>
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
                            title: 'Trang chủ 2',
                            link: null,
                        },
                        {
                            title: 'Thực phẩm chức năng',
                            link: null,
                        },
                        {
                            title: 'Dép Cá Sấu cho người lớn',
                        },
                    ]"
                    :isH1="true"
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
                    :isH1="true"
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
                    :isH1="true"
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
                <JAccordion>
                    <JAccordionItem @toggleItem="toggleItem" :index="1" :isActive="currentActive === 1">
                        <template #title>
                            <div class="flex items-center space-x-1">
                                <JIconCalendar />
                                <div>Title Custom</div>
                            </div>
                        </template>
                        <ul class="xl:pt-3 md:pt-2 pt-1.5">
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                        </ul>
                    </JAccordionItem>
                    <JAccordionItem
                        :item="{
                            title: 'Accordion item 2',
                        }"
                        @toggleItem="toggleItem"
                        :index="2"
                        :isActive="currentActive === 2"
                    >
                        <template #icon> + </template>
                        <ul class="xl:pt-3 md:pt-2 pt-1.5">
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                        </ul>
                    </JAccordionItem>
                    <JAccordionItem
                        :item="{
                            title: 'Accordion item 1',
                        }"
                        :index="3"
                        @toggleItem="toggleItem"
                        :isActive="currentActive === 3"
                    >
                        <ul class="xl:pt-3 md:pt-2 pt-1.5">
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                        </ul>
                    </JAccordionItem>
                </JAccordion>
            </div>
        </div>
        <!-- Prose Content -->
        <div id="jam-prose">
            <div class="mb-4 display-3">Prose Content</div>
            <div class="p-4 space-y-4 border border-gray-400 border-dashed rounded-lg">
                <div class="grid grid-cols-12">
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
</template>

<script>
import JCardProductRelated from './JCardProductRelated.vue'

export default {
    data() {
        return {
            relatedProducts: [
                {
                    id: 3,
                    variant_id: 3,
                    title: 'Chao đèn hình túi xách quai da nâu DT250XT-TR/DT250XG đèn hình túi xách quai da nâu DT250XT-TR/DT250XG',
                    slug: 'vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                    percent: 24,
                    sku: 'PC1072',
                    price: '395000.00',
                    old_price: '495000.00',
                    variant_title: '30 viên',
                    default_price: '395000.00',
                    image: {
                        url: 'https://salt.tikicdn.com/ts/tmp/32/be/01/fa963664aa0461022e0a956e866507de.jpg',
                        path: 'Product/go-multi-teen-everyday-8820eb16d9214161b4c245cd49c71c3a.webp',
                        alt: 'Vitamin tổng hợp cho tuổi teen Go Multi Teen Everyday',
                    },
                    url: 'http://localhost:8000/vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                },
            ],
            memberActive: null,
            paymentActive: 1,
            payments: [
                {
                    id: 1,
                    title: 'Thanh toán tiền mặt khi nhận hàng (COD)',
                    desc: 'Quý khách vui lòng giữ liên lạc để shipper liên hệ khi giao hàng nhé!',
                    image: '../../images/vnpay.png',
                },
                { id: 2, title: 'Chuyển khoản', desc: '', image: '../../images/vnpay.png' },
                {
                    id: 3,
                    title: 'Thanh toán bằng VNPAY',
                    desc: 'Quét mã QR từ ứng dụng ngân hàng',
                    image: '../../images/vnpay.png',
                },
            ],
            isBill: false,
            multiCheckboxItems: [],
            multiCheckboxItemsActive: [],
            multiCheckboxItemsID: [],
            optionBrandsMultiCheckboxV2: [
                {
                    id: 23,
                    name: 'Frontend 2',
                    active: true,
                },
                { id: 333, name: 'Backend 2' },
                { id: 3545, name: 'Accounting 2' },
                { id: 997, name: 'Management roles 2' },
            ],
            optionBrandsMultiCheckbox: [
                {
                    id: 1111,
                    name: 'Apple 2',
                    active: true,
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
            quantity: 1,
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
                company_name: null,
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
                company_name: '',
            },
            currentActive: 1,
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
    watch: {
        'user.isBill'(newVal) {
            if (newVal) {
                this.rules = {
                    ...this.rules,
                    company_name: 'required',
                }
            } else {
                this.rules = {
                    ...this.rules,
                    company_name: '',
                }
            }
        },
    },
    methods: {
        onSlide() {
            console.log('onSlide runn')
        },
        onSubmitUser() {
            console.log('onSubmitUser')
        },
        toggleItem(index) {
            this.currentActive = this.currentActive !== index ? index : null
        },
    },
    components: { JCardProductRelated },
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
