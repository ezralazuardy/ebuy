import "reflect-metadata";
import { Container } from "inversify";
import { REPOSITORY_TYPES } from "@/repositories/types/repository-types";
import { SERVICE_TYPES } from "@/services/types/service-types";
import ProductRepository from "@/repositories/interfaces/product-repository";
import ProductRepositoryImpl from "@/repositories/product-repository-impl";
import ProductService from "@/services/interfaces/product-service";
import ProductServiceImpl from "@/services/product-service-impl";
import UserService from "@/services/interfaces/user-service";
import UserServiceImpl from "@/services/user-service-impl";

const container = new Container();

container
  .bind<ProductRepository>(REPOSITORY_TYPES.ProductRepository)
  .to(ProductRepositoryImpl)
  .inSingletonScope();

container
  .bind<ProductService>(SERVICE_TYPES.ProductService)
  .to(ProductServiceImpl)
  .inSingletonScope();

container
  .bind<UserService>(SERVICE_TYPES.UserService)
  .to(UserServiceImpl)
  .inSingletonScope();

export default container;

export function getProductRepository(): ProductRepository {
  return container.get<ProductRepository>(REPOSITORY_TYPES.ProductRepository);
}

export function getProductService(): ProductService {
  return container.get<ProductService>(SERVICE_TYPES.ProductService);
}

export function getUserService(): UserService {
  return container.get<UserService>(SERVICE_TYPES.UserService);
}
