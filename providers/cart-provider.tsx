"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

type Props = {
  children: React.ReactNode;
};

export default function CartProvider({ children }: Props) {
  return (
    <USCProvider
      // The mode of the cart
      mode="payment"
      cartMode="client-only"
      //
      // Connects to our Stripe account (stored in an .env.local file)
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""}
      //
      // Redirected here after successful payments (url stored in .env.local file)
      successUrl={`${process.env.NEXT_PUBLIC_URL}/payment/success`}
      //
      // Redirected here when you click back on Stripe Checkout (url stored in .env.local file)
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/payment/cancel`}
      //
      // Currency used for checkout
      currency="USD"
      //
      // Only customers from UK will be able to purchase
      // Having this setting means that we will capture shipping address
      // allowedCountries={["GB"]}
      //
      // Enables local storage
      shouldPersist={true}
      //
    >
      {children}
    </USCProvider>
  );
}
