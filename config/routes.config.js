// TODO
const express = require('express');
const router = express.Router();
const misc = require('../controllers/misc.controller');
const spotify = require('../controllers/spotify.controller')


router.get('/', misc.home);
router.get('/artist-search', spotify)


module.exports = router;