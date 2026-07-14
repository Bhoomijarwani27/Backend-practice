const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({ 
    title : String, 
    description : String,
})

const noteModel = mongoose.model('Note', noteSchema); 
// model used to create and read documents from the notes collection in the database
// make easy to use the model in other files by exporting it
module.exports = noteModel 
 
