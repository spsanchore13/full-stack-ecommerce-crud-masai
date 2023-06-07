import React from "react";

const ProductCard = ({ item, handleDelete, handleEdit }) => {
  return (
    <div className="productCard">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Rs {item.price}</p>
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
