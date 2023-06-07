import React from "react";

const UpdateProduct = ({ updateItem, setUpdateItem, handleUpdate }) => {
  return (
    <div>
      <form className="addProduct" onSubmit={handleUpdate}>
        <h3 style={{ textAlign: "center" }}>Update Existing Product</h3>
        <label for="name">Product ID</label>
        <input
          type="text"
          placeholder="Product ID"
          value={updateItem.id}
          disabled
        />
        <label for="name">Name</label>
        <input
          type="text"
          placeholder="Product name..."
          value={updateItem.title}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, title: e.target.value })
          }
        />
        <label for="description">Description</label>
        <input
          type="text"
          placeholder="Product description..."
          value={updateItem.description}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, description: e.target.value })
          }
        />
        <label for="price">Price</label>
        <input
          type="number"
          placeholder="Product price..."
          value={updateItem.price}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, price: e.target.value })
          }
        />
        <label for="image">Image</label>
        <input
          type="url"
          placeholder="Product image url..."
          value={updateItem.image}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, image: e.target.value })
          }
        />
        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default UpdateProduct;
