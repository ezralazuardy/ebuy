import { getProductService } from "@/libraries/di/hook";
import ProductDetail from "@/components/product-detail";
import type Product from "@/models/product";

type Props = {
  searchParams?: {
    id?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  async function getProduct(): Promise<Product> {
    const id: string = searchParams?.id ?? "";

    const product = await getProductService().getProduct(id);

    if (!product) {
      throw new Error("Product not found!");
    }

    return product;
  }

  const product = await getProduct();

  return <ProductDetail item={product} />;
}
