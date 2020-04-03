const router = require("express").Router();
let User = require("../models/user.input.post")

let  DB_ARRAY = []

 
router.route("/get").get((req,res) => {
    User.find({}).lean().exec(function(error, records) {
        records.forEach(function(record) { 
           DB_ARRAY = [...DB_ARRAY, ( {
            id : record._id,
            value : record.inputvalue
         }) ]
        }) 
        res.send(DB_ARRAY)
    })
    DB_ARRAY = []
})


router.route("/add").post((req,res) => {  
    const newString = new User(req.body)  // dive the input to model  
    newString.save() // save it to db
    .then(() => res.json("added: " + req.body.inputvalue)) // return sended feedback
    .catch(err => res.status(400).json("error: "+ err)) //Return error feedback
})


router.route("/deleteTitle").delete((req,res) => {
    User.deleteMany().exec(); 
    DB_ARRAY = []
    res.send("deleted all database")
})
 

module.exports = router;