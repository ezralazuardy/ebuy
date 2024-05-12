import { getProductService } from "@/libraries/di/container";
import { Suspense } from "react";
import ProductList from "@/components/product-list";
import ProductListSkeleton from "@/components/product-list-skeleton";

type Props = {
  searchParams?: {
    search?: string;
    page?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  const items = await getProductService().getProducts(query);
  return (
    <Suspense key={query + currentPage} fallback={<ProductListSkeleton />}>
      <ProductList items={items} />
    </Suspense>
  );
}
