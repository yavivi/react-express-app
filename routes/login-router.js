const express = require('express');
const passport = require('passport');
const router = express.Router();

// /login
router.post('/',
    (req, res, next) => {
        passport.authenticate('local', function (err, account) {
            if (err) {
                res.status(500).send(err);
            } else {
                req.logIn(account, function() {
                    if (!account) {
                        res.status(401).send("unauthorized");
                    } else {
                        res.status(200).send(account);
                    }
                });
            }
        })(req, res, next)
    },
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;