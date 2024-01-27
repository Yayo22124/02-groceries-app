import Mongoose  from "mongoose";
import dotenv from "dotenv"

dotenv.config({path: "src/.env"})

Mongoose.connect(process.env.CONNECTION_STRING_DB)
.then(
    db => console.log(`
    ############################## /n
        Database Succesfully Connected
    /n##############################
    `)
)
.catch(
    err => console.log(err)
)

export default Mongoose;