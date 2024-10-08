import { removeAccent } from '../helper'
import { callToActionKeywords, stopWords, WEIGHTS } from './const'
import { countSpecialCharacters } from './utils.js'

function calculateTitleScore(title, keywords) {
    let score = 0
    let factors = {}

    // Factor 1: Length
    factors.length = calculateLengthScore(title)

    // Factor 2: Relevance
    factors.relevance = calculateRelevanceScore(title, keywords)

    // Factor 3: Call-To-Action
    factors.callToAction = calculateCallToActionScore(title)

    // Factor 4: Uniqueness
    // factors.uniqueness = calculateUniquenessScore(title, []);

    // Factor 5: Readability
    factors.readability = calculateReadabilityScore(title)

    // Factor 6: Duplication
    factors.duplication = calculateDuplicationScore(title, [])

    // Factor 7: Special Characters
    factors.specialCharacters = calculateSpecialCharactersScore(title)

    Object.keys(factors).forEach((factor) => {
        score += (WEIGHTS.title[factor] * factors[factor].score) / 100
    })

    return {
        score: parseInt(score),
        factors,
    }
}

function calculateLengthScore(title) {
    const actualLength = title.length
    const idealLengthMin = 50
    const idealLength = 55

    let score = parseInt((1 - Math.abs(idealLength - actualLength) / idealLength) * 100)

    let message = `Độ dài của tiêu đề tốt với điểm số ${score}/100`
    if (actualLength < 30) {
        message = `Tiêu đề quá ngắn (${actualLength} ký tự), cần tối thiểu ${idealLengthMin} ký tự`
    } else if (actualLength > 70) {
        message = `Tiêu đề quá dài (${actualLength} ký tự), nên giảm xuống tối đa 70 ký tự`
    }

    score = score < 0 ? 0 : score

    return { score, message }
}

function calculateRelevanceScore(title, keywords) {
    const keywordList = keywords.split(',').map((x) => removeAccent(x)) || []

    if (keywordList.length === 0) {
        return {
            score: 0,
            message: 'Hãy nhập từ khóa để tính toán độ liên quan với tiêu đề',
        }
    }

    // Remove stop words and special characters from title
    const words = title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .split(' ')
        .filter((word) => !stopWords.includes(word))

    const keywordCount = words.filter((word) =>
        keywordList.map((str) => str.trim()).includes(word.toLowerCase())
    ).length
    const wordCount = words.length
    const keywordDensity = (keywordCount / wordCount) * 100

    // Calculate keyword score
    let score = 0
    let message = 'Tiêu đề không có từ khóa nào xuất hiện'
    if (keywordDensity >= 2.5) {
        score = 100
    } else if (keywordDensity >= 0.5) {
        score = (keywordDensity - 0.5) * (100 / 2)
    }

    // Return keyword score and details
    message = `Từ khóa "${keywords}" xuất hiện ${keywordCount} lần trong tiêu đề, tỉ lệ xuất hiện là ${keywordDensity.toFixed(
        2
    )}%.`
    return { score, message }
}

function calculateCallToActionScore(content) {
    const contentRemovedAccent = removeAccent(content)
    const callToActionCount = callToActionKeywords.filter((keyword) => contentRemovedAccent.includes(keyword)).length

    const callToActionDensity = (callToActionCount / content.split(' ').length) * 100

    let score = 0
    let message = `Tiêu đề của bạn chứa ${callToActionCount} yếu tố Call-to-Action (${score} điểm). Hoàn hảo!`
    if (callToActionDensity >= 2.5) {
        score = 100
    } else if (callToActionDensity >= 0.5) {
        score = (callToActionDensity - 0.5) * (100 / 2)
    }

    message = `Call-to-Action xuất hiện ${callToActionCount} lần trong tiêu đề, tỉ lệ xuất hiện là ${callToActionDensity.toFixed(
        2
    )}%.`

    return { score, message }
}

function calculateUniquenessScore(title, previousTitles = []) {
    const uniqueWords = new Set(title.toLowerCase().split(' '))
    const totalUniqueWords = uniqueWords.size
    const previousTitlesLowerCase = previousTitles.map((title) => title.toLowerCase())
    const isDuplicate = previousTitlesLowerCase.includes(title.toLowerCase())
    const score = isDuplicate ? 0 : (totalUniqueWords / title.split(' ').length) * 100

    if (isDuplicate) {
        return {
            score: 0,
            message: 'Tiêu đề đã được sử dụng trước đó, cần thay đổi để đạt yếu tố uniqueness',
        }
    } else if (score < 20) {
        return {
            score: score.toFixed(2),
            message: `Tiêu đề không đạt yếu tố uniqueness (${score.toFixed(2)} điểm)`,
        }
    } else if (score >= 20 && score < 40) {
        return {
            score: score.toFixed(2),
            message: `Tiêu đề đạt yếu tố uniqueness cần cải thiện (${score.toFixed(2)} điểm)`,
        }
    } else if (score >= 40 && score < 60) {
        return {
            score: score.toFixed(2),
            message: `Tiêu đề đạt yếu tố uniqueness ở mức trung bình (${score.toFixed(2)} điểm)`,
        }
    } else if (score >= 60 && score < 80) {
        return {
            score: score.toFixed(2),
            message: `Tiêu đề đạt yếu tố uniqueness tốt (${score.toFixed(2)} điểm)`,
        }
    } else {
        return {
            score: score.toFixed(2),
            message: `Tiêu đề đạt yếu tố uniqueness tuyệt vời (${score.toFixed(2)} điểm)`,
        }
    }
}

function calculateReadabilityScore(title) {
    const words = title.split(' ')
    const numOfWords = words.length

    const numOfSyllables = words.reduce((acc, word) => {
        const syllables = word.split(/[aeiouy]+/).filter((syllable) => syllable.length > 0)
        return acc + syllables.length
    }, 0)

    const numOfSentences = title.split(/[.!?]/).length

    let score = parseInt(206.835 - 1.015 * (numOfWords / numOfSentences) - 84.6 * (numOfSyllables / numOfWords))

    let message = `Điểm yếu tố Readability của tiêu đề là ${score}/100. `
    if (score >= 90) {
        message += 'Tiêu đề có độ khó rất thấp, phù hợp cho độc giả từ lớp 1 trở lên.'
    } else if (score >= 80) {
        message += 'Tiêu đề có độ khó thấp, phù hợp cho độc giả từ lớp 3 trở lên.'
    } else if (score >= 70) {
        message += 'Tiêu đề có độ khó trung bình, phù hợp cho độc giả từ lớp 5 trở lên.'
    } else if (score >= 60) {
        message += 'Tiêu đề có độ khó cao, phù hợp cho độc giả từ lớp 7 trở lên.'
    } else if (score >= 50) {
        message += 'Tiêu đề có độ khó rất cao, phù hợp cho độc giả từ lớp 9 trở lên.'
    } else {
        message += 'Tiêu đề có độ khó cực cao, chỉ phù hợp cho độc giả có trình độ cao.'
    }

    return { score, message }
}

function calculateSpecialCharactersScore(title) {
    const specialCharactersCount = countSpecialCharacters(title)

    const specialCharactersThreshold = 2

    const score = parseInt(
        100 -
            (specialCharactersCount > specialCharactersThreshold
                ? (specialCharactersCount - specialCharactersThreshold) * 10
                : 0)
    )

    let message
    if (score >= 80) {
        message = `Tuyệt vời! Số lượng ký tự đặc biệt ở tiêu đề của bạn rất ít và rất tốt cho SEO!`
    } else if (score >= 60) {
        message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn khá tốt, hãy xem xét để tối ưu thêm!`
    } else {
        message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn chưa tốt, cần xáo bỏ để cải thiện SEO!`
    }

    return { score, message }
}

function calculateDuplicationScore(title, titles) {
    // Kiểm tra mảng titles nếu rỗng thì trả về điểm 100
    if (titles.length === 0) {
        return {
            score: 100,
            message: 'Không có tiêu đề để so sánh, điểm yếu tố Duplication là 100.',
        }
    }

    // Chuyển đổi các từ trong tiêu đề và tiêu đề khác thành chữ thường và loại bỏ các ký tự đặc biệt
    const words = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .split(' ')
    const wordsList = titles.map((t) =>
        t
            .toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .split(' ')
    )

    // Đếm số lượng từ trùng nhau trong tiêu đề và các tiêu đề khác
    let commonWords = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < wordsList.length; j++) {
            if (wordsList[j].includes(words[i])) {
                commonWords++
                break
            }
        }
    }

    // Tính toán điểm Duplication theo thang điểm 100
    const score = parseInt(Math.round((commonWords / words.length) * 100))

    let message
    if (score >= 80) {
        message = `Tuyệt vời! Số lượng ký tự đặc biệt ở tiêu đề của bạn rất ít và rất tốt cho SEO!`
    } else if (score >= 60) {
        message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn khá tốt, hãy xem xét để tối ưu thêm`
    } else {
        message = `Số lượng ký tự đặc biệt ở tiêu đề của bạn chưa tốt, cần xóa bỏ để cải thiện SEO!`
    }

    // Trả về kết quả
    return { score, message }
}

export default calculateTitleScore
