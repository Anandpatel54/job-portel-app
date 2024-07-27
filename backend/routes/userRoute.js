import express from "express";
import {
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.post("/register", register);
//router.route("/register").post(register)
router.post("/login", login);
router.get("/logout", logout);
router.post("/Profile/update", isAuthenticated, updateProfile);

export default router;
