const { Destination } = require("../models/destination.model");

module.exports.createDestination = (req,res) => {
    console.log("Creating: " , req.body)
    Destination.create(req.body)
        .then((destination) => {
            res.json(destination);
        })
        .catch((err)=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getAllDestinations = (req,res) => {
    console.log("Getting all : ")
    Destination.find()
        .then((destinations) => {
            res.json(destinations);
        })
        .catch((err)=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getDestinationById = (req,res) => {
    console.log("Getting one : " , req.params)
    Destination.findOne({_id: req.params.id})
        .then((destination) => {
            res.json(destination);
        })
        .catch((err)=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteDestinationById = (req,res) => {
    console.log("Deleting one : " , req.params)
    Destination.findByIdAndDelete(req.params.id)
        .then((destination) => {
            res.json(destination);
        })
        .catch((err)=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateDestinationById = (req,res) => {
    console.log("Updating one : " , req)
    Destination.findByIdAndUpdate(req.params.id, req.body)
        .then((destination) => {
            res.json(destination);
        })
        .catch((err)=>{
            res.json({message: "Something went wrong", error: err})
        })
}
