<template><JPageJobDetail :job="job" :relatedJobs="relatedJobs" :breadcrumb="breadcrumb" /></template>
<script>
export default {
    data() {
        return {
            breadcrumb: [
                {
                    title: 'Trang chủ',
                    link: '/',
                },
                {
                    title: 'Tuyển dụng',
                    link: '/jobs',
                },
                {
                    title: 'Tuyển dụng chi tiết',
                },
            ],

            job: {
                id: 18,
                title: 'Chuyên viên khảo sát rủi ro/ Risk Surveyor',
                slug: 'principal-python-engineer',
                is_urgent: 1,
                is_bonus: 1,
                is_available: 1,
                category: 'Tech/Engineer',
                location: 'Hồ Chí Minh',
                quantity: 1,
                expected_time: '2023-03-02',
                url: '/jobs/job-detail',
                content: `<h3>1. M&ocirc; tả c&ocirc;ng việc</h3>
                        <ul>
                        <li>Tham mưu, đề xuất cho Tổng gi&aacute;m đốc c&aacute;c vấn đề thuộc lĩnh vực nh&acirc;n sự như: x&acirc;y dựng cơ cấu tổ chức, điều h&agrave;nh của c&ocirc;ng ty, c&ocirc;ng t&aacute;c đ&agrave;o tạo tuyển dụng, c&aacute;c phương &aacute;n về lương bổng, khen thưởng c&aacute;c chế độ ph&uacute;c lợi cho người lao động,&hellip;</li>
                        <li>Lập kế hoạch tuyển dụng, đ&agrave;o tạo ph&aacute;t triển nguồn nh&acirc;n lực định kỳ năm, qu&yacute;, th&aacute;ng cho c&ocirc;ng ty.</li>
                        <li>X&acirc;y dựng, bổ sung, ho&agrave;n thiện c&aacute;c quy tr&igrave;nh, quy chế &aacute;p dụng trong C&ocirc;ng ty.</li>
                        <li>Ph&aacute;t triển nguồn nh&acirc;n lực trong c&ocirc;ng ty bằng c&aacute;ch lập ra c&aacute;c chiến lược đ&aacute;nh gi&aacute; năng suất nh&acirc;n vi&ecirc;n, tuyển dụng, đ&agrave;o tạo v&agrave; ph&aacute;t triển&hellip;</li>
                        <li>Gi&aacute;m s&aacute;t hệ thống ph&ograve;ng ban, c&aacute;c chiến lược v&agrave; chiến thuật quản trị nh&acirc;n lực</li>
                        <li>Gi&aacute;m s&aacute;t, hướng dẫn nh&acirc;n vi&ecirc;n nh&acirc;n sự</li>
                        </ul>
                        <h3>2. Y&ecirc;u cầu c&ocirc;ng việc</h3>
                        <ul>
                        <li>C&oacute; kinh nghiệm l&agrave;m việc ở vị tr&iacute; Gi&aacute;m đốc nh&acirc;n sự hoặc tối thiểu 03 năm kinh nghiệm ở vị tr&iacute; tương đương.</li>
                        <li>Nắm r&otilde; thị trường lao động, c&oacute; những mối quan hệ đặc biệt với những nh&agrave; cung cấp nh&acirc;n sự</li>
                        <li>Hiểu biết đầy đủ về c&aacute;ch tổ chức hoạt động để đạt được mục ti&ecirc;u</li>
                        <li>Nắm vững bộ luật Lao động, luật Thuế TNCN, luật BHYT, BHXH, c&oacute; kiến thức v&agrave; kỹ năng quản trị nh&acirc;n lực.</li>
                        <li>Bằng Cử nh&acirc;n trở l&ecirc;n ng&agrave;nh quản trị nh&acirc;n lực, quản trị kinh doanh hoặc lĩnh vực li&ecirc;n quan</li>
                        <li>Th&agrave;nh thạo c&aacute;c nguy&ecirc;n tắc quản l&yacute; nguồn nh&acirc;n lực v&agrave; c&aacute;c kinh nghiệm thực tiễn</li>
                        </ul>
                        <h3>3. Ch&iacute;nh s&aacute;ch ph&uacute;c lợi</h3>
                        <ul>
                        <li>C&oacute; kinh nghiệm l&agrave;m việc ở vị tr&iacute; Gi&aacute;m đốc nh&acirc;n sự hoặc tối thiểu 03 năm kinh nghiệm ở vị tr&iacute; tương đương.</li>
                        <li>Nắm r&otilde; thị trường lao động, c&oacute; những mối quan hệ đặc biệt với những nh&agrave; cung cấp nh&acirc;n sự</li>
                        <li>Hiểu biết đầy đủ về c&aacute;ch tổ chức hoạt động để đạt được mục ti&ecirc;u</li>
                        <li>Nắm vững bộ luật Lao động, luật Thuế TNCN, luật BHYT, BHXH, c&oacute; kiến thức v&agrave; kỹ năng quản trị nh&acirc;n lực.</li>
                        <li>Bằng Cử nh&acirc;n trở l&ecirc;n ng&agrave;nh quản trị nh&acirc;n lực, quản trị kinh doanh hoặc lĩnh vực li&ecirc;n quan</li>
                        <li>Th&agrave;nh thạo c&aacute;c nguy&ecirc;n tắc quản l&yacute; nguồn nh&acirc;n lực v&agrave; c&aacute;c kinh nghiệm thực tiễn</li>
                        </ul>
                        <h3>4. H&igrave;nh thức ứng tuyển</h3>
                        <ul>
                        <li>Gửi CV về địa chỉ</li>
                        <li>Nắm r&otilde; thị trường lao động, c&oacute; những mối quan hệ đặc biệt với những nh&agrave; cung cấp nh&acirc;n sự</li>
                        </ul>`,
            },

            relatedJobs: [
                {
                    id: 18,
                    title: 'Principal Python Engineer',
                    slug: 'principal-python-engineer',
                    is_urgent: 1,
                    is_bonus: 1,
                    is_available: 1,
                    category: 'Tech/Engineer',
                    location: 'Ho Chi Minh',
                    quantity: 1,
                    url: '/jobs/job-detail',
                },
                {
                    id: 20,
                    title: 'Principal Ruby on Rails Engineer',
                    slug: 'principal-ruby-on-rails-engineer',
                    is_urgent: 1,
                    is_bonus: 0,
                    category: 'Tech/Engineer',
                    location: 'Ho Chi Minh',
                    quantity: 1,
                    url: '/jobs/job-detail',
                },
            ],
        }
    },
}
</script>
