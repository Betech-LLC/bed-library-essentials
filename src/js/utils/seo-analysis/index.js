import calculateContentScore from "./calculateContentScore";
import calculateDescriptionScore from "./calculateDescriptionScore";
import calculateTitleScore from "./calculateTitleScore";

const seoAnalysis = ({
  title = null,
  description = null,
  content = null,
  keywords = null,
}) => {
  const titleScore = calculateTitleScore(title, keywords);
  const descriptionScore = calculateDescriptionScore(description, keywords);
  const contentScore = calculateContentScore(content, keywords);

  return { titleScore, descriptionScore, contentScore };
};

export { seoAnalysis };
