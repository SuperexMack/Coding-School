const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const userData = require("./Routes/User")
const createProblem = require("./Routes/CreateProblems")
require('dotenv').config({ path: path.resolve(__dirname, "./prisma/.env") });
const PORT = process.env.PORT
const database = process.env.DATABASE_URL || 4000

app.use(cors())
app.use(express.json())

app.use("/v1/user" , userData)
app.use("/v1/problem" , createProblem)

console.log(PORT)
console.log(database)

app.listen(PORT , ()=>{
    console.log(`your server is running on the port ${PORT}`)
})