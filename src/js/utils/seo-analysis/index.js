import calculateContentScore from './calculateContentScore'
import calculateDescriptionScore from './calculateDescriptionScore'
import calculateKeywordsScore from './calculateKeywordsScore'
import calculateTitleScore from './calculateTitleScore'

const seoAnalysis = ({ title = null, description = null, content = null, keywords = null }) => {
    const keywordsScore = calculateKeywordsScore(keywords)
    const titleScore = calculateTitleScore(title, keywords)
    const descriptionScore = calculateDescriptionScore(description, keywords)
    const contentScore = calculateContentScore(content, keywords)

    return { keywordsScore, titleScore, descriptionScore, contentScore  }
}

export { seoAnalysis }
