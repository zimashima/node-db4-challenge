const db = require("../data/dbConfig")

module.exports = {
    getInstructions
}

function getInstructions(recipe_id){
    return db("instructions").where("recipe_id", recipe_id).first()
}

