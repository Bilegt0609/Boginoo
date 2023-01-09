import UrlModel from "../models/urlModel.js"

const getLinks = async  (req,  res ) => {
    const data = await UrlModel.find()
    res.send(data)
}

export default getLinks;