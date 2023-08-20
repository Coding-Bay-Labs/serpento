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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-white">
        {speciesList.length}
      </h1>
    </div>
  );
};

export default SearchPanel;
