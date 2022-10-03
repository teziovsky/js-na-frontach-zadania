import { Router } from "express";
import { authController } from "./controllers/auth.controller";
import { clientController } from "./controllers/client.controller";
import { orderController } from "./controllers/order.controller";
import { productController } from "./controllers/product.controller";
import { authMiddleware } from "./middleware/auth.middleware";

export const router = Router();

router.use("/auth", authController);
router.use("/clients", authMiddleware, clientController);
router.use("/products", authMiddleware, productController);
router.use("/orders", authMiddleware, orderController);
