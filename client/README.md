<h1 style="color:black">
React E-commerce Full Stack Application With Express
</h1>

<h2 style="color:red">
Installation & Note:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Please make sure you do not push package-lock.json
- Make sure that the json-server is up and running at port `8080`
- Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server URL where ever you use `http://localhost:8080`

```
// install node_modules
npm install --engine-strict
// run locally
npm run start
```

<h1 style="color:#215dc8">
1. Backend Instructions 
</h1>

<h2 style="color:#215dc8">
Maximum Marks: 10
</h2>

```
✅ Able to make submission: - 1 Mark
✅ Able to setup server: - 1 Mark
✅ Should get all products from endpoint `GET` - `/products` endpoint: - 2 Mark
✅ Should return all products with newly added product for `POST` - `/products/add` endpoint: - 2 Mark
✅ Should delete a product from database for `DELETE` - `/products/delete:id` endpoint: - 2 Mark
✅ Should update a existing product into database for `PATCH` - `/products/update/:id` endpoint: - 2 Mark
```

<h3 style="color:#215dc8">
I. Backend Folder Structure (Important Files)
</h3>

```
├── controllers
|  └── product.controller.js
├── routes
|  └── product.route.js
├── db.json                (database for crud operations)
├── package.json
├── server.js              (express server setup file)
├── src                    (directory for frontend development)
└── __test__
   ├── app.test.js
   └── db.json
```

<h3 style="color:#215dc8">
II. Endpoints needs to be implemented
</h3>

<h4 style="color:#215dc8">
A. GET - "/"
</h4>

- This will return a html `h2` tag with the text `Welcome to e-commerce dashboard`

<h4 style="color:#215dc8">
B. GET - "/products" - 1 Mark
</h4>

- This will be the array of all the products from server.

<h4 style="color:#215dc8">
C. POST - "/products/add" - 2 Marks
</h4>

- Request body will have following values.

```
title           ? name of the product
price           ? price of the product
description     ? description of the product
image           ? image url of the product
```

- Each time you make an post request and id will be `+` by `1` and added to product.

- Response will be an array of all products with newly added product.

<h4 style="color:#215dc8">
D. PATCH - "/products/update/:id" - 2 Marks
</h4>

- Request body can have any value from following.

```
title           ? name of the product
price           ? price of the product
description     ? description of the product
image           ? image url of the product
```

- Response will be an array of all products with updated product.

<h4 style="color:#215dc8">
E. DELETE - "/products/delete/:id" -  2 Marks
</h4>

- This will be the array of all the remaining products from server after deleted product.

<h1 style="color:#215dc8">
1. Frontend Instructions 
</h1>

<h2 style="color:#215dc8">
Maximum Marks: 14
</h2>

```
✅ Should have a application title visible: - 1 Mark
✅ Should make a get request to `/products` endpoint when page loads: - 2 Marks
✅ Should have all the products visible in the dom: - 2 Marks
✅ Should add product in database and also update in dom real time: - 2 Marks
✅ Should clear addProduct form after product is added to database: - 1 Mark
✅ Should delete a product from dashboard and changes will be reflect in dom in real time: - 2 Marks
✅ onClicking edit button all the data related to product should be populated into update form: - 1 Mark
✅ Should update product and updates will be reflect in dom real time: - 2 Marks
✅ Should clear the update form after updating the product: - 1 Mark
```

<h3 style="color:#215dc8">
I. Frontend Folder Structure (Important Files)
</h3>

```
src
├── App.css
├── App.js
├── components
|  ├── AddNewProduct.jsx
|  ├── ProductCard.jsx
|  └── UpdateProduct.jsx
├── index.css
├── index.js
├── logo.svg
└── pages
   └── Dashboard.jsx
```

<h3 style="color:#215dc8">
II. Components
</h3>

<h4 style="color:#215dc8">
A. App.js
</h4>

- App.js will contain the following components:
  - a title `E-commerce Full Stack Application` inside `h1` tag.
  - `Dashboard.jsx` component.

<h4 style="color:#215dc8">
B. Dashboard.jsx
</h4>

- This is the main component of application where you have to perform all the logic and api calls.
- It have two sections `dashboard_products` and `dashboard_operations`.
- Inside `dashboard_products` section you have to map all products into `ProductCard.jsx` component.
- Section `dashboard_operations` will contain two components
  `AddNewProduct.jsx` and `UpdateProduct.jsx`.

<figure>
<img src="https://i.imgur.com/4JVRlt5.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .1 - E-commerce Dashboard</b></figcaption>
</figure>

<h4 style="color:#215dc8">
C. ProductCard.jsx
</h4>

- This is a single product card which will receive required information as props from `Dashboard.jsx`
- A container for all information is already provided into boilerplate and this should contain following properties with tags
  - Product name - inside `h3` tag with `data-testid="title"`
  - Product description - inside `p` tag with `data-testid="description"`
  - Product price - inside `p` tag with `data-testid="price"`
  - a button for editing product with `className="productCard_editBtn"` and text `Edit`
  - a button for deleting product with `className="productCard_deleteBtn"` and text `Delete`
- onClicking `Delete` button product should be deleted and changes will be reflected in the dom(make get request to get updated products).

<figure>
<img src="https://i.imgur.com/5Yz2zkb.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .2 - Product Card</b></figcaption>
</figure>

<h4 style="color:#215dc8">
D. AddNewProduct.jsx
</h4>

- All the required input's are given into form you just have perform logic for adding new product.
- After submitting the form all the fields should be reset to empty.

<figure>
<img src="https://i.imgur.com/dIdNlC7.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .3 - Add New Product</b></figcaption>
</figure>

<h4 style="color:#215dc8">
E. UpdateProduct.jsx
</h4>

- onClicking `Edit` button all the properties of product should be populated with respective input fields.
- input field for id should be disabled.
- All the required input's are given into form you just have perform logic for updating product.
- After submitting the form all the fields should be reset to empty and product should be updated in dom(make get request to get updated products).

<figure>
<img src="https://i.imgur.com/OKLhhW2.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .4 - Update Existing Product</b></figcaption>
</figure>

<h2 style="color:#215dc8">
General Instructions:
</h2>

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

<h2 style="color:#215dc8">
General guidelines:
</h2>

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
