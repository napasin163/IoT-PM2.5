const mongoose = require("mongoose");
const ValuesSchema = new mongoose.Schema({
    dustDensity : {
        type : {},
        required : true
    },
    day : {
        type : {},
        required : true
    },
    month : {
        type : {},
        required : true
    },
    year : {
        type : {},
        required : true
    },
    seconds : {
        type : {},
        required : true
    },
    minutes : {
        type : {},
        required : true
    },
    hours : {
        type : {},
        required : true
    },
    boardID : {
        type : {}
    }
},
{
    timestamps:true
})
 const ValuesModel = mongoose.model("Values",ValuesSchema)
 module.exports = ValuesModel
