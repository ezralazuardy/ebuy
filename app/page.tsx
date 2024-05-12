import { Suspense } from "react";
import ProductItem from "@/components/product-item";
import ProductItemSkeleton from "@/components/product-item-skeleton";

type Props = {
  searchParams?: {
    search?: string;
    page?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Suspense key={query + currentPage} fallback={<ProductItemSkeleton />}>
      <ProductItem search={query} />
    </Suspense>
  );
}
