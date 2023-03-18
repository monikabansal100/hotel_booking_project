const roomModel = require("../models/roomModel")
const hotelModel = require("../models/hotelModel")

const createRoom = async(req, res)=>{
    try{
        let hotelId= req.params.id
        let data= req.body

        let SavedData= await roomModel.create(data)
        await hotelModel.findOneAndUpdate(hotelId, {$push: {rooms: SavedData._id}})

        res.status(201).send({msg: "room created successfully", data: SavedData})
    
    }

    catch(err){
        res.status(500).send("internal server error")
    }

}


const updateRoom = async(req, res)=>{
    try{
        let roomId= req.params.id
        let data= req.body

        let SavedData= await roomModel.findOneAndUpdate(roomId, data)
       
        res.status(200).send({msg: "room updated successfully", data: SavedData})
    
    }

    catch(err){
        res.status(500).send("internal server error")
    }

}


const getRoom = async(req, res)=>{
    try{
        let data= req.body

        let SavedData= await roomModel.find(data)
       
        res.status(200).send({ data: SavedData})
    
    }

    catch(err){
        res.status(500).send("internal server error")
    }

}


const deleteRoom = async(req, res)=>{
    try{
        let hotelId= req.params.hotelId
        let roomId= req.params.id

        await roomModel.findOneAndUpdate(roomId , {$set:{isDeleted: true}})
       
        res.status(200).send({msg: "room deleted successfully"})
    
    }

    catch(err){
        res.status(500).send("internal server error")
    }

}


module.exports = { createRoom, getRoom, updateRoom, deleteRoom}