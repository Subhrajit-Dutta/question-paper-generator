const generateQuestionPaper = require("./utils/question-paper-generator");

const totalMarks = 100;
const distribution = {
  Easy: 20,
  Medium: 30,
  Hard: 50,
};

const generatedQuestionPaper = generateQuestionPaper(totalMarks, distribution);
console.log(generatedQuestionPaper);
