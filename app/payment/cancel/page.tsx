import Link from "next/link";
import { CircleXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center mt-52 px-4 md:px-6">
        <div className="max-w-md text-center space-y-4">
          <CircleXIcon className="mx-auto h-16 w-16 text-red-500" />
          <h1 className="text-3xl font-bold">Order Canceled</h1>
          <p className="text-gray-500 dark:text-gray-400">
            We&apos;re sorry, but your order has been canceled. Please let us
            know if you have any questions.
          </p>
          <div className="space-x-5">
            <Link href={"mailto:" + process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL}>
              <Button variant="outline">Contact Support</Button>
            </Link>
            <Link href="/">
              <Button>Browse Other Products</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
