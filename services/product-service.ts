import "reflect-metadata";
import { inject, injectable } from "inversify";
import ProductRepository from "@/repositories/product-repository";
import type Product from "@/models/product";

@injectable()
export default class ProductService {
  @inject(ProductRepository)
  private productRepository: ProductRepository;

  async getProducts(query: string): Promise<Array<any>> {
    let products = await this.productRepository.getProducts();

    if (query !== "") {
      return products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return products;
  }

  async getProduct(id: string): Promise<Product | undefined> {
    let products = await this.productRepository.getProducts();

    const product = products.find((product) => product.id === id);

    if (product) {
      return {
        id: product.id,
        image_url: product.image_url,
        name: product.name,
        price: product.price,
        unit: product.unit,
        short_description: product.short_description,
        description: product.description,
        statement_description: product.statement_description,
        marketing_feature: product.marketing_feature,
      } as Product;
    }

    return undefined;
  }
}
