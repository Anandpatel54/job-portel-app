import express from "express";
import {
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.post("/register", singleUpload, register);
//router.route("/register").post(register)
router.post("/login", login);
router.get("/logout", logout);
router.post("/Profile/update", isAuthenticated, singleUpload, updateProfile);

export default router;
