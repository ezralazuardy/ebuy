"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

type Props = {
  children: React.ReactNode;
};

export default function CartProvider({ children }: Props) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""}
      successUrl={`${process.env.NEXT_PUBLIC_APP_URL}/payment/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`}
      currency="USD"
      shouldPersist={true}
    >
      {children}
    </USCProvider>
  );
}
