const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google

// @desc    Google auth callback
// @route   GET /auth/google/callback

// @desc    Logout user
// @route   /auth/logout

module.exports = router;
