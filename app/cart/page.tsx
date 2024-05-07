import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  return (
    <>
      <Header />
      <main className="mt-12">
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
              <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
              <span className="font-semibold">$299.98</span>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Shipping</span>
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
      </main>
      <Footer />
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
