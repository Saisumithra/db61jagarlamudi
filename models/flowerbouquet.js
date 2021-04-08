const mongoose = require("mongoose")
const flowerbouquetSchema = mongoose.Schema({
flowername: String,
numberofflowers: Number,
deliverylocation: String
})
module.exports = mongoose.model("flowerbouquet", flowerbouquetSchema)
