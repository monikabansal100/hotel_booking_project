const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        desc: {
            type: String,
            required: true,
        },
        roomNumbers: [{
            number: Number,
            unAvailableDates: { type: [Date] }
        }],
    }, { timestamps: true });


module.exports= mongoose.model("room", roomSchema);