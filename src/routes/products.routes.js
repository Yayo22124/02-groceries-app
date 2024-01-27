import { Router } from "express";
import productsController from "../controller/products.controller.js";

// Instance of Express Router
const router = Router();

router.get("getAll", productsController.getAll)
export default router;