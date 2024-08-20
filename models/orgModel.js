const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
    name: { type: String, required: true },
    account: { type: String, required: true },
    website: { type: String, required: true },
    fuelReimbursementPolicy: { type: Number, default: 1000 },
    speedLimitPolicy: { type: String, required: true },
});

module.exports = mongoose.model('Org', orgSchema);
