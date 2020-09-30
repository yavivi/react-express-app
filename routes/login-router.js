const express = require('express');
const loginCtrl = require('../controllers/login-ctrl');
const passport = require("passport");
const router = express.Router();

// router.post('/', passport.authenticate('local'), loginCtrl.validatePassword);
router.post('/', passport.authenticate('local'), (req, res) => {
    res.send({ ok: true });
});

router.get('/me',
(req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ message: "You need to login" })
    } else {
        next();
    }
}, (req, res) => {
    res.send({ user: req.user });
})

module.exports = router;