import { stopWords, vowelSounds } from "./words";

const calculateContent = (content) => {
  const wordCount = getWordCount(content);
  const readabilityScore = calculateReadabilityScore(content);
  const keywordDensityScore = calculateKeywordDensityScore(content);
  const imageAltTagsScore = calculateImageAltTagsScore(content);
  const internalLinksScore = calculateInternalLinksScore(content);

  // Weighting factors can be adjusted as necessary
  const score =
    wordCount * 0.1 +
    readabilityScore * 0.3 +
    keywordDensityScore * 0.3 +
    imageAltTagsScore * 0.15 +
    internalLinksScore * 0.15;

  return score;
};

function getWordCount(text) {
  return text.trim().split(/\s+/).length;
}

function calculateReadabilityScore(text) {
  // Remove all non-word characters
  const cleanedText = text.replace(/[^\w\s]/g, "");

  // Split text into words and remove stop words
  const words = cleanedText
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => !stopWords.includes(word));

  // Calculate total number of words
  const numWords = words.length;

  // Calculate number of sentences
  const numSentences = cleanedText
    .split(/[\.\?!]/)
    .filter((sentence) => sentence.length > 0).length;

  // Calculate average words per sentence
  const wordsPerSentence = numWords / numSentences;

  // Calculate average syllables per word
  const syllablesPerWord =
    words.reduce((totalSyllables, word) => {
      const numSyllables = countSyllables(word);
      return totalSyllables + numSyllables;
    }, 0) / numWords;

  // Calculate Flesch-Kincaid Reading Ease score
  const readingEaseScore =
    206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord;

  return Math.round(readingEaseScore);
}

function calculateKeywordDensityScore(content, keyword = null) {
  const wordCount = getWordCount(content);
  if (wordCount === 0) return 0;

  const tokens = content.split(/[\s,.?!;:()<>[\]{}-]+/);
  const keywordCount = tokens.reduce((count, token) => {
    return count + (token.toLowerCase() === keyword?.toLowerCase() ? 1 : 0);
  }, 0);

  return (keywordCount / wordCount) * 100;
}

function calculateImageAltTagsScore(content) {
  // Check if there are any <img> tags with non-empty alt tags
  const imgTags = content.match(/<img\s.*?\/?>/gi) || [];
  const numImages = imgTags.length;
  let numImagesWithAltTags = 0;
  for (let i = 0; i < numImages; i++) {
    const imgTag = imgTags[i];
    const altTagMatch = imgTag.match(/alt="(.*?)"/i);
    if (altTagMatch && altTagMatch[1].trim() !== "") {
      numImagesWithAltTags++;
    }
  }

  // Calculate the score
  if (numImages > 0) {
    const imageAltTagDensity = numImagesWithAltTags / numImages;
    return Math.min(1, imageAltTagDensity * 2);
  } else {
    return 1;
  }
}

function calculateInternalLinksScore(content) {
  // Define the internal link count threshold
  const threshold = 3;

  // Define the score factor for internal link count
  const factor = 2;

  // Get all the internal links in the content
  const internalLinks = content.match(/href=["']#.+?["']/g) || [];

  // Calculate the internal link count score based on the number of internal links
  const internalLinkCount = internalLinks.length;
  const internalLinkCountScore =
    internalLinkCount >= threshold ? 1 : internalLinkCount / threshold;

  // Calculate the overall internal links score based on the internal link count score
  const internalLinksScore = internalLinkCountScore * factor;

  return internalLinksScore;
}

function countSyllables(word) {
  // Vietnamese is a tonal language, so counting syllables can be tricky
  // This is a simple heuristic that assumes each vowel sound is one syllable
  let numSyllables = 0;

  // Iterate over each character in the word
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const nextChar = word[i + 1];
    const prevChar = word[i - 1];

    // If the character is a vowel sound, increment the syllable count
    if (vowelSounds.includes(char)) {
      numSyllables++;

      // If the next character is also a vowel sound, skip it
      if (vowelSounds.includes(nextChar)) {
        i++;
      }

      // If the previous character is also a vowel sound, decrement the syllable count
      // This handles diphthongs and tripthongs
      if (vowelSounds.includes(prevChar)) {
        numSyllables--;
      }
    }
  }

  // Vietnamese words always have at least one syllable
  return Math.max(numSyllables, 1);
}

export default calculateContent;
