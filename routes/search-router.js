const express = require('express');
const searchCtrl = require('../controllers/search-ctrl');


const router = express.Router();


router.get('/searchcountry',searchCtrl.findByCountry)
router.get('/searchLanguage',searchCtrl.findByLanguage)
router.get('/searchLanguageCountry',searchCtrl.findByCountryAndLanguage)


module.exports = router;