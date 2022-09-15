const mongoose = require("mongoose");
const ValuesSchema = new mongoose.Schema({
    boardID : {},
    dustDensity : {},
    day : {},
    date : {},
    month : {},
    year : {},
    seconds : {},
    minutes : {},
    hours : {},
},
{
    timestamps:true
})
 const ValuesModel = mongoose.model("Values",ValuesSchema)
 module.exports = ValuesModel
