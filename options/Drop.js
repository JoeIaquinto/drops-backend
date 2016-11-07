
function dropPostCreate (req, res, next) {
  next()
}

function dropPostUpdate (req, res, next) {
  next()
}

function dropPostDelete (req, res, next) {
  next()
}

var options = {
  postCreate: dropPostCreate,
  postUpdate: dropPostUpdate,
  postDelete: dropPostDelete
}

module.exports = options
