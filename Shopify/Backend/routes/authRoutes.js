const express = require("express");

const router = express.Router();

const { register, login, logout } = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../validators/authValidator");

// @route   POST /api/auth/register
// @desc    Register user / Signup
router.post("/register", validateRegister, register);

// @route   POST /api/auth/login
// @desc    Login user / Get token
router.post("/login", validateLogin, login);

// @route   POST /api/auth/logout
// @desc    Logout user / Clear session cookie
router.post("/logout", logout);

module.exports = router;