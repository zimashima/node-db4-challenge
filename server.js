const express = require("express")

const recipesRouter = require("./recipes/router")
const shoppingListRouter = require("./ingredients/router")
const instructionsRouter = require("./instructions/router")

const server = express()

server.use(express.json())
server.use(express.Router())

server.get('/', (req, res)=> {
    res.send(`<h1>Congratulations!</h1><h3>Your Recipe Server is up and running!</h3>`)
})

server.use("/api/recipes", recipesRouter )
server.use("/api/recipes/:recipeId/shoppingList", shoppingListRouter)
server.use("/api/recipes/:recipeId/instructions", instructionsRouter)

module.exports = server