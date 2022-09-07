const mongoose = require("mongoose");
const ValuesSchema = new mongoose.Schema({
    dustDensity : {},
},
{
    timestamps:true
})
 const ValuesModel = mongoose.model("Values",ValuesSchema)
 module.exports = ValuesModel
