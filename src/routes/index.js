const express = require('express');
const TicketController = require('../controller/ticket-controller');
const router = express.Router();

router.post('v1/ticket',TicketController.create);

module.exports = router;