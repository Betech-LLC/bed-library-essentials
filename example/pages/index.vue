<template>
    <div class="container py-10 space-y-10">
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
                    title: 'Sắt sinh học cho bà bầu Ferrolip',
                },
            ]"
        />

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
                    title: 'Sinh lực nữ tới',
                    link: '/thuc-pham-chuc-nang',
                },
                {
                    title: 'Sắt sinh học cho bà bầu Ferrolip',
                },
            ]"
            divider=">"
        />

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
                        Kho có thềm cao, được xây dựng và hoàn thiện tháng 8 năm 2015 theo tiêu chuẩn của Singapore giúp
                        đáp ứng được các yêu cầu khắt khe của khách hàng. Ngoài ra, kho Hải Phòng được trang bị hệ thống
                        PCCC hiện đại, an toàn; đội ngũ nhân viên thủ kho, công nhân giàu kinh nghiệm; hệ thống xe nâng
                        chuyên nghiệp phục vụ nhu cầu xếp dỡ hàng hóa.
                    </p>
                    <h3>Chi nhánh Đà Nẵng</h3>
                    <ul>
                        <li>Địa chỉ: Đường số 11B, Khu Công Nghiệp Hòa Khánh, Quận Liên Chiểu, Thành phố Đà Nẵng</li>
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
        <ImageDynamic name="logo" alt="asd" />
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
</template>
