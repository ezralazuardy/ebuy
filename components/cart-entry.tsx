import { formatCurrencyString } from "use-shopping-cart";
import { CartEntry as ICartEntry } from "use-shopping-cart/core";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

export default function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry;
  removeItem: (id: string) => undefined;
}) {
  return (
    <tr className="border-t border-gray-200 dark:border-gray-800">
      <td className="px-4 py-4 flex items-center gap-4">
        <Image
          alt={entry.name}
          className="rounded-md"
          height={64}
          src={entry.image ?? "/placeholder.png"}
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width={64}
        />
        <div>
          <h4 className="font-semibold">{entry.name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {entry.description}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 font-semibold">${entry.price}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <Button className="rounded-full" size="icon" variant="outline">
            <MinusIcon className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span>{entry.quantity}</span>
          <Button className="rounded-full" size="icon" variant="outline">
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </td>
      <td className="px-4 py-4 font-semibold">${entry.value}</td>
      <td className="px-4 py-4 text-right">
        <Button
          className="rounded-full"
          size="icon"
          variant="outline"
          onClick={() => removeItem(entry.id)}
        >
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Remove</span>
        </Button>
      </td>
    </tr>
  );
}
