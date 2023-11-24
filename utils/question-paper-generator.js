const questionStore = require("../data/question-store");

function generateQuestionPaper(totalMarks, distribution) {
  const questionPaper = [];

  for (const difficulty in distribution) {
    const difficultyQuestions = questionStore.filter(
      (question) => question.difficulty === difficulty
    );

    const count = (distribution[difficulty] / 100) * totalMarks;
    let marksLeft = count;

    while (marksLeft > 0 && difficultyQuestions.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * difficultyQuestions.length
      );
      const selectedQuestion = difficultyQuestions.splice(randomIndex, 1)[0];

      if (selectedQuestion.marks <= marksLeft) {
        questionPaper.push(selectedQuestion);
        marksLeft -= selectedQuestion.marks;
      }
    }
  }

  return questionPaper;
}

module.exports = generateQuestionPaper;
