import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Products() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm dark:bg-gray-950">
        <Link
          className="flex items-center gap-2 font-semibold text-lg"
          href="#"
        >
          <Package2Icon className="h-6 w-6" />
          <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </Link>
        <div className="flex items-center gap-4">
          <form className="flex items-center">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Image
              alt="User avatar"
              className="rounded-full"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View product</span>
            </Link>
            <Image
              alt="Product 1"
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
              <h3 className="font-semibold text-lg">Acme Headphones</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                High-quality audio
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold text-lg">$99.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View product</span>
            </Link>
            <Image
              alt="Product 2"
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
              <h3 className="font-semibold text-lg">Acme Smartwatch</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Sleek and modern design
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold text-lg">$199.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View product</span>
            </Link>
            <Image
              alt="Product 3"
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
              <h3 className="font-semibold text-lg">Acme Fitness Tracker</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Track your fitness goals
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold text-lg">$79.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <Link className="text-blue-600 hover:underline" href="#">
              View all
            </Link>
          </div>
          <div className="mt-6 border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Total
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 dark:text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 dark:border-gray-800">
                  <td className="px-4 py-4 flex items-center gap-4">
                    <Image
                      alt="Product 1"
                      className="rounded-md"
                      height={64}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width={64}
                    />
                    <div>
                      <h4 className="font-semibold">Acme Headphones</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        High-quality audio
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold">$99.99</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span>1</span>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <PlusIcon className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold">$99.99</td>
                  <td className="px-4 py-4 text-right">
                    <Button
                      className="rounded-full"
                      size="icon"
                      variant="outline"
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Remove from cart</span>
                    </Button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-800">
                  <td className="px-4 py-4 flex items-center gap-4">
                    <Image
                      alt="Product 2"
                      className="rounded-md"
                      height={64}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width={64}
                    />
                    <div>
                      <h4 className="font-semibold">Acme Smartwatch</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Sleek and modern design
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold">$199.99</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span>1</span>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <PlusIcon className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold">$199.99</td>
                  <td className="px-4 py-4 text-right">
                    <Button
                      className="rounded-full"
                      size="icon"
                      variant="outline"
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Remove from cart</span>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-end">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>
                <span className="font-semibold">$299.98</span>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Shipping
                </span>
                <span className="font-semibold">$0.00</span>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">Total</span>
                <span className="font-semibold">$299.98</span>
              </div>
              <div className="mt-6 flex justify-end">
                <Button>Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-950 py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Acme Store. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
