const { Question } = require('../models')

const getQuestion = async () => {
    const listQuestion = await Question.find({})
    return listQuestion
}
const createQuestion = async ({ question, answer_1, answer_2, answer_3, answer_4, answer_true}) => {
    const newQuestion = new Question({
        question,
        answer_1,
        answer_2,
        answer_3,
        answer_4,
        answer_true
    })
    await newQuestion.save()
    return newQuestion
}
module.exports = { getQuestion, createQuestion }

