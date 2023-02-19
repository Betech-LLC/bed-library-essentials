import { stopWords } from "./words";

const calculateDescription = (description, focusKeywords) => {
  // Define the weights for each factor
  const lengthWeight = 20;
  const relevanceWeight = 25;
  const callToActionWeight = 15;
  const uniquenessWeight = 10;
  const readabilityWeight = 10;
  const duplicationWeight = 5;
  const specialCharactersWeight = 5;

  // Initialize the score and messages
  let score = 0;
  const messages = [];

  // Factor 1: Length
  const length = description.length;
  if (length >= 150 && length <= 160) {
    score += lengthWeight;
  } else if (length < 150) {
    const diff = 150 - length;
    score -= diff;
    messages.push(
      `Mô tả quá ngắn (${length} ký tự), nên tối thiểu là 150 ký tự để được đánh giá cao hơn.`
    );
  } else {
    const diff = length - 160;
    score -= diff;
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
    score += relevanceWeight;
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
    score += callToActionWeight;
  } else {
    messages.push(
      "Mô tả không có lời kêu gọi hành động, nên cân nhắc bổ sung."
    );
  }

  // Factor 4: Uniqueness
  const uniqueWords = new Set(description.split(" "));
  const ratio = uniqueWords.size / description.split(" ").length;
  if (ratio > 0.7) {
    score += uniquenessWeight;
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
    score += readabilityWeight;
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
      score -= duplicationWeight;
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
    score -= specialCharactersWeight;
    messages.push("Mô tả chứa quá nhiều ký tự đặc biệt, nên hạn chế sử dụng.");
  }

  return { score, messages };
};

export default calculateDescription;
