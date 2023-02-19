// utils.js
export function countWords(text) {
  const words = text.match(/\b\w+\b/g);
  return words ? words.length : 0;
}

export function countSentences(text) {
  const sentences = text.match(/[.?!]/g);
  return sentences ? sentences.length : 0;
}

export function countSpecialCharacters(str) {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  return (str.match(specialCharacters) || []).length;
}
