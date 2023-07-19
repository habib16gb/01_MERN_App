import express from "express";
import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfil,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logOutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfil);

export default router;
