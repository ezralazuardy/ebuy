import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductItem from "@/components/product-item";
import ProductItemSkeleton from "@/components/product-item-skeleton";

interface Props {
  searchParams?: {
    search?: string;
    page?: string;
  };
}

export default async function Products({ searchParams }: Props) {
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Header />
      <Suspense key={query + currentPage} fallback={<ProductItemSkeleton />}>
        <ProductItem search={query} />
      </Suspense>
      <Footer />
    </>
  );
}
