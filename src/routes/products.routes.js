import { deleteOne, getAll, getOne, insertOne, updateOne } from "../controllers/products.controller.js";

import { Router } from "express";

// Instance of Express Router
const router = Router();

router.get("/", getAll)
router.get("/:barcode", getOne)
router.post("/", insertOne)
router.put("/:barcode", updateOne)
router.delete("/:barcode", deleteOne)


export default router;