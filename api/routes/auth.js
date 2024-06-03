import express from "express";
import {addPost} from "../controllers/post.js";
import {login, register, logout} from "../controllers/auth.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router;