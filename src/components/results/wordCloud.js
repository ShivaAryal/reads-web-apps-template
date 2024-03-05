// WordCloud.js
import ReactWordcloud from "react-wordcloud";

const WordCloud = ({ text }) => {
  // Define a list of common stop words
  const stopWords = [
    "the",
    "and",
    "is",
    "in",
    "to",
    "of",
    "it",
    "for",
    "with",
    "as",
  ];

  // Remove special characters and convert to lowercase
  const cleanedText = text.replace(/[^\w\s]/g, "").toLowerCase();

  // Remove stop words from the cleaned text
  const filteredText = cleanedText
    .split(" ")
    .filter((word) => !stopWords.includes(word))
    .join(" ");

  // Count the frequency of each word in the filtered text
  const wordFrequency = {};
  filteredText.split(" ").forEach((word) => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });

  // Convert the word frequency object to an array of words with weights
  const wordCloudData = Object.keys(wordFrequency).map((word) => ({
    text: word,
    value: wordFrequency[word],
  }));

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactWordcloud words={wordCloudData} />
    </div>
  );
};

export default WordCloud;
