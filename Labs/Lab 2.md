Elliot Gong

VERSION: 3 on 9/28/25 at 10:30 PM



### USERS

GET /users/:id

* Path parameter: user id
* Responds with the user info (excluding password). May return user playlists as well.
* Responds with an error if the path parameter is blank, incomplete, or false.



POST /users/register

* Request body is an object with a username and password.
* User id and registration Date are automatically created
* Responds with the created user object (excluding the password)
* Responds with an error if registration fails. This is when the username or password is blank.



POST /users/login

* Request body is an object with a username and password.
* Responds with the user object and its playlist (excluding the password).
* Responds with an error if login fails. This is when the username or password are incorrect or blank.



### PLAYLISTS

GET /playlists/get/:id

* Requires Authentication header to identify user.
* Path parameter: the id identifying the user that owns all the playlists.
* Responds with the list of the playlists attached to the given user.
* Responds with an error if the path parameter is blank, incomplete, or false.



POST /playlists/create/:d

* Requires Authentication header to identify user.
* Request body is an object with a title and user id.
* Playlist id is automatically created, and Tracks is initiated as an empty array.
* Responds with the playlist object (excluding its own and user id).
* Responds with an error if the title is blank or the user id is invalid.



POST /playlists/update/:id

* Path parameter: Specifies which playlist to add to.
* Request body is an object with the track's name, artist, album, and image taken. This data is found via a search request to the Last.fm API, and the track's mbid is automatically attached with the GET response.
* Responds with the track object that was added to the playlist.



DELETE /playlists/delete/:id

* Path parameter: Specifies which playlist to delete.
* Requires Authentication header to identify user.
* Responds with a deletion confirmation and the id of the deleted playlist.
* Responds with an error if the playlist id is blank, incomplete, or false.
* Responds with 



### TRACKS (Interact with Last.fm API)



GET /tracks/:id

* Reads API KEY from env to interact with Last.fm API.
* Interacts with Last.fm API to get track details.
* Responds with



GET /tracks/search

* Required query parameter for the track
* Required query parameter for the API key.
* Optional query parameter for artist
* Optional query parameter for fuzzy search
* Interacts with the Last.fm APi to search for tracks using the API key parameter. 
* Responds with a Last.fm API object that has the track hidden inside the trackmatches branch. Only those with valid mbids should be returned.
* Responds with an error depending on if parameters were wrong/blank or no tracks were found.



GET /tracks/getInfo

* Required query parameter for the track name.
* Required query parameter for the api key.
* Required query parameter for the artist name.
* Optional query parameter for the track's mbid. If this is provided, then the track and artist parameters are no longer required.
* Interacts with the Last.fm APi to search for tracks using the API key parameter.
* Responds with a Last.fm API object for each track.
* Responds with an error depending on if parameters were wrong/blank or no tracks were found.
