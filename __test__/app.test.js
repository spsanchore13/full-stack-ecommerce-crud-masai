const request = require("supertest");
const server = require("../server");
const fs = require("fs");

const initialProducts = require("./db.json");

global.score = 1;

beforeEach(() => {
  fs.writeFileSync("db.json", JSON.stringify(initialProducts));
});

describe("Full Stack E-commerce Application", () => {
  it("Able to setup server", async () => {
    const res = await request(server).get("/");
    expect(res.text).toEqual(
      '<h2 style="color:green;font-size:26px;margin:20px auto;">Welcome to e-commerce dashboard</h2>'
    );

    global.score += 1;
  });

  it("Should get all products from endpoint `GET` - `/products` endpoint", async () => {
    const res = await request(server).get("/products");
    expect(res.body).toHaveLength(5);
    expect(res.body).toStrictEqual(initialProducts.products);

    global.score += 2;
  });

  it("Should return all products with newly added product for `POST` - `/products/add` endpoint", async () => {
    const product = {
      title: "Lenovo V15 82KDA00XIH AMD Ryzen 5 5500U",
      description:
        "It is powered by the 2.1 GHz AMD Ryzen 5 5500U processor that gives you faster performance without any lags.",
      price: 44999,
      image:
        "https://img2.gadgetsnow.com/gd/images/products/additional/large/G413762_View_1/computer-laptop/laptops/lenovo-v15-82kda00xih-amd-ryzen-5-5500u-15-6-inches-notebook-laptop-8gb-512gb-ssd-windows-11-grey-1-7-kg-.jpg",
    };
    const res = await request(server)
      .post("/products/add")
      .send(product)
      .set("Accept", "application/json");

    // console.log(res.body);
    expect(res.body).toHaveLength(6);
    expect(res.body[5].title).toMatch(product.title);
    expect(res.body[5].description).toMatch(product.description);
    expect(res.body[5].price).toBe(product.price);
    expect(res.body[5].image).toMatch(product.image);

    global.score += 2;
  });

  it("Should delete a product from database for `DELETE` - `/products/delete:id` endpoint", async () => {
    const res1 = await request(server).delete("/products/delete/5");

    expect(res1.body).toHaveLength(4);

    const res2 = await request(server).delete("/products/delete/4");

    expect(res2.body).toHaveLength(3);

    global.score += 2;
  });

  it("Should update a existing product into database for `PATCH` - `/products/update/:id` endpoint", async () => {
    const updatedData = {
      title: "Gorgeous Chicken",
      price: 599,
      description:
        "The chicken is a domesticated red junglefowl species that is originally from Southeast Asia. They have also partially hybridized with other wild species of junglefowl. ",
      image:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTOA-mdxDFD1HXjEQ7jvLhLsalTb0WNNnViy3Vz8gPFZFkj0bXgMi0JV5H1rfTTwRCTBIJHuV7wuw0ug8vMv4EGl46tlT_xhK2I9U4nMVlZ",
    };
    const res = await request(server)
      .patch("/products/update/2")
      .send(updatedData)
      .set("Accept", "application/json");

    expect(res.body).toHaveLength(5);
    expect(res.body[1].title).toMatch(updatedData.title);
    expect(res.body[1].description).toMatch(updatedData.description);
    expect(res.body[1].price).toBe(updatedData.price);
    expect(res.body[1].image).toMatch(updatedData.image);

    const updatedData1 = {
      title: "Realme Narzo N53",
      price: 8999,
      description:
        "Vast selection of components, accessories, adapters, media drives & more from top brands. Low Prices",
      image:
        "https://fdn.gsmarena.com/imgroot/news/23/05/realme-narzo-n53-specs-launch-date-design-colors/inline/-1200x600m/gsmarena_002.jpg",
    };

    const res1 = await request(server)
      .patch("/products/update/5")
      .send(updatedData)
      .set("Accept", "application/json");

    expect(res1.body).toHaveLength(5);
    expect(res1.body[4].title).toMatch(updatedData.title);
    expect(res1.body[4].description).toMatch(updatedData.description);
    expect(res1.body[4].price).toBe(updatedData.price);
    expect(res1.body[4].image).toMatch(updatedData.image);

    global.score += 2;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
