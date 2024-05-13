import container from "@/libraries/di/container";
import ProductRepository from "@/repositories/product-repository";
import ProductService from "@/services/product-service";
import UserService from "@/services/user-service";

export function getProductRepository(): ProductRepository {
  return container.get(ProductRepository);
}

export function getProductService(): ProductService {
  return container.get(ProductService);
}

export function getUserService(): UserService {
  return container.get(UserService);
}
