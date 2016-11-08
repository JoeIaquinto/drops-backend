
function dropPreCreate (req, res, next) {
  next()
}

// Check if user can view this Drop
function dropPreRead (req, res, next) {
  next()
}

// Check if user can update this drop to join or has permissions to update that field
function dropPreUpdate (req, res, next) {
  next()
}

// Check if the user is the creator of the drop
// Remove the Drop reference from all users, remove all feed objects from the drop
function dropPreDelete (req, res, next) {
  next()
}

// Add Drop to creator, add a feed object for creation
function dropPostCreate (req, res, next) {
  next()
}

function dropPostRead (req, res, next) {
  next()
}

function dropPostUpdate (req, res, next) {
  next()
}

function dropPostDelete (req, res, next) {
  next()
}

var options = {
  preCreate: dropPreCreate,
  preRead: dropPreRead,
  preUpdate: dropPreUpdate,
  preDelete: dropPreDelete,
  postCreate: dropPostCreate,
  postRead: dropPostRead,
  postUpdate: dropPostUpdate,
  postDelete: dropPostDelete
}

module.exports = options
