import { stopWords, WEIGHTS } from "./const";
import { countSpecialCharacters } from "./utils.js";

function calculateContentScore(title, keywords) {
  let score = 0;
  let factors = {};

  // Factor 1: Length
  factors.length = calculateLengthScore(title);

  // Factor 2: Relevance
  factors.relevance = calculateRelevanceScore(title, keywords);

  // Factor 3: Call-To-Action
  factors.callToAction = calculateCallToActionScore(title);

  // Factor 4: Uniqueness
  // factors.uniqueness = calculateUniquenessScore(title, []);

  // Factor 5: Readability
  factors.readability = calculateReadabilityScore(title);

  // Factor 6: Duplication
  factors.duplication = calculateDuplicationScore(title, []);

  // Factor 7: Special Characters
  factors.specialCharacters = calculateSpecialCharactersScore(title);

  Object.keys(factors).forEach((factor) => {
    score += (WEIGHTS.title[factor] * factors[factor].score) / 100;
  });

  return {
    score: parseInt(score),
    factors,
  };
}

function calculateLengthScore(title) {
  const actualLength = title.length;
  const idealLength = 55;
  const score = parseInt(
    (1 - Math.abs(idealLength - actualLength) / idealLength) * 100
  );

  let message = `Điểm số của tiêu đề: ${score}`;

  if (actualLength < 30) {
    message = `Tiêu đề quá ngắn (${actualLength} ký tự)`;
  } else if (actualLength > 70) {
    message = `Tiêu đề quá dài (${actualLength} ký tự)`;
  }

  return { score, message };
}

function calculateRelevanceScore(title, keywords) {
  const keywordList = keywords?.toLowerCase().split(",") || [];

  // Remove stop words and special characters from title
  const words = title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter((word) => !stopWords.includes(word));

  const keywordCount = words.filter((word) =>
    keywordList.map((str) => str.trim()).includes(word.toLowerCase())
  ).length;
  const wordCount = words.length;
  const keywordDensity = (keywordCount / wordCount) * 100;

  // Calculate keyword score
  let score = 0;
  let message = "Tiêu đề không có từ khóa nào xuất hiện trong title";
  if (keywordDensity >= 2.5) {
    score = 100;
  } else if (keywordDensity >= 0.5) {
    score = (keywordDensity - 0.5) * (100 / 2);
  }

  // Return keyword score and details
  message = `Từ khóa "${keywordList}" xuất hiện ${keywordCount} lần trong title, tỉ lệ xuất hiện là ${keywordDensity.toFixed(
    2
  )}%.`;
  return { score, message };
}

function calculateCallToActionScore(title) {
  const callToActionKeywords = [
    "mua",
    "tải xuống",
    "đăng ký",
    "đặt hàng",
    "liên hệ",
  ];
  const titleWords = title.split(" ");
  const callToActionCount = titleWords.filter((word) =>
    callToActionKeywords.includes(word.toLowerCase())
  ).length;
  const score = parseInt((callToActionCount / titleWords.length) * 100);

  if (callToActionCount === 0) {
    return {
      score: 0,
      message: "Tiêu đề không chứa yếu tố Call to Action",
    };
  } else if (score < 20) {
    return {
      score,
      message: `Tiêu đề chứa ${callToActionCount} yếu tố Call to Action (${score} điểm)`,
    };
  } else if (score >= 20 && score < 40) {
    return {
      score,
      message: `Tiêu đề chứa ${callToActionCount} yếu tố Call to Action, cần cải thiện (${score} điểm)`,
    };
  } else if (score >= 40 && score < 60) {
    return {
      score,
      message: `Tiêu đề chứa ${callToActionCount} yếu tố Call to Action, đạt chuẩn (${score} điểm)`,
    };
  } else if (score >= 60 && score < 80) {
    return {
      score,
      message: `Tiêu đề chứa ${callToActionCount} yếu tố Call to Action, tốt (${score} điểm)`,
    };
  } else {
    return {
      score,
      message: `Tiêu đề chứa ${callToActionCount} yếu tố Call to Action, tuyệt vời (${score} điểm)`,
    };
  }
}

function calculateUniquenessScore(title, previousTitles = []) {
  const uniqueWords = new Set(title.toLowerCase().split(" "));
  const totalUniqueWords = uniqueWords.size;
  const previousTitlesLowerCase = previousTitles.map((title) =>
    title.toLowerCase()
  );
  const isDuplicate = previousTitlesLowerCase.includes(title.toLowerCase());
  const score = isDuplicate
    ? 0
    : (totalUniqueWords / title.split(" ").length) * 100;

  if (isDuplicate) {
    return {
      score: 0,
      message:
        "Tiêu đề đã được sử dụng trước đó, cần thay đổi để đạt yếu tố uniqueness",
    };
  } else if (score < 20) {
    return {
      score: score.toFixed(2),
      message: `Tiêu đề không đạt yếu tố uniqueness (${score.toFixed(2)} điểm)`,
    };
  } else if (score >= 20 && score < 40) {
    return {
      score: score.toFixed(2),
      message: `Tiêu đề đạt yếu tố uniqueness cần cải thiện (${score.toFixed(
        2
      )} điểm)`,
    };
  } else if (score >= 40 && score < 60) {
    return {
      score: score.toFixed(2),
      message: `Tiêu đề đạt yếu tố uniqueness ở mức trung bình (${score.toFixed(
        2
      )} điểm)`,
    };
  } else if (score >= 60 && score < 80) {
    return {
      score: score.toFixed(2),
      message: `Tiêu đề đạt yếu tố uniqueness tốt (${score.toFixed(2)} điểm)`,
    };
  } else {
    return {
      score: score.toFixed(2),
      message: `Tiêu đề đạt yếu tố uniqueness tuyệt vời (${score.toFixed(
        2
      )} điểm)`,
    };
  }
}

function calculateReadabilityScore(title) {
  const words = title.split(" ");
  const numOfWords = words.length;

  const numOfSyllables = words.reduce((acc, word) => {
    const syllables = word
      .split(/[aeiouy]+/)
      .filter((syllable) => syllable.length > 0);
    return acc + syllables.length;
  }, 0);

  const numOfSentences = title.split(/[.!?]/).length;

  const score = parseInt(
    206.835 -
      1.015 * (numOfWords / numOfSentences) -
      84.6 * (numOfSyllables / numOfWords)
  );

  const message = `Điểm yếu tố Readability của title là ${score}/100`;

  return { score, message };
}

function calculateSpecialCharactersScore(title) {
  const specialCharactersCount = countSpecialCharacters(title);

  const specialCharactersThreshold = 2;

  const score = parseInt(
    100 -
      (specialCharactersCount > specialCharactersThreshold
        ? (specialCharactersCount - specialCharactersThreshold) * 10
        : 0)
  );

  return {
    score,
    message: `Tiêu đề của bạn có một số ký tự đặc biệt, tính điểm theo yếu tố này sẽ giúp đánh giá khả năng phù hợp với SEO của tiêu đề.
    Điểm số của tiêu đề của bạn là ${score}/100. Điểm số này được tính dựa trên yếu tố:
    - Số ký tự đặc biệt: ${score}/100.
    Một điểm số cao hơn cho thấy tiêu đề của bạn không quá chứa các ký tự đặc biệt.`,
  };
}

function calculateDuplicationScore(title, titles) {
  // Chuyển đổi các từ trong tiêu đề và tiêu đề khác thành chữ thường và loại bỏ các ký tự đặc biệt
  const words = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(" ");
  const wordsList = titles.map((t) =>
    t
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(" ")
  );

  // Đếm số lượng từ trùng nhau trong tiêu đề và các tiêu đề khác
  let commonWords = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < wordsList.length; j++) {
      if (wordsList[j].includes(words[i])) {
        commonWords++;
        break;
      }
    }
  }

  // Tính toán điểm Duplication theo thang điểm 100
  const score = parseInt(Math.round((commonWords / words.length) * 100));

  // Tạo thông báo chi tiết cho người dùng
  const message = `Điểm yếu tố Duplication của title là ${score}.`;

  // Trả về kết quả
  return { score, message };
}

export default calculateContentScore;
