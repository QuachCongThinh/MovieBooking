const express = require("express");
const { register, login, checkUsernameExists } = require("../controllers/authController");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

router.get("/verify", authenticateToken, (req, res) => {
  res.status(200).json({ message: "JWT is valid", user: req.user });
});

router.post("/login", login);

router.post("/register", register);

router.post("/checkUsername", checkUsernameExists)

module.exports = router;
