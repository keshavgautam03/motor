const Org = require('../models/orgModel');

// Create a new organization
const createOrg = async (req, res) => {
    const { name, account, website, fuelReimbursementPolicy, speedLimitPolicy } = req.body;

    try {
        const newOrg = new Org({
            name,
            account,
            website,
            fuelReimbursementPolicy: fuelReimbursementPolicy || 1000,
            speedLimitPolicy,
        });

        await newOrg.save();
        res.status(201).json(newOrg);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing organization
const updateOrg = async (req, res) => {
    const { id } = req.params;
    const { account, website, fuelReimbursementPolicy, speedLimitPolicy } = req.body;

    try {
        const org = await Org.findById(id);
        if (!org) return res.status(404).json({ message: 'Organization not found' });

        org.account = account || org.account;
        org.website = website || org.website;
        org.fuelReimbursementPolicy = fuelReimbursementPolicy || org.fuelReimbursementPolicy;
        org.speedLimitPolicy = speedLimitPolicy || org.speedLimitPolicy;

        await org.save();
        res.status(200).json(org);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all organizations
const getOrgs = async (req, res) => {
    try {
        const orgs = await Org.find();
        res.status(200).json(orgs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createOrg,
    updateOrg,
    getOrgs,
};
