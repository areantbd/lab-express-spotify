const express = require('express');
const router = express.Router();
const spotify = require('../controllers/spotify.controller')


router.get('/', spotify.home);
router.get('/artist-search', spotify.search)
router.get('/albums/:artistId', spotify.albums)
router.get('/songs/:songId', spotify.song)


module.exports = router;