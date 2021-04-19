const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let productSchema = new Schema({
    uuid: {
        type: String,
        unique: true,
        required: [true, 'Please provide the product UUID']
    },
    vin: {
        type: String,
        required: false
    },
    make: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: false
    },
    mileage: {
        type: Number,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    zip_code: {
        type: String,
        required: false
    },
    creation_date: {
        type: Date,
        default: Date.now()
    },
    update_date: {
        type: Date,
        default: Date.now()
    },
    provider: {
        type: String,
        required: true
    },
},{ versionKey: false });

module.exports = mongoose.model('Product', productSchema);