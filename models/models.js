const mongoose = require("mongoose");
const ValuesSchema = new mongoose.Schema({
    dustDensity : {},
    day : {},
    month : {},
    year : {},
    seconds : {},
    minutes : {},
    hours : {},
    boardID : {},
},
{
    timestamps:true
})
 const ValuesModel = mongoose.model("Values",ValuesSchema)
 module.exports = ValuesModel
