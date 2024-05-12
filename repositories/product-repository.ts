import "reflect-metadata";
import { db } from "@/libraries/drizzle/db";
import { injectable } from "inversify";
import { products } from "@/libraries/data";

@injectable()
export default class ProductRepository {
  async getProducts(): Promise<Array<any>> {
    return products;
  }

  async findProduct(): Promise<any> {
    return db;
  }
}
