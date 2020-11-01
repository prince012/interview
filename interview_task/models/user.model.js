const mongoose = require('mongoose')
var dateFormat = require('dateformat');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    name: { type: String, required: true },
    mobile:  { type: String, unique: true, required: true },
    email: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        locality: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        coordinatesType: { type: String, required: true },
        coordinates: [Number]
    },
    createdAt: { type: Date, default: dateFormat(Date.now(), "yyyy-mm-dd") },
    updatedBy: { type: Date, default: dateFormat(Date.now(), "yyyy-mm-dd") }

})

module.exports = mongoose.model('demos',tableSchema);