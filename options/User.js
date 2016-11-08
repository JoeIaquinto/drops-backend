// Get permanent FB id from user's cookie app id
// Check if user already signed up using FB_ID
function userPreCreate (req, res, next) {
  next()
}

// Check if user can view user
// I.E. friends if user has publicity at Friends, Anyone if public, nobody but self if private
function userPreRead (req, res, next) {
  next()
}

// Check if user is same as user updating
function userPreUpdate (req, res, next) {
  next()
}

// Check if user is same as user deleted
// Remove UserID from all friends, remove all feed obj with user as creator
function userPreDelete (req, res, next) {
  next()
}

// Find all FB Friends on Drops and add to User as friends and add user as friend back
function userPostCreate (req, res, next) {
  next()
}

function userPostRead (req, res, next) {
  next()
}

function userPostUpdate (req, res, next) {
  next()
}

function userPostDelete (req, res, next) {
  next()
}

var options = {
  preCreate: userPreCreate,
  preRead: userPreRead,
  preUpdate: userPreUpdate,
  preDelete: userPreDelete,
  postCreate: userPostCreate,
  postRead: userPostRead,
  postUpdate: userPostUpdate,
  postDelete: userPostDelete
}

module.exports = options
