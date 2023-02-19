const calculateReadability = (content) => {
  const sentences = content.split(/[.!?]/);
  const words = content.split(/[^\w]+/);

  const averageWordsPerSentence = words.length / sentences.length;
  const averageSyllablesPerWord =
    words.reduce((total, word) => {
      const syllables =
        word
          .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
          .match(/[aeiouy]{1,2}/g)?.length || 0;
      return total + syllables;
    }, 0) / words.length;

  const fleschKincaidGradeLevel =
    0.39 * averageWordsPerSentence + 11.8 * averageSyllablesPerWord - 15.59;
  const colemanLiauIndex =
    5.88 * (words.length / sentences.length) -
    0.296 * (100 / words.length) -
    15.8;

  const gradeLevel = Math.round(
    (fleschKincaidGradeLevel + colemanLiauIndex) / 2
  );

  let score = 0;
  let message = "";

  if (gradeLevel < 6) {
    score = 100;
    message = "This content is very easy to read.";
  } else if (gradeLevel < 8) {
    score = 80;
    message = "This content is easy to read.";
  } else if (gradeLevel < 10) {
    score = 60;
    message = "This content is moderately easy to read.";
  } else if (gradeLevel < 12) {
    score = 40;
    message = "This content is difficult to read.";
  } else {
    score = 20;
    message = "This content is very difficult to read.";
  }

  return { score, message };
};

export default calculateReadability;
