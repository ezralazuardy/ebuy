import "reflect-metadata";
import { Container } from "inversify";
import ProductRepository from "@/repositories/product-repository";
import ProductService from "@/services/product-service";
import UserService from "@/services/user-service";

const container = new Container();

container.bind(ProductRepository).to(ProductRepository).inSingletonScope();

container.bind(ProductService).to(ProductService).inSingletonScope();

container.bind(UserService).to(UserService).inSingletonScope();

export default container;
