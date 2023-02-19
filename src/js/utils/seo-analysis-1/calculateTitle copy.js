import { emotionalWords, stopWords } from "./words";

const calculateTitle = (title, focusKeywords) => {
  // Set a base score of 50
  let score = 50;
  const messages = [];

  // Factor 1: Length
  if (title.length >= 50 && title.length <= 60) {
    score += 10;
  } else if (title.length < 50) {
    score -= 10;
    messages.push("Tiêu đề quá ngắn. Hãy đảm bảo có ít nhất 50 ký tự.");
  } else if (title.length > 60) {
    score -= 20;
    messages.push("Tiêu đề quá dài. Hãy giữ độ dài dưới 60 ký tự.");
  }

  // Factor 2: Keyword count
  const keywordArr = focusKeywords.split(",");
  const keywordCount = keywordArr.filter((keyword) =>
    new RegExp(`\\b${keyword}\\b`, "gi").test(title)
  ).length;

  if (keywordCount >= 1 && keywordCount <= 2) {
    score += 20;
    messages.push(`Tiêu đề chứa ${keywordCount} lần ${focusKeywords}.`);
  } else if (keywordCount === 0) {
    score -= 10;
    messages.push(`${focusKeywords} không xuất hiện trong tiêu đề.`);
  } else if (keywordCount > 2) {
    score -= 20;
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
  const complexRegex = /[^\p{L}\p{N}\s.-]/u;
  if (complexRegex.test(title)) {
    score -= 10;
    messages.push(
      "Tiêu đề chứa các thuật ngữ phức tạp hoặc kỹ thuật. Hãy đảm bảo dễ đọc và hiểu được."
    );
  } else {
    score += 10;
    messages.push("Tiêu đề dễ đọc và hiểu được.");
  }

  // Factor 5: Emotion
  const emotionalRegex = new RegExp(`(${emotionalWords.join("|")})`, "i");
  if (emotionalRegex.test(title)) {
    score += 10;
    messages.push(
      "Tiêu đề bao gồm nội dung cảm xúc. Tiêu đề cảm xúc có xu hướng thu hút nhiều nhấp chuột hơn."
    );
  } else {
    messages.push(
      "Tiêu đề nên bao gồm các từ có tính cảm xúc cao để thu hút người đọc."
    );
  }

  // Factor 6: Stop words
  const stopWordsRegex = new RegExp(`(${stopWords.join("|")})`, "gi");
  const stopWordCount = (title.match(stopWordsRegex) || []).length;
  if (stopWordCount > 0) {
    score -= stopWordCount * 5;
    messages.push(
      `Tiêu đề chứa ${stopWordCount} từ ngữ không cần thiết. Hãy xem xét loại bỏ chúng để tăng điểm.`
    );
  }

  return { score, messages };
};

export default calculateTitle;
