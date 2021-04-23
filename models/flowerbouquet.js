const mongoose = require("mongoose")
const flowerbouquetSchema = mongoose.Schema({
flowername: {
    type: String,
    minlength: 4,
    maxlength: 12,
},
numberofflowers: {
    type: Number,
    max: [100, "number of flowers should be lessthan 100"],
    min: [0, "number of flowers should be morethan 0"]
},
deliverylocation: {
    type: String,
    required: [true, "delivery location is required"]
}
})
module.exports = mongoose.model("flowerbouquet", flowerbouquetSchema)
