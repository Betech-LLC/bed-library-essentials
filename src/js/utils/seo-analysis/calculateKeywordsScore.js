import { WEIGHTS } from './const'

function calculateKeywordsScore(keywords) {
    let score = 0
    let factors = {}

    factors.count = calculateKeywordsRatioScore(keywords)

    Object.keys(factors).forEach((factor) => {
        score += factors[factor].score / Object.keys(factors).length
    })

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
        message = `Tuyệt vời! Số lượng từ khóa / keywords của bạn nhiều và rất tốt cho SEO!`
    } else if (keywordsCount >= 3) {
        message = `Số lượng từ khóa / keywords của bạn khá ít, cần bổ sung thêm để tốt hơn cho SEO!`
    } else if (keywordsCount >= 1) {
        message = `Số lượng từ khóa / keywords của bạn ít, cần bổ sung thêm để tốt hơn cho SEO!`
    } else {
        message = `Từ khóa / keywords của bạn chưa có, cần bổ sung để cải thiện SEO!`
    }

    return { score, message }
}

export default calculateKeywordsScore
