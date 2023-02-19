import calculateTitleScore from "./calculateTitleScore";

const contentAnalysis = ({ title, description, content, keywords = null }) => {
  const titleScore = calculateTitleScore(title, keywords);

  return { titleScore };
};

export { contentAnalysis };
