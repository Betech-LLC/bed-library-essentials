import { emotionalWords, stopWords } from "./words";

const WEIGHTS = {
  length: 20,
  keywordCount: 30,
  uniqueness: 10,
  readability: 10,
  emotion: 20,
  stopWords: 10,
};

const calculateTitle = (title, focusKeywords) => {
  // Define the maximum and minimum values for each factor
  const minLength = 50;
  const maxLength = 60;
  const maxKeywordCount = 2;
  const maxStopWordCount = 3;

  // Set a base score of 50
  let score = 50;
  const messages = [];

  // Factor 1: Length
  if (title.length >= minLength && title.length <= maxLength) {
    score += WEIGHTS.length;
  } else if (title.length < minLength) {
    score -= WEIGHTS.length;
    messages.push("Tiêu đề quá ngắn. Hãy đảm bảo có ít nhất 50 ký tự.");
  } else if (title.length > maxLength) {
    score -= WEIGHTS.length;
    messages.push("Tiêu đề quá dài. Hãy giữ độ dài dưới 60 ký tự.");
  }

  // Factor 2: Keyword count
  const keywordArr = focusKeywords.split(",");
  const keywordCount = keywordArr.filter((keyword) =>
    new RegExp(`\\b${keyword}\\b`, "gi").test(title)
  ).length;

  if (keywordCount >= 1 && keywordCount <= maxKeywordCount) {
    score += WEIGHTS.keywordCount;
    messages.push(`Tiêu đề chứa ${keywordCount} lần ${focusKeywords}.`);
  } else if (keywordCount === 0) {
    score -= WEIGHTS.keywordCount;
    messages.push(`${focusKeywords} không xuất hiện trong tiêu đề.`);
  } else if (keywordCount > maxKeywordCount) {
    score -= WEIGHTS.keywordCount;
    messages.push(
      `Tiêu đề chứa quá nhiều lần ${focusKeywords}. Hãy giữ trong khoảng 1-2 lần.`
    );
  }

  // Factor 3: Uniqueness
  // const pageTitle = document.title; // replace with the page title
  // if (pageTitle === title) {
  //   score -= 10;
  //   messages.push(
  //     "Tiêu đề trùng với tiêu đề của trang. Hãy sử dụng một tiêu đề duy nhất."
  //   );
  // } else {
  //   score += 10;
  //   messages.push("Tiêu đề độc đáo và phản ánh nội dung của trang.");
  // }

  // Factor 4: Readability
  // Check if the title contains any numbers or special characters
  const containsNumbers = /\d/.test(title);
  // const containsSpecialChars = /[!@#$%^&*()_+-=[]{};':"\|,.<>/?/]/.test(title);
  const containsSpecialChars = /[^\p{L}\p{N}\s.-]/u;

  if (!containsNumbers && !containsSpecialChars) {
    score += WEIGHTS.readability;
    messages.push("Tiêu đề dễ đọc và dễ hiểu.");
  } else {
    score -= WEIGHTS.readability;
    messages.push(
      "Tiêu đề chứa số hoặc ký tự đặc biệt. Hãy sử dụng tiêu đề dễ đọc hơn."
    );
  }

  // Factor 5: Emotion
  const emotionalRegex = new RegExp(`(${emotionalWords.join("|")})`, "i");
  if (emotionalRegex.test(title)) {
    score += WEIGHTS.emotion;
    messages.push(
      "Tiêu đề bao gồm nội dung cảm xúc. Tiêu đề cảm xúc có xu hướng thu hút nhiều nhấp chuột hơn."
    );
  } else {
    messages.push(
      "Tiêu đề nên bao gồm các từ có tính cảm xúc cao để thu hút người đọc."
    );
  }

  // Factor 6: Stop words
  const stopWordCount = title
    .split(" ")
    .filter((word) => stopWords.includes(word.toLowerCase())).length;

  if (stopWordCount === 0) {
    score += WEIGHTS.stopWords;
    messages.push("Tiêu đề không chứa những từ không cần thiết.");
  } else if (stopWordCount <= maxStopWordCount) {
    score += WEIGHTS.stopWords * 50;
    messages.push(
      `Tiêu đề chứa ${stopWordCount} từ không cần thiết. Hãy xem xét loại bỏ chúng.`
    );
  } else {
    score -= WEIGHTS.stopWords;
    messages.push(
      `Tiêu đề chứa quá nhiều từ không cần thiết. Hãy giữ trong khoảng ${maxStopWordCount} từ.`
    );
  }

  return { score, messages };
};

export default calculateTitle;
