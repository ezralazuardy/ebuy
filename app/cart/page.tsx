import Cart from "@/components/cart";

export default function Page() {
  return (
    <main className="mx-12 mt-12 min-h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Your Cart</h2>
      </div>
      <Cart />
    </main>
  );
}
