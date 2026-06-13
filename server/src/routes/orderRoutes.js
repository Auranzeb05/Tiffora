const express = require('express');
const { enforceOneDayCancellationRule } = require('../middleware/cancellationLock');
const { cancelOrder } = require('../controllers/orderController');

const router = express.Router();

router.post('/:orderId/cancel', enforceOneDayCancellationRule, cancelOrder);

module.exports = router;
