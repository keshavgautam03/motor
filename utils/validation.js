const validateVIN = (vin) => {
    return vin.length === 17 && /^[A-HJ-NPR-Z0-9]+$/.test(vin);
};

module.exports = {
    validateVIN,
};
