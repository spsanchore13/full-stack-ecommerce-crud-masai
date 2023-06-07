<h1 style="color:black">
React E-commerce Full Stack Application With Express
</h1>

<h2 style="color:#215dc8">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

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
B. GET - "/products"
</h4>

- This will be the array of all products from server.

<h4 style="color:#215dc8">
C. POST - "/products/add"
</h4>

- This will be the array of all products from server.

<h4 style="color:#215dc8">
D. PATCH - "/products/update/:id"
</h4>

- This will be the array of all products from server.

<h4 style="color:#215dc8">
E. DELETE - "/products/delete/:id"
</h4>

- This will be the array of all products from server.

<h1 style="color:#215dc8">
1. Frontend Instructions 
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
A. Dashboard.jsx
</h4>

<figure>
<img src="https://i.imgur.com/4JVRlt5.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>E-commerce Dashboard</b></figcaption>
</figure>

<h4 style="color:#215dc8">
B. ProductCard.jsx
</h4>

<figure>
<img src="https://i.imgur.com/5Yz2zkb.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Product Card</b></figcaption>
</figure>

<h4 style="color:#215dc8">
C. AddNewProduct.jsx
</h4>

<figure>
<img src="https://i.imgur.com/dIdNlC7.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Add New Product</b></figcaption>
</figure>

<h4 style="color:#215dc8">
D. UpdateProduct.jsx
</h4>

<figure>
<img src="https://i.imgur.com/OKLhhW2.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Update Existing Product</b></figcaption>
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
