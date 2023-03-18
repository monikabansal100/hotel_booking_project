const express = require("express")
const router = express.Router()
const hotelController= require("../controllers/hotelController")
const userController= require("../controllers/userController")
const roomController= require("../controllers/roomController")
const auth= require("../middleWares/auth")

//=========================hotel==========================//

router.post("/createHotel", auth.authentication, auth.authorization, hotelController.createHotel)
router.get("/getHotel",auth.authentication, auth.authorization,  hotelController.getHotel)
router.put("/updateHotel/:hotelId",auth.authentication, auth.authorization,  hotelController.updateHotel)
router.delete("/deleteHotel/:hotelId",auth.authentication, auth.authorization,  hotelController.deleteHotel)


//=========================user==========================//

router.post("/createUser", userController.createUser)
router.get("/getUser", userController.getUser)
router.put("/updateUser",auth.authentication, auth.authorization, userController.updateUser)
router.delete("/deleteUser",auth.authentication, auth.authorization, userController.deleteUser)
router.post("/login", userController.login)

//=========================room==========================//

router.post("/createRoom",auth.authentication, auth.authorization,  roomController.createRoom)
router.get("/getRoom", auth.authentication, auth.authorization, roomController.getRoom)
router.put("/updateRoom", auth.authentication, auth.authorization, roomController.updateRoom)
router.delete("/deleteRoom",auth.authentication, auth.authorization,  roomController.deleteRoom)


module.exports= router