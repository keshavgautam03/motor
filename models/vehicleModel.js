const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vin: { type: String, required: true, unique: true },
    org: { type: mongoose.Schema.Types.ObjectId, ref: 'Org', required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
