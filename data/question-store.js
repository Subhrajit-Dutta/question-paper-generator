const fs = require("fs");
const path = require("path");

const Question = require("../models/question");

const questionsJsonPath = path.join(__dirname, "questions.json");
const questionsJson = fs.readFileSync(questionsJsonPath, "utf8");
const questionStore = JSON.parse(questionsJson);

module.exports = questionStore;
