import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUserById);

export default router;
