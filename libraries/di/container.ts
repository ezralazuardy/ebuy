import "reflect-metadata";
import { Container } from "inversify";

const container = new Container();

// -- start of type bindings
import { REPOSITORY_TYPES } from "@/repositories/types/repository-types";
import { SERVICE_TYPES } from "@/services/types/service-types";
// -- end of types bindings

// -- start of repository bindings
import ProductRepository from "@/repositories/interfaces/product-repository";
import ProductRepositoryImpl from "@/repositories/product-repository-impl";

container
  .bind<ProductRepository>(REPOSITORY_TYPES.ProductRepository)
  .to(ProductRepositoryImpl)
  .inSingletonScope();
// -- end of repository bindings

// -- start of service bindings
import ProductService from "@/services/interfaces/product-service";
import ProductServiceImpl from "@/services/product-service-impl";

import UserService from "@/services/interfaces/user-service";
import UserServiceImpl from "@/services/user-service-impl";

container
  .bind<ProductService>(SERVICE_TYPES.ProductService)
  .to(ProductServiceImpl)
  .inSingletonScope();

container
  .bind<UserService>(SERVICE_TYPES.UserService)
  .to(UserServiceImpl)
  .inSingletonScope();
// -- end of service bindings

export default container;
