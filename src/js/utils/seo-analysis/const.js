const WEIGHTS = {
  title: {
    length: 10,
    relevance: 60,
    callToAction: 20,
    readability: 5,
    duplication: 2.5,
    specialCharacters: 2.5,
  },
  description: {
    length: 20,
    relevance: 40,
    callToAction: 20,
    readability: 10,
    duplication: 5,
    specialCharacters: 5,
  },
  content: {
    length: 16.67,
    relevance: 20.83,
    callToAction: 8.33,
    readability: 12.5,
    duplication: 12.5,
    specialCharacters: 4.17,
    images: 4.17,
    videos: 4.17,
    links: 4.17,
  },
};

const emotionalWords = [
  "tuyệt vời",
  "ấn tượng",
  "hứng thú",
  "tuyệt nhất",
  "hấp dẫn",
];

const stopWords = [
  "và",
  "của",
  "trên",
  "dưới",
  "này",
  "đó",
  "ở đây",
  "để",
  "có thể",
  "nên",
  "được",
  "không",
  "là",
  "cũng",
  "hay",
  "thì",
  "nhưng",
  "vì",
  "hoặc",
  "một số",
  "trong số đó",
  "chúng ta",
  "của chúng ta",
  "bạn",
  "của bạn",
  "anh",
  "của anh",
  "chị",
  "của chị",
  "em",
  "của em",
  "họ",
  "của họ",
  "cả",
  "với",
  "thêm",
  "lại",
  "đang",
  "vẫn",
  "giờ",
  "đến",
  "rồi",
];

const vowelSounds =
  "aeiouyăâêôơưáàảãạấầẩẫậắằẳẵặéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữự";

const callToActionKeywords = [
  "mua",
  "tải xuống",
  "mua ngay",
  "tải về",
  "đăng ký",
  "tham gia ngay",
  "xem thêm",
  "tìm hiểu thêm",
  "nhận ngay",
  "đặt hàng",
  "gửi yêu cầu",
  "đăng nhập",
  "đăng ký nhận tin tức",
  "theo dõi chúng tôi",
  "chia sẻ",
  "bình luận",
  "đánh giá",
  "trò chuyện",
  "liên hệ",
  "truy cập ngay",
  "tìm kiếm",
  "tạo tài khoản",
  "đăng ký tài khoản",
  "tải ứng dụng",
  "đặt lịch hẹn",
  "xem sản phẩm",
  "đăng ký dịch vụ",
  "đặt mua sản phẩm",
  "tìm hiểu sản phẩm",
  "tìm hiểu dịch vụ",
  "tìm hiểu thêm về chúng tôi",
  "tham gia chương trình khuyến mãi",
  "đăng ký tham gia sự kiện",
  "đặt vé",
  "đặt chỗ",
  "đăng ký học",
  "tìm kiếm việc làm",
  "tìm hiểu thêm về công ty",
  "đăng ký làm đối tác",
];

const MESSAGE_LEVELS = {
  ERROR: 1,
  WARNING: 2,
  GOOD: 3,
  PERFECT: 4,
};

export {
  WEIGHTS,
  MESSAGE_LEVELS,
  emotionalWords,
  stopWords,
  vowelSounds,
  callToActionKeywords,
};

