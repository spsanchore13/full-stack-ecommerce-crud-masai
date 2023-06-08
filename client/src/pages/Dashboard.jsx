import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import AddNewProduct from "../components/AddNewProduct";
import UpdateProduct from "../components/UpdateProduct";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const [updateItem, setUpdateItem] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [addItem, setAddItem] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const getProducts = () => {
    axios(`https://masai-ecommerce-server.onrender.com/products`)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();

    axios
      .post(`https://masai-ecommerce-server.onrender.com/products/add`, {
        ...addItem,
      })
      .then((res) => {
        console.log(res);
        setAddItem({
          ...addItem,
          title: "",
          description: "",
          price: "",
          image: "",
        });
        getProducts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEdit = (item) => {
    setUpdateItem({
      ...updateItem,
      title: item.title,
      id: item.id,
      description: item.description,
      price: item.price,
      image: item.image,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .patch(
        `https://masai-ecommerce-server.onrender.com/products/update/${updateItem.id}`,
        {
          ...updateItem,
        }
      )
      .then((res) => {
        console.log(res);
        setUpdateItem({
          ...updateItem,
          id: "",
          title: "",
          description: "",
          price: "",
          image: "",
        });
        getProducts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://masai-ecommerce-server.onrender.com/products/delete/${id}`
      )
      .then((res) => {
        console.log(res);
        getProducts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="dashboard">
      <div className="dashboard_products">
        {products?.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="dashboard_operations">
        <AddNewProduct
          addItem={addItem}
          setAddItem={setAddItem}
          handleAddProduct={handleAddProduct}
        />
        <UpdateProduct
          updateItem={updateItem}
          setUpdateItem={setUpdateItem}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Dashboard;
