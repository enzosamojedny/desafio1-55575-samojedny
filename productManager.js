const fs = require("fs");
class ProductManager {
  constructor(path = "") {
    this.path = path;
    this.products = this.getProducts();
  }
  getProducts = () => {
    try {
      const data = fs.readFileSync(this.path, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
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

    const result = this.products.push(product);
    fs.writeFileSync(this.path, JSON.stringify(result));
  };

  getProductById = (idProducto) => {
    const readFile = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const product = readFile.find((product) => product.id === idProducto);
    if (!product) {
      console.log("Product not found.");
      return;
    } else {
      return JSON.parse(product);
    }
  };
  updateProduct = (idProducto, updatedProduct) => {
    const productToUpdate = producto.find(
      (product) => product.id === idProducto
    );
    if (!productToUpdate) {
      console.log("Product not found.");
      return;
    }
    Object.assign(productToUpdate, updatedProduct);
    fs.writeFileSync(this.path, JSON.stringify(this.products, null));
  };
  deleteProduct = (id) => {
    const updatedProducts = this.products.filter(
      (product) => product.id !== id
    );
    this.products = updatedProducts;
    fs.writeFileSync(this.path, JSON.stringify(this.products, null));
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
//!Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID
//!Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
