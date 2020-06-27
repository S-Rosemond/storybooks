const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

const Story = require('../models/Story');

// @desc    Show add page
// @route   GET /stories/add

// @desc    Process add form
// @route   POST /stories

// @desc    Show all stories
// @route   GET /stories

// @desc    Show single story
// @route   GET /stories/:id

// @desc    Show edit page
// @route   GET /stories/edit/:id

// @desc    Update story
// @route   PUT /stories/:id

// @desc    Delete story
// @route   DELETE /stories/:id

// @desc    User stories
// @route   GET /stories/user/:userId

module.exports = router;
