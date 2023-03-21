const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createUser = async function (req, res) {
    try {
        let data = req.body
        let SavedData = await userModel.create(data)
        return res.status(201).send({ msg: "message craeted successfully",data: SavedData})

    }
    catch (err) {
        return res.status(500).send("internal server error")
    }
}


const getUser = async function (req, res) {
    try {
        // let userId = req.params.userId
        let data = req.body
        let SavedData = await userModel.find(data)
        return res.status(200).send({ data: SavedData })

    }
    catch (err) {
        return res.status(500).send("internal server error")
    }

}


const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId
        let data = req.body
        let SavedData = await userModel.findOneAndUpdate({ _id: userId }, { $set: data }, { new: true })
        return res.status(200).send({ data: SavedData })

    }
    catch (err) {
        return res.status(500).send("internal server error")
    }

}


const deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId
        let data = req.body
        let SavedData = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } })
        return res.status(200).send({ msg: "user deleted successfully" })

    }
    catch (err) {
        return res.status(500).send("internal server error")
    }

}


const login = async function (req, res) {
    try {
        let data= req.body
       
        let user= await userModel.findOne({data})
        let token = jwt.sign({userId: user._id.toString()},"hotel_booking")

       return res.status(201).send({userId: user._id, token})

    }
    catch (err) {
        return res.status(500).send("internal server error")
    }
}

module.exports = { createUser, getUser, updateUser, deleteUser, login }

