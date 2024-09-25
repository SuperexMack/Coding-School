const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const userData = require("./Routes/User")
require('dotenv').config({ path: path.resolve(__dirname, "./prisma/.env") });
const PORT = process.env.PORT
const database = process.env.DATABASE_URL || 4000

app.use(cors())
app.u

console.log(PORT)
console.log(database)

app.listen(PORT , ()=>{
    console.log(`your server is running on the port ${PORT}`)
})