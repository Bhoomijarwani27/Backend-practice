// create server 
const express = require('express');



const app = express(); // create server instance
app.use(express.json()) // make data readable for express server


const notes = []

// title , descripition 

app.post('/notes', (req, res) =>{ // create api endpoint for creating notes
     notes.push(req.body)

     res.status(201).json({ // return a JSON response 
        message: "Note created successfully", 
     })
} ) 

 // name is same but method different 
app.get('/notes' , (req,res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
} )


module.exports = app