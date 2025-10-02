Elliot Gong

VERSION: 1 on 9/29/25 at 11:12 PM



### USERS

GET /users/:id

* Requires Authentication header to identify user.
* Path parameter: user id
* Optional query parameter for returning user playlists as well (Boolean).
* Responds with the user info (excluding password). May return user playlists as well.
* Responds with an error if the path parameter is blank or incorrect.



POST /users/register

* Request body is an object with a username and password.
* User id and registration Date are automatically created.
* Responds with the created user object (excluding the password).
* Responds with an error if registration fails. This is when the username or password is blank.



POST /users/login

* Request body is an object with a username and password.
* Responds with the user object and its playlist (excluding the password).
* Responds with an error if login fails. This is when the username or password are incorrect or blank.



### PLAYLISTS

GET /playlists/:id

* Requires Authentication header to identify user.
* Path parameter: user id
* Responds with the list of the playlists attached to the given user.
* Responds with an error if the path parameter is blank or incorrect.



POST /playlists/

* Requires Authentication header to identify user.
* Request body is an object with a playlist name.
* Playlist id is automatically created, and the tracks array is initially empty.
* Responds with the playlist object (excluding its own and user id).
* Responds with an error if the user id is invalid.



PUT /playlists/:playListID

* Requires Authentication header to identify user and playlist.
* Path parameters: Ids for the user and playlist.
* Request body is an object with the track's name, artist, album, mbid, and image. This data is found via a search request to the Last.fm API, and the track's mbid is automatically attached with the GET response.
* Responds with the updated playlist.
* Returns with an error if the user or playlist ID are blank or incorrect.



DELETE /playlists/:playListID

* Requires Authentication header to identify user and playlist.
* Path parameters: Ids for the user and playlist.
* Requires Authentication header to identify user.
* Responds with a deletion confirmation and the id of the deleted playlist.
* Responds with an error if the playlist id is blank or incorrect.



### TRACKS (Interact with Last.fm API)



GET /tracks/search

* No authentication is needed.
* Required query parameter for the track (string).
* Required query parameter for the API key (string).
* Optional query parameter for artist (string).
* Optional query parameter for the search limit per page (int).
* Optional query parameter for the search results page number (int).
* Optional query parameter for fuzzy search (string).
* Interacts with the Last.fm API to search for tracks using the API key parameter.
* Responds with a Last.fm API object that has the track hidden inside the track matches branch. Only those with valid mbids should be returned.
* Responds with an error depending on if parameters were wrong/blank or no tracks were found.



GET /tracks/:mbid

* No authentication is needed.
Path parameter: track id
* Required query parameter for the track name (string).
* Required query parameter for the api key (string).
* Required query parameter for the artist name (string).
* Optional query parameter for autocorrect search results (string).
* Optional query parameter for the track's mbid (string). If this is provided, then the track and artist parameters are no longer required.
* Interacts with the Last.fm APi to search for tracks using the API key parameter.
* Responds with a Last.fm API object for each track, which contains all the metadata.
* Responds with an error depending on if parameters were wrong/blank or no tracks were found.
