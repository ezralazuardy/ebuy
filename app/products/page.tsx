import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const items = [
  {
    id: 1,
    name: "Acme Headphones",
    description: "Wireless Bluetooth headphones with noise cancelling",
    price: 99.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Acme Smartwatch",
    description: "Waterproof smartwatch with heart rate monitor",
    price: 199.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Acme Fitness Tracker",
    description: "Fitness tracker with step counter and sleep monitor",
    price: 79.99,
    quantity: 1,
  },
  {
    id: 4,
    name: "Acme Smart Plug",
    description: "Smart plug that works with Alexa and Google Assistant",
    price: 49.99,
    quantity: 1,
  },
  {
    id: 5,
    name: "Acme Security Camera",
    description: "Indoor security camera with motion detection",
    price: 129.99,
    quantity: 1,
  },
  {
    id: 6,
    name: "Acme Smart Thermostat",
    description: "Smart thermostat that learns your schedule",
    price: 149.99,
    quantity: 1,
  },
  {
    id: 7,
    name: "Acme Smart Scale",
    description: "Smart scale that measures weight and body fat",
    price: 69.99,
    quantity: 1,
  },
  {
    id: 8,
    name: "Acme Smart Lock",
    description: "Smart lock that works with your smartphone",
    price: 199.99,
    quantity: 1,
  },
];

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
