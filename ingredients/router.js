const express = require("express")
const db = require("./model")

const router = express.Router()

router.get("/", async (req, res, next)=> {
    try {
        const shopping = await db.getShoppingList(req.params.id)
        res.json(200).json(shopping)
    }
    catch (err){
        next(err)
    }
    
})

module.exports = router