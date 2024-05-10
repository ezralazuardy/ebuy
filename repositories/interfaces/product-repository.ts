export default interface ProductRepository {
  getProducts(): Promise<Array<any>>;
  findProduct(): Promise<any>;
}
