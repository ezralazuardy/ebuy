"use client";

import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import { CircleCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center mt-52 px-4 md:px-6">
        <div className="max-w-md text-center space-y-4">
          <CircleCheckIcon className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="text-3xl font-bold">Order Confirmed</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Thank you for your purchase. Your order will be processed.
          </p>
          <div>
            <Link href="/">
              <Button>Browse More Products</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
