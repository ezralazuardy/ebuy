import "reflect-metadata";
import { inject, injectable } from "inversify";
import { REPOSITORY_TYPES } from "@/repositories/types/repository-types";
import ProductService from "@/services/interfaces/product-service";
import type ProductRepository from "@/repositories/interfaces/product-repository";

@injectable()
export default class ProductServiceImpl implements ProductService {
  @inject(REPOSITORY_TYPES.ProductRepository)
  private productRepository: ProductRepository;

  async getProducts(): Promise<Array<any>> {
    return this.productRepository.getProducts();
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
