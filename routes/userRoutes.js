const express = require("express");
const {
  registerUser,
  loginUser,
  getUserData,
  getAdmin,
} = require("../controllers/userController");
const AuthMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/getUserData", AuthMiddleware, getUserData);
router.get("/getAdmin", AuthMiddleware, getAdmin);
module.exports = router;
