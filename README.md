# Drops Backend

Event, user, and feed RESTful API for the [Drops React Native App](https://github.com/JoeIaquinto/drops).
=======
# Installation

  Make sure you have the latest version of [NodeJS](https://nodejs.org/en/). Pull the repository and npm install. Download [Ngrok](https://ngrok.com/). Install [MongoDB](https://www.mongodb.com/) and necessary tools. Optionally, install [Nodemon](https://github.com/remy/nodemon) to refresh the app on save.

# Setup
  Run `mongod` to start the Mongo database. Start the app with `node index.js` or `nodemon index.js`. If testing on the mobile device, run `$./ngrok http 3000` to open a tunnel to localhost so that the mobile app can access the backend.

Middleware before any request: Authenticate user using FB_COOKIE, if not in DB create new user, otherwise determine UserID and put in request for use later.


|            |     Drop    |   User    |   Feed    |
|------------|-------------|-----------|-----------|
| PreCreate  |             |     Get permanent FB id from user's cookie app id. Check if user already signed up using FB_ID.    |     Determine time created. Save UserID to Feed Creator. Determine if user can add feed objects for the Drop     |
| PreRead    |     Check if user can view Drop (I.E. friends if user has publicity at Friends, Anyone if public, nobody but self if private)       |     Check if user can view user (I.E. friends if user has publicity at Friends, Anyone if public, nobody but self if private)      |     Check if user can view feed obj (I.E. friends if user has publicity at Friends, Anyone if public, nobody but self if private)      |
| PreUpdate  |     Check if user can update drop (I.e. drop publicity allows user)        |      Check if user is user updating     |     Check if user is creator      |
| PreDelete  |     Check if user is creator.  Remove DropID from All Users, Remove all Feed obj with DropID        |      Check if user is same as user deleted. Remove UserID from all friends, remove all feed obj with user as creator    |      Check if user is creator. Remove feedID from Drop and Creator     |
| PostCreate |     Add Drop to creator        |     Find all FB Friends on Drops and add to User as friends and add user as friend back      |  Add FeedID to Drop and Creator         |
| PostRead   |             |           |           |
| PostUpdate |             |           |           |
| PostDelete |            |           |           |
