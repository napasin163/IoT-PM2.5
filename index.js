const { json } = require('express');
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


const aunbangwoun = async(req,res)=>{
    
    try {
        let day = req.params.day
        let month = req.params.month
        let year = req.params.year
        const data =  await ValuesModel.find()
        var caltext = [];
        for (let i = 0; i < data.length; i++) 
        {
            if (data[i].day == day && data[i].month == month && data[i].year == year)
            {
                caltext.push(data[i])
            }
        }        
        // res.json({Message:"All Data",data})
        res.json({Message:"Data Found",caltext})
    }
    catch (error) { res.json({Message:"Error",error})}
}

const aunbangboard = async (req,res)=>{
    
    try {
        let board = req.params.boardID
        const data = await ValuesModel.findOne(board)
        
        res.json(data)
    }
    catch (error) { res.json({Message:"Error",error})}
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
        const data = new ValuesModel(req.body)
        await data.save()
        res.json({Message:"Data Added Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

const AddData_Query = async(req,res)=>{
    let dustDensity_C = req.query.dust
    var dustDensity = Number(dustDensity_C)

    let boardID_C = req.query.boardidtest
    var boardID = Number(boardID_C)

    let day_C = req.query.daytest
    var day = Number(day_C)

    let month_C = req.query.monthtest
    var month = Number(month_C)

    let year_C = req.query.yeartest
    var year = Number(year_C)
    
    let seconds_C = req.query.secondstest
    var seconds = Number(seconds_C)

    let minutes_C = req.query.minutestest
    var minutes = Number(minutes_C)

    let hours_C = req.query.hourstest
    var hours = Number(hours_C)

    try {
        /*console.log(boardID_C)
        console.log(dustDensity_C)
        console.log(day_C)
        console.log(month_C)
        console.log(year_C)
        console.log(seconds_C)
        console.log(minutes_C)
        console.log(hours_C)*/
        const data = new ValuesModel({dustDensity, boardID, day, month, year, seconds, minutes, hours})
        await data.save()
        res.json({Message:"Data Added Success",data})
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
    let {dustDensity, createdAt , boardID, day, month, year, seconds, minutes, hours} = req.body
    try {
        const data = await ValuesModel.findByIdAndUpdate(_id,{dustDensity, createdAt ,boardID, day, month, year, seconds, minutes, hours})
        res.json({Message:"Data Updated Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}



//......................... APIs ........................
app.post("/",AddData)  // Adding data through post metheod & body
app.get("/",GetData)

app.get("/readwan/:day/:month/:year",aunbangwoun)
app.get("/readboard/:board",aunbangboard)

app.get("/find/:id",FindData)
app.get("/add",AddData_Query) // Adding data through get method & query
app.delete("/delete/:id",DeleteData)
app.put("/update/:id",UpdateData)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
