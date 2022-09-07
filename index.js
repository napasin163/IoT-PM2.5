const express = require('express');
const mongoose = require('mongoose');
const ValuesModel = require('./models/models');
const app = express()
require ('dotenv').config();
const port = process.env.PORT || 5000

app.use(express.json())

// .................... DB Config .......................
const DBConnection = ()=>{
    return mongoose.connect(process.env.CONNECTION_STRING,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result)=>{console.log("DB CONNECTED SUCCESSFULLY")})
    .catch((error)=>{console.log(error)})
}
DBConnection()

//................... Controllers .........................
const GetData = async(req,res)=>{
    try {
        const data = await ValuesModel.find()
        // res.json({Message:"All Data",data})
        res.json(data)
    }catch (error) { res.json({Message:"Error",error})}
}

const FindData = async(req,res)=>{
    let _id = req.params.id
    try {
        const data = await ValuesModel.findById(_id)
        res.json({Message:"Data Found",data})
    }catch (error) { res.json({Message:"Error",error})}
}

const AddData = async(req,res)=>{
    let {dustDensity} = req.body

    try {
        // console.log(typeof Temperature_C)
        // console.log(typeof Humadity)
        const data = new ValuesModel(req.body)
        await data.save()
        res.json({Message:"Data Added Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

const AddData_Query = async(req,res)=>{
    let dustDensity_C2 = req.query.dust
    var dustDensity = Number(dustDensity_C2)

    try {
        // console.log(typeof Temperature_C)
        // console.log(typeof Humadity)
        const data = new ValuesModel({dustDensity})
        await data.save()
        res.json({Message:"Temp Added Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

const DeleteData = async(req,res)=>{
    let _id = req.params.id
    try {
        const data = await ValuesModel.findByIdAndDelete(_id)
        res.json({Message:"Data Deleted Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

const UpdateData = async(req,res)=>{
    let _id = req.params.id
    let {dustDensity} = req.body
    try {
        const data = await ValuesModel.findByIdAndUpdate(_id,{dustDensity})
        res.json({Message:"Data Updated Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

//......................... APIs ........................
app.post("/",AddData)  // Adding data through post metheod & body
app.get("/",GetData)
app.get("/find/:id",FindData)
app.get("/add",AddData_Query) // Adding data through get method & query
app.delete("/delete/:id",DeleteData)
app.put("/update/:id",UpdateData)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
