<template>
    <JPageProjectDetail :item="project" :breadcrumb="breadcrumb" />
</template>
<script>
export default {
    data() {
        return {
            project: {
                id: 85,
                title: 'Tòa nhà Landmark 81',
                slug: 'toa-nha-landmark-81',
                published_at: '2023-03-08',
                description:
                    'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                location: 'TP.HCM',
                progress: {
                    key: 'success',
                    value: 'Hoàn thành',
                },
                category: {
                    id: 24,
                    title: 'Hic earum vel facilis.',
                    slug: 'hic-earum-vel-facilis',
                    image: { url: null, alt: 'Hic earum vel facilis.' },
                    icon: null,
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                },
                categories: [
                    {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'hic-earum-vel-facilis',
                        image: { url: 'null', alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                    },
                ],
                image: { url: 'https://via.placeholder.com/600x600', alt: 'Quae rerum non aut tenetur.' },
                url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
                content: `<p>T&ograve;a nh&agrave; Landmark 81 l&agrave; một t&ograve;a nh&agrave; chọc trời ở Th&agrave;nh phố Hồ Ch&iacute; Minh, Việt Nam. Với chiều cao 461,5 m&eacute;t (1,513 ft), đ&acirc;y l&agrave; t&ograve;a nh&agrave; cao nhất tại Việt Nam v&agrave; l&agrave; một trong những t&ograve;a nh&agrave; cao nhất ở ch&acirc;u &Aacute;. T&ograve;a nh&agrave; được ho&agrave;n th&agrave;nh v&agrave;o năm 2018 bởi C&ocirc;ng ty TNHH B&aacute;n lẻ Vincom.</p>
                        <p>T&ograve;a nh&agrave; Landmark 81 c&oacute; tổng diện t&iacute;ch s&agrave;n l&ecirc;n đến 141,000 m&sup2; (1,520,000 sq ft) v&agrave; bao gồm 81 tầng v&agrave; 3 tầng hầm. T&ograve;a nh&agrave; được thiết kế theo phong c&aacute;ch hiện đại với những đường cong mềm mại v&agrave; cạnh sắc. Ngo&agrave;i ra, Landmark 81 cũng được trang bị hệ thống an ninh, điều h&ograve;a kh&ocirc;ng kh&iacute; v&agrave; &aacute;nh s&aacute;ng hiện đại.</p>
                        <p><img src="https://via.placeholder.com/600x300"></p>
                        <p>T&ograve;a nh&agrave; Landmark 81 cũng c&oacute; một số tiện &iacute;ch vượt trội như c&aacute;c căn hộ cao cấp với số lượng l&ecirc;n tới 1,000 căn hộ, khu mua sắm, nh&agrave; h&agrave;ng, khu vui chơi giải tr&iacute; v&agrave; hồ bơi. Tất cả c&aacute;c tiện &iacute;ch n&agrave;y được thiết kế độc đ&aacute;o v&agrave; sang trọng, tạo n&ecirc;n một kh&ocirc;ng gian sống đẳng cấp v&agrave; tiện nghi cho cư d&acirc;n v&agrave; du kh&aacute;ch.</p>
                        <p>Vị tr&iacute; của t&ograve;a nh&agrave; Landmark 81 cũng l&agrave; một điểm nhấn quan trọng, nằm tại địa chỉ 208 Nguyễn Hữu Cảnh, phường 22, quận B&igrave;nh Thạnh. Vị tr&iacute; n&agrave;y gi&uacute;p t&ograve;a nh&agrave; c&oacute; được tầm nh&igrave;n tuyệt đẹp v&agrave; truy cập dễ d&agrave;ng đến c&aacute;c khu vực quan trọng kh&aacute;c trong th&agrave;nh phố.</p>
                        <p><img src="https://via.placeholder.com/600x300"></p>
                        <p>Với kiến tr&uacute;c đẳng cấp, tiện &iacute;ch đầy đủ v&agrave; vị tr&iacute; tuyệt vời, T&ograve;a nh&agrave; Landmark 81 đ&atilde; trở th&agrave;nh một biểu tượng đ&aacute;ng tự h&agrave;o của Th&agrave;nh phố Hồ Ch&iacute; Minh v&agrave; Việt Nam, thu h&uacute;t sự ch&uacute; &yacute; của rất nhiều người d&acirc;n v&agrave; du kh&aacute;ch đến tham quan v&agrave; trải nghiệm.</p>
                        <p>T&ograve;a nh&agrave; Landmark 81 l&agrave; một biểu tượng đ&aacute;ng tự h&agrave;o của Th&agrave;nh phố Hồ Ch&iacute; Minh v&agrave; Việt Nam. Với chiều cao l&ecirc;n đến 461,5 m&eacute;t, đ&acirc;y l&agrave; một trong những t&ograve;a nh&agrave; cao nhất ở ch&acirc;u &Aacute;. T&ograve;a nh&agrave; được trang bị nhiều tiện &iacute;ch cao cấp như hồ bơi, khu mua sắm, nh&agrave; h&agrave;ng v&agrave; khu vui chơi giải tr&iacute;, tạo n&ecirc;n một kh&ocirc;ng gian sống đẳng cấp v&agrave; tiện nghi cho cư d&acirc;n v&agrave; du kh&aacute;ch. Vị tr&iacute; của t&ograve;a nh&agrave; cũng đắc địa, nằm tại trung t&acirc;m Th&agrave;nh phố Hồ Ch&iacute; Minh, gi&uacute;p cư d&acirc;n v&agrave; du kh&aacute;ch dễ d&agrave;ng truy cập đến c&aacute;c khu vực quan trọng kh&aacute;c trong th&agrave;nh phố. T&ograve;a nh&agrave; được thiết kế độc đ&aacute;o với những đường cong mềm mại v&agrave; cạnh sắc, tạo n&ecirc;n một kiến tr&uacute;c đẳng cấp v&agrave; hiện đại. Landmark 81 đ&atilde; trở th&agrave;nh một điểm đến hấp dẫn cho du kh&aacute;ch v&agrave; một biểu tượng của sự ph&aacute;t triển đ&ocirc; thị của Việt Nam.</p>`,
            },

            breadcrumb: [
                {
                    title: 'Trang chủ',
                    link: '/',
                },
                {
                    title: 'Dự án',
                    link: '/project',
                },
                {
                    title: 'Tòa nhà Landmark 81',
                },
            ],
        }
    },
}
</script>
