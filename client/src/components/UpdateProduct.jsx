import React from "react";

const UpdateProduct = ({ updateItem, setUpdateItem, handleUpdate }) => {
  return (
    <div>
      <form className="updateProduct" onSubmit={handleUpdate}>
        <h3 style={{ textAlign: "center" }}>Update Existing Product</h3>
        <label htmlFor="name">Product ID</label>
        <input
          data-testid="id"
          type="text"
          placeholder="Product ID"
          value={updateItem.id}
          disabled
        />
        <label htmlFor="name">Name</label>
        <input
          data-testid="name"
          type="text"
          placeholder="Product name..."
          value={updateItem.title}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, title: e.target.value })
          }
        />
        <label htmlFor="description">Description</label>
        <input
          data-testid="description"
          type="text"
          placeholder="Product description..."
          value={updateItem.description}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, description: e.target.value })
          }
        />
        <label htmlFor="price">Price</label>
        <input
          data-testid="price"
          type="number"
          placeholder="Product price..."
          value={updateItem.price}
          onChange={(e) =>
            setUpdateItem({ ...updateItem, price: e.target.value })
          }
        />
        <label htmlFor="image">Image</label>
        <input
          data-testid="image"
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
