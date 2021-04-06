const mongoose = require("mongoose")
const accountSchema = mongoose.Schema({
name: String,
id: String,
balance: Number
})
module.exports = mongoose.model("Account", accountSchema)