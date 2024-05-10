import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";

const items = products;

export default function Products() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link
                className="absolute inset-0 z-10"
                href={`/products/${item.id}`}
              >
                <span className="sr-only">View Product</span>
              </Link>
              <Image
                alt={item.name}
                className="w-full h-64 object-cover group-hover:opacity-50 transition-opacity"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold text-lg">${item.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
