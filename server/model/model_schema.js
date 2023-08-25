const mongoose = require("mongoose");
const schema = mongoose.Schema;

const newsSchema = new schema({
    title :{
        type: String,
        required: true
    },
    body :{
        type: String,
        required: true
    },
    author :{
        type: String,
        required: true
    }
},{timestamps : true});
module.exports = mongoose.model("News", newsSchema);