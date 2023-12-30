const express = require("express");
const router = express.Router();

const MusicUserController = require("./../controllers/MusicUserController");

// get all playlists of a user
router.get("/playlists", MusicUserController.getPlaylists);

// get all songs of a playlist
router.get("/songs", MusicUserController.getSongs);

// get all favorite songs of a user
router.get("/favorites", MusicUserController.getFavorites);

// create playlist
router.post("/createplaylist", MusicUserController.createPlaylist);

// add song to playlist
router.post("/addsongtoplaylist", MusicUserController.addSongToPlaylist);

// add song to favorite
router.post("/addsongtofavorite", MusicUserController.addSongToFavorite);

// delete song from favorite
router.delete("/deletesongfromfavorite", MusicUserController.deleteSongFromFavorite);

// delete song from playlist
router.delete("/deletesongfromplaylist", MusicUserController.deleteSongFromPlaylist);

// delete playlist
router.delete("/deleteplaylist", MusicUserController.deletePlaylist);

module.exports = router;