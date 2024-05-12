"use client";

import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Product from "@/models/product";

type Props = {
  item: Product;
};

export default function ProductEntry({ item }: Props) {
  const { addItem } = useShoppingCart();

  function addToCart() {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image_url,
      currency: "USD",
    });
  }

  return (
    <div
      key={item.id}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={`product?id=${item.id}`}>
        <Image
          alt={item.name}
          src={item.image_url}
          className="w-full h-64 object-cover group-hover:opacity-50 transition-opacity"
          height={500}
          width={500}
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          priority
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {item.short_description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-lg">${item.price}</span>
          <Button size="sm" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
