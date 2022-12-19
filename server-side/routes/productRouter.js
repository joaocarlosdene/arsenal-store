import express from 'express';

import {getMethod, getMethodID, postMethod, updateMethod, deleteMethod}  from "../controllers/productController.js";

const router = express.Router();


//GET REQUEST
router.get('/', getMethod);

//GET REQUEST ID
router.get('/:id', getMethodID)

//POST REQUEST
router.post('/', postMethod)

//UPDATE REQUEST
router.patch('/:id', updateMethod)

//DELETE REQUEST
router.delete('/:id', deleteMethod)

export default router;