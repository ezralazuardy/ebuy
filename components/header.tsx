"use client";

import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Package, ShoppingCart } from "lucide-react";

function GuestHeader() {
  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white shadow-sm dark:bg-gray-950">
      <Link className="flex items-center gap-2 font-semibold text-xl" href="/">
        <Package className="h-6 w-6" />
        <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
      </Link>
    </header>
  );
}

function AuthenticatedHeader() {
  const { cartCount } = useShoppingCart();
  const cartIsNotEmpty = cartCount && cartCount > 0;
  return (
    <SignedIn>
      <header className="flex items-center justify-between px-12 py-4 bg-white shadow-sm dark:bg-gray-950">
        <Link
          className="flex items-center gap-2 font-semibold text-xl"
          href="/"
        >
          <Package className="h-6 w-6" />
          <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </Link>
        <div className="flex items-center gap-4">
          <SearchBar label="Search product..." />
          <Link href="/cart">
            <Button
              className="rounded-full relative"
              size="icon"
              variant="ghost"
            >
              {cartIsNotEmpty ? (
                <div className="rounded-full flex justify-center items-center bg-gray-800 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                  {cartCount}
                </div>
              ) : null}
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <div className="w-8 grid grid-cols-1 content-center">
            <UserButton />
          </div>
        </div>
      </header>
    </SignedIn>
  );
}

export default function Header() {
  const pathname = usePathname();

  if (pathname === "/policy" || pathname === "/term") {
    return <GuestHeader />;
  }

  return <AuthenticatedHeader />;
}
