const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
 
//Port
const PORT = process.env.PORT
 
//Server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
 