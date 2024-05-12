import "reflect-metadata";
import { injectable } from "inversify";
import { products } from "@/libraries/data";
import type Product from "@/models/product";
// import { db } from "@/libraries/drizzle/db";

@injectable()
export default class ProductRepository {
  async getProducts(): Promise<Array<Product>> {
    return products.map((product: any) => product as Product);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const product = products.find((product: any) => product.id === id);

    if (product) {
      return product as Product;
    }

    return undefined;
  }
}
