"use client";

import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type Product from "@/models/product";

type Props = {
  item: Product;
};

export default function ProductDetail({ item }: Props) {
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
    <div className="grid md:grid-cols-2 gap-20 items-start max-w-7xl px-4 mx-auto py-20">
      <div>
        <Image
          alt={item.name}
          src={item.image_url}
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          width={600}
          priority
        />
      </div>
      <div className="grid gap-20">
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">{item.name}</h1>
          <p className="font-normal italic text-xl mt-4">
            {item.marketing_feature}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-6">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-4xl font-bold">${item.price.toFixed(2)}</span>
            <span className="text-xl ms-1 font-normal">/ {item.unit}</span>
          </div>
          <Button onClick={() => addToCart()}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
