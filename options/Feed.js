var Drop = require('../models/Drop')
var User = require('../models/User')
var Feed = require('../models/Feed')

// Requires User logged in, DropID provided
// Determine if user can add feed objects for the Drop (is guest?)
// Determine action made? Use diff of old drop to new?
// TODO: Figure that out^
// Determine time created
// Save UserID to Feed Creator field.
function feedPreCreate (req, res, next) {
  next()
}

// Check if user can view this feed obj
function feedPreRead (req, res, next) {
  next()
}

// Check if the user is the creator
// Shouldn't really be needed? Maybe to add favorites/ Likes
function feedPreUpdate (req, res, next) {
  next()
}

// Check if the user is the creator
// Remove feed reference from Drop and Creator
function feedPreDelete (req, res, next) {
  next()
}

// Add Feed ID to Drop and Creator
function feedPostCreate (req, res, next) {
  next()
}

function feedPostRead (req, res, next) {
  next()
}

function feedPostUpdate (req, res, next) {
  next()
}

function feedPostDelete (req, res, next) {
  next()
}

var options = {
  preCreate: feedPreCreate,
  preRead: feedPreRead,
  preUpdate: feedPreUpdate,
  preDelete: feedPreDelete,
  postCreate: feedPostCreate,
  postRead: feedPostRead,
  postUpdate: feedPostUpdate,
  postDelete: feedPostDelete
}

module.exports = options
