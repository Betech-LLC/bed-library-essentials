function calculateKeywordsScore(keywords) {
    let score = 0
    let factors = {}

    factors.keywords = calculateKeywordsRatioScore(keywords)

    return {
        score: parseInt(score),
        factors,
    }
}

function calculateKeywordsRatioScore(keywords) {
    const keywordsCount = keywords.split(',').length

    if (keywordsCount === 0) {
        return { score: 0, message: 'Hãy nhập từ khóa để tính toán độ liên quan với tiêu đề' }
    }

    const score = parseInt((keywordsCount / 5) * 100)

    let message
    if (keywordsCount >= 5) {
        message = `Tuyệt vời! Số lượng ký tự đặc biệt ở tiêu đề của bạn rất ít và rất tốt cho SEO!`
    } else if (keywordsCount >= 3) {
        message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn khá tốt, cần xóa bỏ để tốt hơn cho SEO!`
      } else if (keywordsCount >= 1) {
          message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn khá tốt, cần xóa bỏ để tốt hơn cho SEO!`
    } else {
        message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn chưa tốt, cần xóa bỏ để cải thiện SEO!`
    }

    return { score, message }
}

export default calculateKeywordsScore
