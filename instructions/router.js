const express = require("express")
const db = require("./model")

const router = express.Router()

router.get("/", async (req, res, next)=> {
    try {
        const instructions = db.getInstructions(req.params.id)
        res.status(200).json(instructions)
    }
    catch (err){
        next(err)
    }
    
})

module.exports = router