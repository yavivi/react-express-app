const express = require('express');
const sellersCtrl = require('../controllers/seller-ctrl.js');
const router = express.Router();

router.post('/', sellersCtrl.createSeller);
router.get('/', sellersCtrl.getSellers);
router.put('/:id', sellersCtrl.updateSeller);
router.delete('/:id', sellersCtrl.deleteSeller);
router.get('/:id', sellersCtrl.getSellerbyid);
module.exports = router;