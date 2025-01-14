const express = require('express');
const { createOrg, updateOrg, getOrgs } = require('../controllers/orgController');

const router = express.Router();

router.post('/', createOrg);
router.patch('/:id', updateOrg);
router.get('/', getOrgs);

module.exports = router;
