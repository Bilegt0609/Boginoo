const UrlModel = require("../models/urlModel")

exports.getLinks = async  (req,  res ) => {
    const data = await UrlModel.find()
    res.send(data)
}