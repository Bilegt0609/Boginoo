import mongoose from "mongoose"

const {Schema, model } = mongoose

const UrlSchema = new Schema({
    OriginalUrl: {
        type: String
    },
    ShortUrl : {
        type: String
    }
})

const UrlModel = model("urls", UrlSchema)

export default UrlModel;