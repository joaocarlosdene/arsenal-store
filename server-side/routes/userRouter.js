import express from 'express';
import { loginUser, signupUser } from '../controllers/userController.js';

const router = express.Router();

//LOGIN ROUTE
router.post('/login', loginUser)

//SIGN UP ROUTE
router.post('/signup', signupUser)

export default router;