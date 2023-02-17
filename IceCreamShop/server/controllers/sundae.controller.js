const Sundae = require("../models/sundae.model");

module.exports.testRoute = (req,res) => {
    res.json({message: "hellow from the controller!!"});
}

module.exports.getAll = (req,res) => {
    
    Sundae.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.create = (req,res) => {
    Sundae.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.getOne = (req,res) => {
    Sundae.findOne({_id: req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.deleteOne = (req,res) => {
    Sundae.deleteOne({_id: req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.updateOne = (req,res) => {
    Sundae.updateOne({_id:req.params._id},req.body,{runValidators:true})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.addTopping = (req,res) => {
    Sundae.updateOne({_id:req.params._id},{$push: {toppings: req.body.topping}})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.randomSundae = (req,res) => {
    Sundae.aggregate().sample(1)
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}