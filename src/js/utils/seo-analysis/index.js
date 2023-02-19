import calculateContent from "./calculateContent";
import calculateDescription from "./calculateDescription";
import calculateImage from "./calculateImage";
import calculateReadability from "./calculateReadability";
import calculateTitle from "./calculateTitle";

const WEIGHTS = {
  title: 0.2,
  description: 0.1,
  content: 0.5,
  image: 0.1,
  readability: 0.1,
};

const seoAnalysis = ({ title, description, content, keyword }) => {
  const titleScore = calculateTitle(title, keyword);
  const descriptionScore = calculateDescription(description, keyword);
  const contentScore = calculateContent(content, keyword);
  const imageScore = calculateImage(content);
  const readabilityScore = calculateReadability(content);

  const totalWeight = Object.values(WEIGHTS).reduce(
    (total, weight) => total + weight,
    0
  );

  const weightedTitleScore = titleScore.score * WEIGHTS.title;
  const weightedDescriptionScore = descriptionScore.score * WEIGHTS.description;
  const weightedContentScore = contentScore.score * WEIGHTS.content;
  const weightedImageScore = imageScore.score * WEIGHTS.image;
  const weightedReadabilityScore = readabilityScore.score * WEIGHTS.readability;

  const averageScore =
    (weightedTitleScore +
      weightedDescriptionScore +
      weightedContentScore +
      weightedImageScore +
      weightedReadabilityScore) /
    totalWeight;

  const factors = {
    title: titleScore,
    description: descriptionScore,
    content: contentScore,
    image: imageScore,
    readability: readabilityScore,
  };

  const overallScore = Math.round(averageScore);
  const overallMessage = `Overall score is ${overallScore}.`;

  return { factors, overallScore, overallMessage };
};

export { seoAnalysis };
