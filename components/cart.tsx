"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartCheckoutButton from "@/components/cart-checkout-button";
import CartEntry from "@/components/cart-entry";

export default function Cart() {
  const {
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
    cartDetails,
    totalPrice,
  } = useShoppingCart();
  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry
      key={entry.id}
      entry={entry}
      removeItem={removeItem}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
    />
  ));
  const cartIsEmpty = cartEntries.length === 0;
  const cartIsNotEmpty = !cartIsEmpty;
  const fixedTotalPrice = totalPrice ? totalPrice.toFixed(2) : 0;
  return (
    <>
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
            {cartIsEmpty ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  You have no items in your cart
                </td>
              </tr>
            ) : null}
            {cartIsNotEmpty ? cartEntries : null}
          </tbody>
        </table>
      </div>
      {cartIsNotEmpty ? (
        <div className="mt-12 flex justify-end">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
              <span className="font-semibold">${fixedTotalPrice}</span>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Total</span>
              <span className="font-semibold">${fixedTotalPrice}</span>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => clearCart()}
                variant="destructive"
                className="mt-8 me-4"
              >
                Empty Cart
              </Button>
              <CartCheckoutButton />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
