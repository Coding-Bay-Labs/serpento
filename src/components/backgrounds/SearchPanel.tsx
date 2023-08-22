import { useState, useCallback } from "react";
import { type HygraphBackground } from "@/types/backgrounds";

const useSpeciesSearch = (backgroundsList: HygraphBackground[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value);
    },
    []
  );

  return {
    results: backgroundsList.filter((species) =>
      species.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    onSearchChange,
  };
};

const SearchPanel = ({
  backgroundsList,
}: {
  backgroundsList: HygraphBackground[];
}) => {
  const { results, onSearchChange } = useSpeciesSearch(backgroundsList);

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
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="#8B8B8B"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
        </svg>
        <input
          onChange={onSearchChange}
          type="text"
          placeholder="Search backgrounds"
          className="flex h-12 flex-1 rounded-tl-md rounded-tr-md bg-transparent text-white/50 focus:outline-none"
        ></input>
      </div>
      <div className="flex-col px-4 py-2">
        {results.map((background) => {
          return (
            <div
              key={background.id}
              className="rounded-4 mb-2 flex h-16 cursor-pointer rounded-md bg-neutral-800 px-2 py-1"
            >
              <div className="flex w-full flex-col">
                <h3 className="text-lg text-white">{background.name}</h3>
                <div className="flex justify-between">
                  <span className="text-white/50">
                    {background.primaryFeatureName}
                  </span>
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
