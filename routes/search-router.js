const express = require('express');
const searchCtrl = require('../controllers/search-ctrl');


const router = express.Router();


router.get('/searchcountry',searchCtrl.findByCountry)



module.exports = router;