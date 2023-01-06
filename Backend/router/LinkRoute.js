const express = require('express')
const { getLinks } = require('../controller/LInkController')

const linkRouter = express.Router()

linkRouter.get("/link", getLinks)

module.exports = linkRouter