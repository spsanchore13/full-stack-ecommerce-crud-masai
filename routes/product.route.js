const express = require("express");

const {
  getAllProducts,
  updateProduct,
  deleteProduct,
  addProduct,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/add", addProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

module.exports = productRouter;
