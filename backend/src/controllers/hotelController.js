const hotelModel = require("../models/hotelModel")


const createHotel = async (req, res) => {
    try {
        let data = req.body
        let SavedData = await hotelModel.create(data)

        res.status(201).send(SavedData)
    }

    catch (err) {
        res.status(500).send("internal server error")
    }

}


const getHotel = async (req, res) => {
    try {
        let data = req.body
        let SavedData = await hotelModel.find(data)

        res.status(200).send(SavedData)
    }

    catch (err) {
        res.status(500).send("internal server error")
    }

}


const updateHotel = async (req, res) => {
    try {
        let hotelId = req.params.hotelId
        let data = req.body
        let SavedData = await hotelModel.findByIdAndUpdate(hotelId, { $set: data }, { new: true })

        res.status(200).send(SavedData)
    }

    catch (err) {
        res.status(500).send("internal server error")
    }

}


const deleteHotel = async (req, res) => {
    try {
        let hotelId = req.params.hotelId
        await hotelModel.findOneAndUpdate(hotelId, { $set: { isDeleted: true } })

        res.status(200).send("hotel deleted successfully")
    }

    catch (err) {
        res.status(500).send("internal server error")
    }

}


module.exports = { createHotel, getHotel, updateHotel, deleteHotel }