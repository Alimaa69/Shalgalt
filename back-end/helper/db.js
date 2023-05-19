const mongoose = require("mongoose")

const uri = "mongodb+srv://2023team:<password>@cluster.v4rg84b.mongodb.net/"

const connect = async() => {
    try {
        await mongoose.connect(uri)
        console.log("connected")
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = connect