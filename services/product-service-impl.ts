import "reflect-metadata";
import { inject, injectable } from "inversify";
import { REPOSITORY_TYPES } from "@/repositories/types/repository-types";
import ProductService from "@/services/interfaces/product-service";
import type ProductRepository from "@/repositories/interfaces/product-repository";

@injectable()
export default class ProductServiceImpl implements ProductService {
  @inject(REPOSITORY_TYPES.ProductRepository)
  private productRepository: ProductRepository;

  async getProducts(name: string): Promise<Array<any>> {
    let products = await this.productRepository.getProducts();

    if (name !== "") {
      return products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return products;
  }

  async findProduct(): Promise<any> {
    //
  }

  async createProduct(): Promise<any> {
    //
  }

  async updateProduct(): Promise<any> {
    //
  }

  async deleteProduct(): Promise<any> {
    //
  }
}
