
function feedPostCreate (req, res, next) {
  next()
}

function feedPostUpdate (req, res, next) {
  next()
}

function feedPostDelete (req, res, next) {
  next()
}

var options = {
  postCreate: feedPostCreate,
  postUpdate: feedPostUpdate,
  postDelete: feedPostDelete
}

module.exports = options
