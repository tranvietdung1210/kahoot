const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    answer_1: {
        type: String,
        require: true
    },
    answer_2: {
        type: String,
        require: true
    },
    answer_3: {
        type: String,
        require: true
    },
    answer_4: {
        type: String,
        require: true
    },
    answer_true: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Question", QuestionSchema)
