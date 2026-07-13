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

 // name is same but method different  // get 
app.get('/notes' , (req,res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
} )

// delete note by index 
// : used for dynamic parameter
app.delete('/notes/:index', (req,res) => {
    const index = req.params.index;
    delete notes[index]

    res.status(200).json({
        message: "note deleted successfully"
    })
})
 // patch method is used to update the data

 app.patch('/notes/:index', (req, res) => {
    const index  = req.params.index;
    const  description = req.body.description;

    notes[index].description = description; 

    res.status(200).json({
        message: "note updated successfully"
    })
 })


module.exports = app
