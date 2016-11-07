
function userPostCreate (req, res, next) {
  next()
}

function userPostUpdate (req, res, next) {
  next()
}

function userPostDelete (req, res, next) {
  next()
}

var options = {
  postCreate: userPostCreate,
  postUpdate: userPostUpdate,
  postDelete: userPostDelete
}

module.exports = options
