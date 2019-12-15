const router = require('express').Router()
const { getQuestion, createQuestion } = require('../../services')

router.get('/', async (req,res)=>{
    const listQuestion = await getQuestion()
    res.json(listQuestion)
})
router.post('/', async (req, res)=>{
    const result = await createQuestion(req.body)
    console.log("Thanh cong")
    res.json(result)
})
module.exports = router