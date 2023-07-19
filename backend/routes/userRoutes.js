import express from "express";
import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfil,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logOutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfil);

export default router;
