import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductItems from "@/components/product-items";

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
      <Suspense key={query + currentPage} fallback={<span>Loading...</span>}>
        <ProductItems search={query} />
      </Suspense>
      <Footer />
    </>
  );
}
