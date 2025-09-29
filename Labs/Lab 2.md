Elliot Gong

VERSION: 1 on 9/26/25 at 10:54 AM



### USERS

GET /users/:id

* Path parameter: user id
* Responds with the user info (excluding password).
* Responds with an error if the path parameter is blank, incomplete, or false.



POST /users/register

* Request body is an object with a username and password.
* User id and registration Date are automatically created, and the associated playlist is initiated as an empty list.
* Responds with the created user object (excluding the password)
* Responds with an error if registration fails.



POST /users/login

* Request body is an object with a username and password.
* Responds with the user object and its playlist (excluding the password).
* Responds with an error if login fails.



### PLAYLISTS

GET /playlists/get/:userID

* Path parameter: the id identifying the user that owns all the playlists.
* Responds with the list of the playlists attached to the given user.
* Responds with an error if the path parameter is blank, incomplete, or false.



POST /playlists/create

* Request body is an object with a title and user id.
* Playlist id is automatically created, and Tracks is initiated as an empty array.
* Responds with the playlist object (excluding its own and user id).
* Responds with an error if the title is blank or the user id is invalid.



POST /playlists/update/:id

* Path parameter: Specifies which playlist to add to.
* Request body is an object with the track's name, artist, album, and image taken from the tracks/search GET request. The track's mbid is automatically attached with the GET request to Last.fm.
* Responds with the track object that was added to the playlist.



DELETE /playlists/delete/:id

* Path parameter: Specifies which playlist to delete.
* requires Authentication header to identify user.
* Responds with a deletion confirmation and the id of the deleted playlist.
* Responds with an error if the playlist id is blank, incomplete, or false.



### TRACKS (Interact with Last.fm API)



GET /tracks/:id

* Reads API KEY from env to interact with Last.fm API.
* Interacts with Last.fm API to get track details.
* Responds with



GET /tracks/search

* Required query parameter for the track
* Required query parameter for the api key.
* Optional query parameter for artist
* Optional query parameter for fuzzy search
* Responds with a Last.fm API object for each track. Only those with valid mbids should be returned.
* Responds with an error depending on parameters.



GET /tracks/getInfo

* Required query parameter for the track name.
* Required query parameter for the api key.
* Required query parameter for the artist name.
