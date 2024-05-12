"use client";

import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function Page() {
  const { clearCart } = useShoppingCart();

  useEffect(() => clearCart());

  return <span>Your payment was successful. Thank you for your purchase.</span>;
}
