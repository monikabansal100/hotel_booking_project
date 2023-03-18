const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel")


const authentication= async function(req, res, next){
    try {
       let token= req.headers.token
       if(!token){
        req.status(400).send("token is missing !!!")
       }

       jwt.verify(token, "hotel_booking", (error, response)=> {
        if(error){
            res.status(401).send("not a valid token")
        }
        req.userId= response.userId

        next()
       })
    }

    catch (err) {
        res.status(500).send("internal server error")
    }
    
}


const authorization= async function(req, res, next){
    try {
        let userId= req.params.userId

        if(userId =! req.userId){
            res.status(403).send("you are not autherised")
        }

        let user= await userModel.findOne(userId)
        if(!user){
            res.status(404).send("user not found")
        }

        next()
    }

    catch (err) {
        res.status(500).send("internal server error")
    }
}

module.exports= {authentication, authorization}