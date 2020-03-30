const mongoose = require("mongoose")


const Schema = mongoose.Schema

const userSchema = new Schema( {
    inputvalue : {
        type: String,
        required: true 
        } 
    }
 );


const userinputmodel = mongoose.model("userinputmodel", userSchema)

module.exports = userinputmodel