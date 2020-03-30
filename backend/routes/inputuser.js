const router = require("express").Router();
let User = require("../models/user.input.post")


router.route("/:id").get((req,res) => {
    User.findById(req.params.id)
        .then(input => res.json(input))
        .catch(err => res.status(400).json("error: "+ err))
})


router.route("/add").post((req,res) => {  
    const newString = new User(req.body)  // dive the input to model 
    newString.save() // save it to db
    .then(() => res.json("Array added") ) // return sended feedback
    .catch(err => res.status(400).json("error: "+ err)) //Return error feedback
})


module.exports = router;