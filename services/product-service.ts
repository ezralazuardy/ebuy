import "reflect-metadata";
import { inject, injectable } from "inversify";
import ProductRepository from "@/repositories/product-repository";

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
}
