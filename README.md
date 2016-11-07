# Drops Backend

Event, user, and feed RESTful API for the [Drops React Native App](https://github.com/JoeIaquinto/drops).
=======
# Installation

  Make sure you have the latest version of [NodeJS](https://nodejs.org/en/). Pull the repository and `$npm install`. Download [Ngrok](https://ngrok.com/). Install [MongoDB](https://www.mongodb.com/) and necessary tools. Optionally, install [Nodemon](https://github.com/remy/nodemon) to refresh the app on save.

# Setup
  Run `mongod` to start the Mongo database. Start the app with `node index.js` or `nodemon index.js`. If testing on the mobile device, run `$./ngrok http 3000` to open a tunnel to localhost so that the mobile app can access the backend.
