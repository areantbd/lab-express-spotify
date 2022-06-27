// TODO
const SpotifyWebApi = require('spotify-web-api-node')

module.exports.doSearch = (req, res, next) => {
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
}