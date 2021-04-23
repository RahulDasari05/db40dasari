const mongoose = require("mongoose")
const accountSchema = mongoose.Schema({
name: String,
id: String,
balance: Number
})

// plugin for passport-local-mongoose
module.exports = mongoose.model("Account", accountSchema)