import { stopWords } from "./words";

const WEIGHTS = {
  length: 20,
  relevance: 25,
  callToAction: 15,
  uniqueness: 10,
  readability: 10,
  duplication: 5,
  specialCharacters: 5,
};

const calculateDescription = (description, focusKeywords) => {
  let score = 0;
  const messages = [];

  // Factor 1: Length
  const length = description.length;
  if (length >= 150 && length <= 160) {
    score += WEIGHTS.length;
  } else if (length < 150) {
    const diff = 150 - length;
    score -= diff * WEIGHTS.length;
    messages.push(
      `Mô tả quá ngắn (${length} ký tự), nên tối thiểu là 150 ký tự để được đánh giá cao hơn.`
    );
  } else {
    const diff = length - 160;
    score -= diff * WEIGHTS.length;
    messages.push(
      `Mô tả quá dài (${length} ký tự), nên tối đa là 160 ký tự để được đánh giá cao hơn.`
    );
  }

  // Factor 2: Relevance
  let keywordCount = 0;
  for (let i = 0; i < focusKeywords.length; i++) {
    const regex = new RegExp(focusKeywords[i], "gi");
    keywordCount += (description.match(regex) || []).length;
  }
  if (keywordCount > 0) {
    score += WEIGHTS.relevance;
  } else {
    messages.push("Mô tả không có các từ khóa liên quan đến nội dung trang.");
  }

  // Factor 3: Call to action
  const callToActionWords = ["Xem thêm", "Đọc thêm", "Tải về", "Đăng ký"]; // replace with relevant call-to-action words for your content
  let callToActionCount = 0;
  for (let i = 0; i < callToActionWords.length; i++) {
    const regex = new RegExp(callToActionWords[i], "gi");
    callToActionCount += (description.match(regex) || []).length;
  }
  if (callToActionCount > 0) {
    score += WEIGHTS.callToAction;
  } else {
    messages.push(
      "Mô tả không có lời kêu gọi hành động, nên cân nhắc bổ sung."
    );
  }

  // Factor 4: Uniqueness
  const uniqueWords = new Set(description.split(" "));
  const ratio = uniqueWords.size / description.split(" ").length;
  if (ratio > 0.7) {
    score += WEIGHTS.uniqueness;
  } else {
    messages.push(
      "Mô tả quá giống với các mô tả khác trên trang, nên cân nhắc chỉnh sửa."
    );
  }

  // Factor 5: Readability
  const sentences = description.split(". ");
  const sentenceLengths = sentences.map(
    (sentence) => sentence.split(" ").length
  );
  const averageLength =
    sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
  if (averageLength < 25) {
    score += WEIGHTS.readability;
  } else {
    messages.push(
      "Mô tả khó đọc, nên cân nhắc chia nhỏ thành các đoạn ngắn hơn."
    );
  }

  // Factor 6: Duplication
  const duplicates = new Set();
  const words = description.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (duplicates.has(word) && !stopWords.includes(word)) {
      score -= WEIGHTS.duplication;
      messages.push(
        `Mô tả chứa nhiều từ trùng lặp, ví dụ "${word}". Nên chỉnh sửa.`
      );
      break;
    }
    duplicates.add(word);
  }

  // Factor 7: Special characters
  const specialCharacters = ["%", "$", "!", "?", "*", "@"]; // replace with relevant special characters for your content
  let specialCharacterCount = 0;
  for (let i = 0; i < specialCharacters.length; i++) {
    const regex = new RegExp("\\" + specialCharacters[i], "g");
    specialCharacterCount += (description.match(regex) || []).length;
  }
  if (specialCharacterCount > 0) {
    score -= WEIGHTS.specialCharacters;
    messages.push("Mô tả chứa quá nhiều ký tự đặc biệt, nên hạn chế sử dụng.");
  }

  score = score < 0 ? 0 : score;

  return { score, messages };
};

export default calculateDescription;
