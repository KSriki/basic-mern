const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

// @route   GET api/auth
// @desc    Test route
// @access  Public
// auth is middleware - protected route!
router.get("/", auth, async (req, res) => {
  try {
    // user is created by middleware after decoding
    // select to not have password
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
