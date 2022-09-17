import  Express  from "express";
import { login, register } from "../controller/auth.js";

const router = Express.Router();

router.post('/register', register)
router.post('/login', login)
export default router