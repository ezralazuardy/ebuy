import ProductEntry from "@/components/product-entry";
import type Product from "@/models/product";

type Props = {
  items: Array<Product>;
};

export default async function ProductList({ items }: Props) {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item: any) => (
          <ProductEntry key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
