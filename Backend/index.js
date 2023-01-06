const express = require("express")
const app = express()
const mongoose = require("mongoose")
const linkRouter = require("./router/LinkRoute")
const cors = require("cors")

app.use(express.json());
app.use(cors())
app.use(linkRouter)

const URI = 'mongodb+srv://tugu_dean:lol@cluster0.mc4eln1.mongodb.net/boginoo?retryWrites=true&w=majority'

const connection = mongoose.connect
connection(URI)
mongoose.connection.once("open" ,() => {
    console.log("succes mongoDV")
})

app.listen(8888, () => {
    console.log("server liston port in 8888")
}) 