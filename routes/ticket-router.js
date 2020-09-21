const express = require('express');
const ticketsCtrl = require('../controllers/ticket-ctrl');
const router = express.Router();

router.post('/', ticketsCtrl.createTicket);
router.get('/', ticketsCtrl.getTickets);
router.put('/:id', ticketsCtrl.updateTicket);
router.delete('/:id', ticketsCtrl.deleteTicket);
router.get('/:id', ticketsCtrl.getTicketbyid);
module.exports = router;