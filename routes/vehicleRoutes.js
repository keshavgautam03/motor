const express = require('express');
const { getVehicleDetails, addVehicle } = require('../controllers/vehicleController');

const router = express.Router();

router.get('/:vin', getVehicleDetails);
router.post('/', addVehicle);

module.exports = router;
