<template>
    <JPageBlogDetail
        :breadcrumb="breadcrumb"
        :post="post"
        :top_posts="top_posts"
        :related_products="related_products"
        :banner="banner"
        :banners="banners"
        :layout="2"
    >
        <template #blog-related>
            <section>
                <div class="container py-[24px] md:pt-[32px] xl:py-[48px]">
                    <h2 class="headline-2 mb-[16px] md:mb-[24px] xl:mb-[32px]">Bài viết liên quan</h2>
                    <JSliderItems
                        :items="top_posts"
                        :breakpoints="{
                            md: {
                                cols: '2.5',
                                gutter: '12px',
                            },
                            lg: {
                                cols: '3',
                                gutter: '16px',
                            },
                            xl: {
                                cols: '3',
                                gutter: '24px',
                            },
                        }"
                    >
                        <template #slide-item="{ item }">
                            <JCardBlog class="card-item" :item="item" />
                        </template>
                    </JSliderItems>
                </div>
            </section>
        </template>
    </JPageBlogDetail>
</template>

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
                    title: 'Tin tức',
                    link: '/blog',
                },
            ],

            top_posts: [
                {
                    id: 85,
                    title: 'Quae rerum non aut tenetur.',
                    slug: 'quae-rerum-non-aut-tenetur',
                    published_at: '2023-03-08',
                    description:
                        'A harum velit fugit culpa facilis repellat. Dolore ut quia placeat aspernatur sapiente in distinctio. Quia est voluptatem provident id.',
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
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
                },
                {
                    id: 77,
                    title: 'Nam laboriosam.',
                    slug: 'nam-laboriosam',
                    published_at: '2023-03-08',
                    description:
                        'Eveniet maxime velit modi rerum molestiae. Accusantium qui sequi sunt commodi doloribus cum.',
                    category: {
                        id: 3,
                        title: 'Sit non.',
                        slug: 'sit-non',
                        image: { url: null, alt: 'Sit non.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/sit-non',
                    },
                    categories: [
                        {
                            id: 3,
                            title: 'Sit non.',
                            slug: 'sit-non',
                            image: { url: null, alt: 'Sit non.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/sit-non',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Nam laboriosam.' },
                    url: 'http://localhost:8000/tin-tuc/sit-non/nam-laboriosam',
                },
                {
                    id: 44,
                    title: 'Sit omnis sint vel.',
                    slug: 'sit-omnis-sint-vel',
                    published_at: '2023-03-08',
                    description:
                        'Ex quae explicabo et porro eveniet. Molestiae nulla quae accusantium necessitatibus sequi et beatae. Quas molestiae laboriosam in quis saepe dolores. Exercitationem tenetur totam voluptas similique.',
                    category: {
                        id: 16,
                        title: 'Odit alias pariatur.',
                        slug: 'odit-alias-pariatur',
                        image: { url: null, alt: 'Odit alias pariatur.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                    },
                    categories: [
                        {
                            id: 16,
                            title: 'Odit alias pariatur.',
                            slug: 'odit-alias-pariatur',
                            image: { url: null, alt: 'Odit alias pariatur.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Sit omnis sint vel.' },
                    url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur/sit-omnis-sint-vel',
                },
                {
                    id: 85,
                    title: 'Quae rerum non aut tenetur.',
                    slug: 'quae-rerum-non-aut-tenetur',
                    published_at: '2023-03-08',
                    description:
                        'A harum velit fugit culpa facilis repellat. Dolore ut quia placeat aspernatur sapiente in distinctio. Quia est voluptatem provident id.',
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
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
                },
                {
                    id: 77,
                    title: 'Nam laboriosam.',
                    slug: 'nam-laboriosam',
                    published_at: '2023-03-08',
                    description:
                        'Eveniet maxime velit modi rerum molestiae. Accusantium qui sequi sunt commodi doloribus cum.',
                    category: {
                        id: 3,
                        title: 'Sit non.',
                        slug: 'sit-non',
                        image: { url: null, alt: 'Sit non.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/sit-non',
                    },
                    categories: [
                        {
                            id: 3,
                            title: 'Sit non.',
                            slug: 'sit-non',
                            image: { url: null, alt: 'Sit non.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/sit-non',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Nam laboriosam.' },
                    url: 'http://localhost:8000/tin-tuc/sit-non/nam-laboriosam',
                },
                {
                    id: 77,
                    title: 'Nam laboriosam.',
                    slug: 'nam-laboriosam',
                    published_at: '2023-03-08',
                    description:
                        'Eveniet maxime velit modi rerum molestiae. Accusantium qui sequi sunt commodi doloribus cum.',
                    category: {
                        id: 3,
                        title: 'Sit non.',
                        slug: 'sit-non',
                        image: { url: null, alt: 'Sit non.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/sit-non',
                    },
                    categories: [
                        {
                            id: 3,
                            title: 'Sit non.',
                            slug: 'sit-non',
                            image: { url: null, alt: 'Sit non.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/sit-non',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Nam laboriosam.' },
                    url: 'http://localhost:8000/tin-tuc/sit-non/nam-laboriosam',
                },
            ],
            related_products: [
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
                        url: null,
                        path: 'Product/go-multi-teen-everyday-8820eb16d9214161b4c245cd49c71c3a.webp',
                        alt: 'Vitamin tổng hợp cho tuổi teen Go Multi Teen Everyday',
                    },
                    url: 'http://localhost:8000/vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                },
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
                        url: null,
                        path: 'Product/go-multi-teen-everyday-8820eb16d9214161b4c245cd49c71c3a.webp',
                        alt: 'Vitamin tổng hợp cho tuổi teen Go Multi Teen Everyday',
                    },
                    url: 'http://localhost:8000/vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                },
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
                        url: null,
                        path: 'Product/go-multi-teen-everyday-8820eb16d9214161b4c245cd49c71c3a.webp',
                        alt: 'Vitamin tổng hợp cho tuổi teen Go Multi Teen Everyday',
                    },
                    url: 'http://localhost:8000/vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                },
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
                        url: null,
                        path: 'Product/go-multi-teen-everyday-8820eb16d9214161b4c245cd49c71c3a.webp',
                        alt: 'Vitamin tổng hợp cho tuổi teen Go Multi Teen Everyday',
                    },
                    url: 'http://localhost:8000/vitamin-tong-hop-cho-tuoi-teen-go-multi-teen-everyday',
                },
            ],

            post: {
                title: 'Cách CDN làm tăng tốc độ tải trang trên website',
                slug: 'cach-cdn-lam-tang-toc-do-tai-trang-tren-website',
                published_at: '2023-03-08',
                show_table_of_contents: true,
                description:
                    'CDN là một mạng lưới phân phối nội dung giúp thông tin được tải lên website một cách nhanh chóng hơn. Dù bạn đã từng nghe về CDN và hiểu về cách thức hoạt động của chúng hay chưa biết gì và đang muốn tìm hiểu thêm về thuật ngữ này, bài viết sau chắc chắn sẽ giúp ích rất nhiều cho bạn. Cùng tìm hiểu nhé!',
                category: {
                    id: 24,
                    title: 'SEO Strategy',
                    slug: 'seo-strategy',
                    image: { url: null, alt: 'Hic earum vel facilis.' },
                    icon: null,
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                },
                tags: [
                    {
                        title: 'User Experience',
                        url: '/tags/use-experience',
                    },
                    {
                        title: 'Tools',
                        url: '/tags/tools',
                    },
                    {
                        title: 'Optimization',
                        url: '/tags/optimization',
                    },
                ],
                content: `<h3>1. CDN - Content Delivery Network l&agrave; g&igrave;?</h3>
                <h4>1.1 Kh&aacute;i niệm CDN</h4>
                <p>Content Delivery Network (Mạng lưới ph&acirc;n phối nội dung), viết tắt l&agrave; CDN, l&agrave; một mạng lưới gồm nhiều m&aacute;y chủ được đặt tại nhiều vị tr&iacute; kh&aacute;c nhau tr&ecirc;n to&agrave;n thế giới với mục đ&iacute;ch ph&acirc;n phối nội dung số cho người d&ugrave;ng một c&aacute;ch nhanh ch&oacute;ng nhất.</p>
                <p>Theo BuiltWith, 66% trong số 10 ng&agrave;n trang web h&agrave;ng đầu thế giới sử dụng CDN (th&aacute;ng mười một năm 2018). Tỷ lệ n&agrave;y tiếp tục gia tăng nhanh ch&oacute;ng do sự tăng trưởng của c&ocirc;ng nghệ th&ocirc;ng tin khiến y&ecirc;u cầu của người d&ugrave;ng trở n&ecirc;n khắt khe hơn. Sử dụng CDN l&agrave; một trong những c&aacute;ch hiệu quả nhất để ph&acirc;n phối nội dung đạt hiệu suất (performance) v&agrave; độ tin cậy (reliability) cao tr&ecirc;n quy m&ocirc; to&agrave;n cầu.</p>
                <p>Lợi &iacute;ch lớn nhất CDN mang lại l&agrave; gi&uacute;p giảm đ&aacute;ng kể độ trễ mạng (latency). CDN cho ph&eacute;p tất cả người truy cập, bất kể vị tr&iacute; địa l&yacute;, c&oacute; được tốc độ tải nội dung nhanh hơn v&agrave; điều đ&oacute; chắc chắn sẽ cải thiện trải nghiệm người d&ugrave;ng.</p>
                <p><img src="https://via.placeholder.com/600x300" width="605" height="335"></p>
                <h4>1.2 Cấu tr&uacute;c CDN</h4>
                <p>Cấu tr&uacute;c CDN được tạo ra nhờ hai yếu tố ch&iacute;nh, đ&oacute; l&agrave; điểm hiện diện (PoP/Point of Presence) v&agrave; c&aacute;c m&aacute;y chủ bi&ecirc;n (edge servers).</p>
                <p>PoP - Point of Presence</p>
                <p>PoP được viết tắt từ Points of Presence, ch&uacute;ng được hiểu như những điểm hiện diện của CDN ở những vị tr&iacute; kh&aacute;c nhau tr&ecirc;n to&agrave;n thế giới v&agrave; PoP c&ograve;n c&oacute; một t&ecirc;n gọi kh&aacute;c l&agrave; CDN PoP.</p>
                <p>CDN PoP th&ocirc;ng thường l&agrave; c&aacute;c trung t&acirc;m dữ liệu lớn, c&oacute; vị tr&iacute; địa l&yacute; chiến lược v&agrave; mật độ sử dụng internet cao, v&igrave; trọng tr&aacute;ch của c&aacute;c CDN PoP l&agrave; giảm độ trễ truyền tải dữ liệu từ website đến người truy cập n&ecirc;n việc lựa chọn điểm đặt l&agrave; v&ocirc; c&ugrave;ng quan trọng.</p>
                <p>Edge server - M&aacute;y chủ bi&ecirc;n</p>
                <p>M&aacute;y chủ bi&ecirc;n l&agrave; một proxy cache đơn giản hoạt động tương tự như bộ nhớ đệm của tr&igrave;nh duyệt web. Ch&uacute;ng kh&ocirc;ng tạo nội dung cho website, thay v&igrave; thế, ch&uacute;ng lưu trữ bản sao nội dung trong cache. Tổng số lượng m&aacute;y chủ bi&ecirc;n tại từng vị tr&iacute; PoP c&ograve;n t&ugrave;y thuộc v&agrave;o cơ sở hạ tầng của từng nh&agrave; cung cấp dịch vụ CDN. Như vậy c&oacute; thể hiểu một PoP sẽ bao gồm nhiều m&aacute;y chủ bi&ecirc;n.</p>
                <p>M&aacute;y chủ bi&ecirc;n l&agrave; một proxy cache đơn giản hoạt động tương tự như bộ nhớ đệm của tr&igrave;nh duyệt web. Ch&uacute;ng kh&ocirc;ng tạo nội dung cho website, thay v&igrave; thế, ch&uacute;ng lưu trữ bản sao nội dung trong cache. Tổng số lượng m&aacute;y chủ bi&ecirc;n tại từng vị tr&iacute; PoP c&ograve;n t&ugrave;y thuộc v&agrave;o cơ sở hạ tầng của từng nh&agrave; cung cấp dịch vụ CDN. Như vậy c&oacute; thể hiểu một PoP sẽ bao gồm nhiều m&aacute;y chủ bi&ecirc;n.</p>
                <p>Một trong c&aacute;c kh&iacute;a cạnh quan trọng cần đ&aacute;nh gi&aacute; khi ph&acirc;n t&iacute;ch kiến tr&uacute;c CDN l&agrave; phải biết được PoP của n&oacute; nằm ở đ&acirc;u. Số lượng người truy cập website tập trung ở khu vực n&agrave;o nhiều nhất th&igrave; bạn phải chọn những PoP ở vị tr&iacute; đ&oacute;. V&iacute; dụ như bạn c&oacute; người d&ugrave;ng chủ yếu từ Việt Nam th&igrave; dịch vụ CDN bạn n&ecirc;n d&ugrave;ng m&aacute;y chủ ở Việt Nam</p>
                <p><img src="https://via.placeholder.com/500x300"></p>
                <p>CDN hoạt động như thế n&agrave;o?</p>
                <p>Như đ&atilde; được đề cập ở tr&ecirc;n, CDN l&agrave; mạng lưới lớn được tạo th&agrave;nh từ nhiều m&aacute;y chủ ở c&aacute;c vị tr&iacute; địa l&yacute; kh&aacute;c nhau. C&aacute;c PoP được đặt gần khu vực đ&ocirc;ng đ&uacute;c ở c&aacute;c quốc gia tr&ecirc;n to&agrave;n thế giới.</p>
                <p>C&aacute;ch để giảm độ trễ mạng đ&oacute; l&agrave; chuyển request của người d&ugrave;ng đến PoP gần họ nhất. Khi người d&ugrave;ng y&ecirc;u cầu nội dung từ trang sử dụng CDN, y&ecirc;u cầu được gửi đến PoP gần nhất, nơi m&aacute;y chủ bi&ecirc;n c&oacute; thể cung cấp dữ liệu được y&ecirc;u cầu, nội dung sẽ chuyển trực tiếp từ PoP đ&oacute; tới thiết bị của người d&ugrave;ng. V&igrave; vị tr&iacute; địa l&yacute; ngắn n&ecirc;n tốc độ truyền tải th&ocirc;ng tin sẽ nhanh ch&oacute;ng hơn rất nhiều.</p>
                <p>Giả sử bạn đang ở H&agrave; Nội, bạn đang muốn mua một m&oacute;n đồ nhưng n&oacute; chỉ c&oacute; ở Hồ Ch&iacute; Minh n&ecirc;n m&oacute;n đồ đ&oacute; phải được gửi từ Hồ Ch&iacute; Minh ra H&agrave; nội mất v&agrave;i ng&agrave;y.</p>
                <p>Thế nhưng, nếu bạn muốn mua b&oacute; rau từ si&ecirc;u thị, nh&acirc;n vi&ecirc;n sẽ đem b&oacute; rau từ si&ecirc;u thị gần bạn nhất, giao cho shipper, bạn sẽ nhận được h&agrave;ng trong v&ograve;ng v&agrave;i giờ</p>
                <p><img src="https://via.placeholder.com/600x300"></p>
                <h3>2. Sự kh&aacute;c biệt khi d&ugrave;ng CDN</h3>
                <h4>2.1 Khi kh&ocirc;ng c&oacute; CDN</h4>
                <p>Khi CDN kh&ocirc;ng được &aacute;p dụng tr&ecirc;n website, tất cả nội dung sẽ được ph&acirc;n phối qua m&aacute;y chủ gốc duy nhất, cho d&ugrave; vị tr&iacute; địa l&yacute; của người d&ugrave;ng cuối c&oacute; ở đ&acirc;u đi chăng nữa. Điều n&agrave;y sẽ l&agrave;m tốn rất nhiều thời gian để nội dung c&oacute; thể đến với người d&ugrave;ng nếu như họ c&oacute; vị tr&iacute; c&aacute;ch xa m&aacute;y chủ gốc (origin server).</p>
                <p>Điều n&agrave;y c&oacute; nghĩa l&agrave; nếu m&aacute;y chủ gốc ở Hoa Kỳ, th&igrave; người d&ugrave;ng ở Việt Nam hay bất cứ đ&acirc;u đều phải lấy nội dung từ c&ugrave;ng m&aacute;y chủ gốc duy nhất đ&oacute;. Vị tr&iacute; c&aacute;ch xa như vậy sẽ mất nhiều thời gian để truyền tải dữ liệu, ảnh hưởng đến trải nghiệm người d&ugrave;ng v&agrave; kh&ocirc;ng được đ&aacute;nh gi&aacute; cao bởi Google khi xếp hạng website.</p>
                <p>Trong thực tế, theo một nghi&ecirc;n cứu được thực hiện bởi Đại học Nebraska th&igrave; thời gian người d&ugrave;ng chấp nhận chờ đợi th&ocirc;ng tin từ website chỉ xấp xỉ 2 gi&acirc;y. N&ecirc;n việc tối ưu tốc độ tải trang cần được đặt l&ecirc;n h&agrave;ng đầu.</p>
                <p><img src="https://via.placeholder.com/600x300"></p>
                <h3>3. C&aacute;c dạng nội dung CDN c&oacute; thể ph&acirc;n phối</h3>
                <p>Khi ph&acirc;n t&iacute;ch c&aacute;c định dạng nội dung chiếm nhiều băng th&ocirc;ng nhất m&agrave; người d&ugrave;ng to&agrave;n cầu sử dụng, người ta ph&aacute;t hiện thấy ba loại th&ocirc;ng tin đứng đầu l&agrave; ảnh, video v&agrave; &acirc;m thanh (audio).</p>
                <p>D&ugrave; vậy, c&oacute; nhiều kiểu nội dung kh&aacute;c m&agrave; CDN c&oacute; thể ph&acirc;n phối được. Số lượng kiểu nội dung v&agrave; định dạng m&agrave; nh&agrave; cung cấp CDN c&oacute; thể phục vụ c&ograve;n t&ugrave;y thuộc v&agrave;o ch&iacute;nh dịch vụ đ&oacute; (thay đổi từ nh&agrave; cung cấp n&agrave;y sang nh&agrave; cung cấp kh&aacute;c) tuy vậy vẫn c&oacute; c&aacute;c định dạng chung được hỗ trợ phổ biến:</p>
                <p>Ảnh: PNG, JPG, SVG, GIF v&agrave; TIF.  </p>
                <p>Video: FLV, HSL, MP4, MOV v&agrave; WMV.  </p>
                <p>Audio: MP3, WAV, AIFF, AAC v&agrave; PCM.</p>
                <p>  Kh&aacute;c: CSS, JS, JSON, HTML, PDF, ZIP, TTF, OTF.</p>`,
            },

            banner: {
                id: 2,
                title: '<p>Demo</p>',
                description: null,
                link: null,
                target: '_self',
                custom_fields: null,
                image: { url: 'https://via.placeholder.com/300x400', alt: 'Demo' },
                image_mobile: { url: null, alt: 'Demo' },
            },

            banners: [
                {
                    id: 2,
                    title: '<p>Demo</p>',
                    description: null,
                    link: null,
                    target: '_self',
                    custom_fields: null,
                    image: { url: 'https://via.placeholder.com/600x300', alt: 'Demo' },
                    image_mobile: { url: null, alt: 'Demo' },
                },
                {
                    id: 2,
                    title: '<p>Demo</p>',
                    description: null,
                    link: null,
                    target: '_self',
                    custom_fields: null,
                    image: { url: 'https://via.placeholder.com/600x300', alt: 'Demo' },
                    image_mobile: { url: null, alt: 'Demo' },
                },
            ],
        }
    },
}
</script>
