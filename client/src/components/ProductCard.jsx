import React from "react";

const ProductCard = ({ item, handleDelete, handleEdit }) => {
  return (
    <div className="productCard">
      <div>
        <h3 data-testid="title">{item.title}</h3>
        <p data-testid="description">{item.description}</p>
        <p data-testid="price">Rs {item.price}</p>
        <button
          className="productCard_editBtn"
          onClick={() => handleEdit(item)}
        >
          Edit
        </button>
        <button
          className="productCard_deleteBtn"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
};

export default ProductCard;
