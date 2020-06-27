const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../models/Story');

// @desc    Login/Landing page
// @route   GET /

// @desc    Dashboard
// @route   GET /dashboard

module.exports = router;
