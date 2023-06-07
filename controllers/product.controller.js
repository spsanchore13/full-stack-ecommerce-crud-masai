const fs = require("fs");

const getAllProducts = (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));

  try {
    res.status(200).send(db.products);
  } catch (error) {
    res.status(404).send(error);
  }
};
const addProduct = (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  try {
    db.products.push({ ...req.body, id: db.products.length + 1 });
    fs.writeFileSync("db.json", JSON.stringify(db));
    res.status(200).send(db.products);
  } catch (error) {
    res.status(404).send(error);
  }
};
const updateProduct = (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  try {
    const data = db.products.map((product) => {
      if (product.id === Number(req.params.id)) {
        if (req.body.title) {
          product.title = req.body.title;
        }

        if (req.body.description) {
          product.description = req.body.description;
        }

        if (req.body.price) {
          product.price = req.body.price;
        }

        if (req.body.image) {
          product.image = req.body.image;
        }
      }
      return product;
    });

    db.products = data;

    fs.writeFileSync("db.json", JSON.stringify(db));
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteProduct = (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  try {
    const data = db.products.filter(
      (product) => product.id !== Number(req.params.id)
    );

    db.products = data;

    fs.writeFileSync("db.json", JSON.stringify(db));
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };
