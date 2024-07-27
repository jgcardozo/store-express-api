const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
      image: faker.image.url(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  async findOne(id) {
    const name = this.juanfunc;
    const product = this.products.find((f) => f.id === id);
    if (!product) {
      throw boom.notFound('product no existe method:findOne');
    }
    if (product.isBlock) {
      throw boom.conflict('this product is not available');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('productico no encontrado');
    }
    const prod = this.products[index];
    this.products[index] = {
      ...prod,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found for deleting');
    }
    this.products.splice(index, 1);
    return { id };
  }
} //class

module.exports = ProductServices;
