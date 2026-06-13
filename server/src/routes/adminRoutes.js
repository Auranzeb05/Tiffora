const express = require('express');
const { generateDispatchManifest } = require('../controllers/adminController');

const router = express.Router();

router.post('/cluster-addresses', generateDispatchManifest);

module.exports = router;
