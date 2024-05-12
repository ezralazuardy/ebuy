import { Suspense } from "react";
import ProductList from "@/components/product-list";
import ProductListSkeleton from "@/components/product-list-skeleton";

type Props = {
  params?: {
    search?: string;
    page?: string;
  };
};

export default async function Page({ params }: Props) {
  const query = params?.search || "";
  const currentPage = Number(params?.page) || 1;

  return (
    <Suspense key={query + currentPage} fallback={<ProductListSkeleton />}>
      <ProductList search={query} />
    </Suspense>
  );
}
