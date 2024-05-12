import "reflect-metadata";
import { inject, injectable } from "inversify";
import ProductRepository from "@/repositories/product-repository";
import type Product from "@/models/product";

@injectable()
export default class ProductService {
  @inject(ProductRepository)
  private productRepository: ProductRepository;

  async getProducts(query: string): Promise<Array<Product>> {
    let products = await this.productRepository.getProducts();

    if (query !== "") {
      return products.filter((product: Product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return products;
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const product = await this.productRepository.getProduct(id);

    if (product) {
      return product as Product;
    }

    return undefined;
  }
}
