const mongoose = require("mongoose")

let UrlSchema = new mongoose.Schema({
    OriginalUrl: {
        type:String,
        require: true
    },
    slug: {
        type: String,
        required: true
    }
}, {timestamps: true})

let URL = new mongoose.model("URL", UrlSchema)

module.exports = URL