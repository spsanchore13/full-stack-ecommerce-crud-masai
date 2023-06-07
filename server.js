const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.route");
require("dotenv").config();
const PORT = process.env.REACT_APP_BACKEND_SERVER_PORT;
const server = express();

server.use(express.json());
server.use(cors());

server.use("/products", productRouter);

server.use("/", (req, res) => {
  try {
    res
      .status(200)
      .send(
        `<h2 style="color:green;font-size:26px;margin:20px auto;">Welcome to e-commerce dashboard</h2>`
      );
  } catch (error) {
    res.status(404).send(error);
  }
});

server.listen(PORT, async function () {
  try {
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    console.log("server error", error);
  }
});

module.exports = server;
