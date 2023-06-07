import React from "react";

const AddNewProduct = ({ addItem, setAddItem, handleAddProduct }) => {
  return (
    <div>
      <form className="addProduct" onSubmit={handleAddProduct}>
        <h3 style={{ textAlign: "center" }}>Add New Product</h3>
        <label for="name">Name</label>
        <input
          type="text"
          placeholder="Name..."
          value={addItem.title}
          onChange={(e) => setAddItem({ ...addItem, title: e.target.value })}
        />
        <label for="description">Description</label>
        <input
          type="text"
          placeholder="Description..."
          value={addItem.description}
          onChange={(e) =>
            setAddItem({ ...addItem, description: e.target.value })
          }
        />
        <label for="price">Price</label>
        <input
          type="number"
          placeholder="Price..."
          value={addItem.price}
          onChange={(e) => setAddItem({ ...addItem, price: e.target.value })}
        />
        <label for="image">Image</label>
        <input
          type="url"
          placeholder="Image url..."
          value={addItem.image}
          onChange={(e) => setAddItem({ ...addItem, image: e.target.value })}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddNewProduct;
