"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { debounce } from "@/libraries/utils";

type Props = {
  label: string;
};

export default function SearchBar({ label }: Props) {
  let pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function searchHandler(query: string) {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const debouncedSearchHandler = debounce(searchHandler, 1000);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
      <Input
        className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-gray-500"
        type="search"
        placeholder={label}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          debouncedSearchHandler(event.target.value)
        }
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
}
