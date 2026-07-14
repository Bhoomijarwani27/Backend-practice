// server start 
const app = require('./src/app'); // import the server instance from app.js\
const connectDB  = require("./src/db/db") // import the database connection function from db.js;

connectDB()



app.listen(3000, () => {
    console.log("server is running on port 3000");
})
