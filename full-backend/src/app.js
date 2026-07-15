// create server 
const express = require('express');
const  noteModel = require('./models/note.model') // import the note model from note.model.js;


const app = express(); // create server instance
app.use(express.json()) // make data readable for express server


const notes = []

// api for creating notes with database
    app.post('/notes' ,async (req, res) => {
        const data = req.body;
        await noteModel.create({
            title: data.title,
            description: data.description
        }) 

        res.status(201).json({
            message: "note created successfully"
        })  
    } )  

    app.get('/notes',async (req,res) => {
       
        const note = await noteModel.find() // fetch all notes from the database
        res.status(200).json({
            message: "notes fetched successfully",
            notes: note
        })
    })

      app.get('/notes/title',async (req,res) => {
       
        const note = await noteModel.findOne({
              title : "test_note"
        } ) // fetch specific note from the database
        res.status(200).json({
            message: "notes fetched successfully",
            notes: note
        })
    })

    app.delete('/notes/:id',async (req,res) => {
        const id = req.params.id;
        await noteModel.findOneAndDelete({
            _id : id
        })
        res.status(200).json({
            message: "note deleted successfully"
        })
    })
 
app.patch('/notes/:id' , async(req,res) => {
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({_id : id}, {
        description: description
    })
    res.status(200).json({
        message: "note updated successfully"
    })
})

// // title , descripition  for api without database

// app.post('/notes', (req, res) =>{ // create api endpoint for creating notes
//      notes.push(req.body)

//      res.status(201).json({ // return a JSON response 
//         message: "Note created successfully", 
//      })
// } ) 

//  // name is same but method different  // get 
// app.get('/notes' , (req,res) => {
//     res.status(200).json({
//         message: "notes fetched successfully",
//         notes: notes
//     })
// } )

// // delete note by index 
// // : used for dynamic parameter
// app.delete('/notes/:index', (req,res) => {
//     const index = req.params.index;
//     delete notes[index]

//     res.status(200).json({
//         message: "note deleted successfully"
//     })
// })
//  // patch method is used to update the data

//  app.patch('/notes/:index', (req, res) => {
//     const index  = req.params.index;
//     const  description = req.body.description;

//     notes[index].description = description; 

//     res.status(200).json({
//         message: "note updated successfully"
//     })
//  })


module.exports = app
