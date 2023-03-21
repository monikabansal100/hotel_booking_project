const hotelModel = require("../models/hotelModel")


const createHotel = async (req, res) => {
    try {
        let data = req.body
        // console.log(data);
        let SavedData = await hotelModel.create(data)

        return res.status(201).send(SavedData)
    }

    catch (err) {
        return res.status(500).send("internal server error")
    }

}


const getHotel = async (req, res) => {
    try {
        let data = req.body
        let SavedData = await hotelModel.find(data)

        return res.status(200).send(SavedData)
    }

    catch (err) {
        return res.status(500).send("internal server error")
    }

}


const updateHotel = async (req, res) => {
    try {
        let hotelId = req.params.hotelId
        let data = req.body
        let SavedData = await hotelModel.findByIdAndUpdate(hotelId, { $set: data }, { new: true })

        return res.status(200).send(SavedData)
    }

    catch (err) {
        return res.status(500).send("internal server error")
    }

}


const deleteHotel = async (req, res) => {
    try {
        let hotelId = req.params.hotelId
        await hotelModel.findOneAndUpdate(hotelId, { $set: { isDeleted: true } })

        return res.status(200).send("hotel deleted successfully")
    }

    catch (err) {
        return res.status(500).send("internal server error")
    }

}


module.exports = { createHotel, getHotel, updateHotel, deleteHotel }