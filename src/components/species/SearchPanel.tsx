import { useState, useCallback } from "react";
import { type HygraphSpecies } from "@/types/species";

const useSpeciesSearch = (speciesList: HygraphSpecies[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value);
    },
    []
  );

  return {
    results: speciesList.filter((species) =>
      species.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    onSearchChange,
  };
};

const SearchPanel = ({ speciesList }: { speciesList: HygraphSpecies[] }) => {
  const { results, onSearchChange } = useSpeciesSearch(speciesList);

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
          placeholder="Search species"
          className="flex h-12 flex-1 rounded-tl-md rounded-tr-md bg-transparent text-white/50 focus:outline-none"
        ></input>
      </div>
      <div className="flex-col px-4 py-2">
        {results.map((species) => {
          return (
            <div
              key={species.id}
              className="rounded-4 mb-2 flex h-16 cursor-pointer rounded-md bg-neutral-800 px-2 py-1"
            >
              <div className="flex w-full flex-col">
                <h3 className="text-lg text-white">{species.name}</h3>
                <div className="flex justify-between">
                  <span className="text-white/50">
                    {species.extension.name}
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
