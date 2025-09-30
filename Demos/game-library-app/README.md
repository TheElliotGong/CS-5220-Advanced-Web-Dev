# Game Library App

## Data Models

### Users

The User model stores account information and references to game libraries.

-   **`_id`**: Unique identifier for each user.
-   **`username`**: Unique, case-insensitive username.
-   **`password`**: Password for the user.
-   **`platforms`**: Optional platform information (ex: PC, Playstation, Xbox, Nintendo).
-   **`libraries`**: Map object with genre name as key and a Library reference as value.

---

### Library

The Library model stores games grouped by genre.

-   **`_id`**: Unique identifier for each library entry.
-   **`genre`**: The genre of the library.
-   **`games`**: Array of game objects, each including:
    -   **`id`**: Unique game id from RAWG.
    -   **`name`**: Name of the game.
    -   **`platform`**: Array of platforms for the game.
    -   **`release date`**: Release date of the game.
    -   **`genre`**: Main genre of the game.
    -   **`developers`**: Array of developers for the game.
    -   **`descripton`**: Short text description for the game.
    -   **`image`**: URL to game image or cover art.

---

## API Endpoints

Design and implement the following endpoints. Follow REST principles including proper HTTP methods, status codes and URL structure.

### Users

-   **`POST /users/register`**

    -   Create a new user with username, password, and platform.
    -   Default empty libraries map is created.
    -   Responds with user object (excluding password).
    -   Responds with error if username already exists.

-   **`POST /users/login`**

    -   Login with username and password.
    -   Responds with user object (excluding password) if successful.
    -   Responds with error if login fails.

-   **`GET /users/:username`**

    -   Returns user object with associated game libraries.
    -   Requires Authentication header.
    -   Responds with error if user not found or authentication missing.

-   **`GET /users/:username/library/:genre`**
    -   Returns library object for the specified genre.
    -   Requires Authentication header.
    -   Responds with error if library or user not found.

---

### Game Libraries

-   **`PUT /library/:genre`**

    -   Create or update a genre library for authenticated user.
    -   Request body includes a game object with id, name, platform, genre.
    -   Creates the genre library if it doesn’t exist or adds the game to the existing library.
    -   Responds with updated library.
    -   Responds with error if user not found.

-   **`DELETE /library/:genre`**
    -   Remove a game from a genre library for authenticated user.
    -   Request body includes game id.
    -   Responds with confirmation and updated library.
    -   Responds with error if game or library does not exist.

---

### Games (RAWG API)

In order to use the API you must register and obtain an API Key. [RAWG API](https://rawg.io/apidocs) to obtain an API key.

-   **`GET /games/search`**

    -   Required query parameters: name (string).
    -   Optional: genre (string).
    -   Optional: platform (string).
    -   Interacts with RAWG API to perform search using query parameters.
    -   Responds with a minimal RAWG API object for each game. (id, name, platforms)

-   **`GET /games/:id`**
    -   Required query parameters: API Key (string).
    -   Interacts with RAWG API to get a game using a unique id.
    -   Responds with a minimal RAWG API object for each game.
