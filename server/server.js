const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PlayerModel = require("./models/Players")
const cors = require('cors')
PORT = 3001

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://project_1:proj1get1@cluster0.olwm35y.mongodb.net/proj_1?retryWrites=true&w=majority")

app.get("/gp", (req, res)=>{
    PlayerModel.find({}, (err, data)=>{
        if (err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})

app.post('/cp', async (req, res)=>{
    const player = req.body
    const newPlayer = new PlayerModel(player)
    await newPlayer.save()
})

app.listen(PORT, ()=>{
    console.log(`Listening to Port number ${PORT}`)
})