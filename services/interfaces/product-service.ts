export default interface ProductService {
  getProducts(name: string): Promise<Array<any>>;
  findProduct(): any;
  createProduct(): any;
  updateProduct(): any;
  deleteProduct(): any;
}
