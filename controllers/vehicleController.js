const Vehicle = require('../models/vehicleModel');
const { decodeVIN } = require('../services/nhtsaService');

// Get details for a specific vehicle by VIN
const getVehicleDetails = async (req, res) => {
    const { vin } = req.params;

    if (vin.length !== 17) {
        return res.status(400).json({ message: 'Invalid VIN format' });
    }

    try {
        const vehicle = await Vehicle.findOne({ vin });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new vehicle
const addVehicle = async (req, res) => {
    const { vin, org } = req.body;

    if (vin.length !== 17 || !org) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    try {
        const vehicleData = await decodeVIN(vin);

        const newVehicle = new Vehicle({
            vin,
            org,
            manufacturer: vehicleData.Manufacturer,
            model: vehicleData.Model,
            year: vehicleData.ModelYear,
        });

        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getVehicleDetails,
    addVehicle,
};
