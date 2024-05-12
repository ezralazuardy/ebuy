import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

type Props = {
  amount?: number;
};

export default function ProductItemSkeleton({ amount = 8 }: Props) {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: amount }).map((_, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View product</span>
            </Link>
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 animate-pulse">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="p-4">
              <Skeleton className="h-6 w-2/3 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <div className="flex items-center justify-between mt-4">
                <Skeleton className="h-6 w-20" />
                <Button disabled size="sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
