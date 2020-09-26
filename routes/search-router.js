const express = require('express');
const searchCtrl = require('../controllers/search-ctrl');

const router = express.Router();

router.get('/country/:country/lang/:lang/city/:city/cost/:cost', searchCtrl.search)
// router.get('/searchLanguage',searchCtrl.findByLanguage)
// router.get('/searchLanguageCountry',searchCtrl.findByCountryAndLanguage)

module.exports = router;