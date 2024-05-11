import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Package, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/search-bar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white shadow-sm dark:bg-gray-950">
      <Link className="flex items-center gap-2 font-semibold text-lg" href="/">
        <Package className="h-6 w-6" />
        <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
      </Link>
      <SignedIn>
        <div className="flex items-center gap-4">
          <SearchBar label="Search product..." />
          <Link href="/cart">
            <Button className="rounded-full" size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <div className="w-8 grid grid-cols-1content-center">
            <UserButton />
          </div>
        </div>
      </SignedIn>
    </header>
  );
}
