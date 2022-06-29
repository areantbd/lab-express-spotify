// TODO
const spotifyApi = require('../config/spotify.config')


module.exports.home = (req, res, next) => {
  res.render('home')
}

/* module.exports.search = (req, res, next) => {
  res.render('search')
} */

module.exports.search = (req, res, next) => {
  spotifyApi
    .searchArtists(req.query.search)
    .then((data) => {
      /* console.log("The received data from the API: ", data.body); */
      res.render('search', {artists : data.body.artists.items})
  })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
  }

  module.exports.albums = (req, res, next) => {
    spotifyApi
      .getArtistAlbums(req.params.artistId)
      .then((data) => {
        res.render('albums', {albums : data.body.items})
    })
      .catch((err) =>
        console.log("The error while searching artists occurred: ", err)
      );
    }

    module.exports.song = (req, res, next) => {
      spotifyApi
        .getAlbumTracks(req.params.songId)
        .then((data) => {
          res.render('songs', {songs : data.body.items})
      })
        .catch((err) =>
          console.log("The error while searching artists occurred: ", err)
        );
      }




/* module.exports.doSearch = (req, res, next) => {
    res.render('vista')

}
module.exports.doSearchArtists = (req, res, next) => {
spotifyApi
  .searchArtists(req.query.search)
  .then((data) => {
    console.log("The received data from the API: ", data.body);
    // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    res.render('/', {artists : data.body.artists.items})
})
  .catch((err) =>
    console.log("The error while searching artists occurred: ", err)
  );
} */