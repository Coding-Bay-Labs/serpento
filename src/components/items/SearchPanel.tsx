import { api } from "@/utils/api";
import { getItemRarity } from "@/utils/getItemRarity";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCallback } from "react";

const useSearchItems = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data = [] } = api.items.search.useQuery(
    { searchTerm },
    { keepPreviousData: true }
  );

  const onSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value);
    },
    []
  );

  return {
    results: data,
    onSearchChange,
  };
};

const SearchPanel = () => {
  const { results, onSearchChange } = useSearchItems();
  const { push } = useRouter();
  const handleDisplayItem = (spellId: string) => {
    return () => {
      void push(`/items/${spellId}`);
    };
  };

  return (
    <div className="h-[calc(100vh-14rem)] w-96 flex-col rounded-md bg-stone-900">
      <div className="flex h-12 w-full items-center rounded-tl-md rounded-tr-md bg-stone-800 px-4">
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="mr-3 flex-none"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="#8B8B8B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="#8B8B8B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
        </svg>
        <input
          onChange={onSearchChange}
          type="text"
          placeholder="Search items"
          className="flex h-12 flex-1 rounded-tl-md rounded-tr-md bg-transparent text-white/50 focus:outline-none"
        ></input>
      </div>
      <div className="flex-col px-4 py-2">
        {results.map((item) => {
          return (
            <div
              key={item.id}
              onClick={handleDisplayItem(item.id)}
              className="rounded-4 mb-2 flex h-16 cursor-pointer rounded-md bg-neutral-800 px-2 py-1"
            >
              <div className="flex w-full flex-col">
                <h3 className="text-lg text-white">{item.name}</h3>
                <div className="flex justify-between">
                  <div>
                    <span className="text-white/50">{item.itemType.name}</span>
                    {item.baseItem && (
                      <span className="text-white/50">
                        {""}, {item.baseItem.name}
                      </span>
                    )}
                  </div>
                  {item.itemDetails.magicItemFields && (
                    <span className="text-white/50">
                      {getItemRarity(item.itemDetails.magicItemFields.rarity)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPanel;
