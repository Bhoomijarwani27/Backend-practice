const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect('mongodb+srv://bhoomijarwani27:%40Szr2CUfP_y7NZJ@cluster0.yoi7q3b.mongodb.net/learnfullstack')

    console.log("connected to DB ")
}

module.exports = connectDB