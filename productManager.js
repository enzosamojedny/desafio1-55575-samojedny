class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const existingProduct = this.products.find(
      (product) => product.code === code
    );
    if (existingProduct) {
      console.log("Product with the same code already exists.");
      return;
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("All fields are mandatory.");
      return;
    }

    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.products.length + 1,
    };

    this.products.push(product);
  };

  getProductById = (idProducto) => {
    const product = this.products.find((product) => product.id === idProducto);
    if (!product) {
      console.log("Product not found.");
      return;
    } else {
      return product;
    }
  };
}

const productManager = new ProductManager();
console.log(productManager.getProducts());

productManager.addProduct(
  "Product 1",
  "Description 1",
  100,
  "thumbnail1.jpg",
  "P1",
  10
);
productManager.addProduct(
  "Product 2",
  "Description 2",
  150,
  "thumbnail2.jpg",
  "P2",
  20
);

console.log(productManager.getProducts());

productManager.addProduct(
  "Product 1",
  "Description 1",
  100,
  "thumbnail1.jpg",
  "P1",
  10
);

const foundProduct = productManager.getProductById(1);
console.log(foundProduct);

const nonExistentProduct = productManager.getProductById(3);
