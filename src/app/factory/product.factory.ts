// product.interface.ts
export interface Product {
  name: string;
  price: number;
  description: string;
  getInfo(): string;
}

// laptop.product.ts
class LaptopProduct implements Product {
  name = 'Laptop';
  price = 1000;
  description = 'A powerful laptop for all your computing needs.';

  getInfo(): string {
    return `${this.name}: ${this.description} Price: $${this.price}`;
  }
}

// phone.product.ts
class PhoneProduct implements Product {
  name = 'Phone';
  price = 500;
  description = 'A sleek and modern smartphone for staying connected.';

  getInfo(): string {
    return `${this.name}: ${this.description} Price: $${this.price}`;
  }
}

// product.factory.ts
export class ProductFactory {
  createProduct(type: string): Product {
    switch (type) {
      case 'laptop':
        return new LaptopProduct();
      case 'phone':
        return new PhoneProduct();
      default:
        throw new Error(`Invalid product type: ${type}`);
    }
  }
}
