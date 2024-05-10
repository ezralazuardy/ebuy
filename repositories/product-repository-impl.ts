import "reflect-metadata";
import { db } from "@/libraries/drizzle/db";
import { products } from "@/libraries/data";
import { injectable } from "inversify";
import ProductRepository from "@/repositories/interfaces/product-repository";

@injectable()
export default class ProductRepositoryImpl implements ProductRepository {
  async getProducts(): Promise<Array<any>> {
    return products;
  }

  async findProduct(): Promise<any> {
    return db;
  }
}
