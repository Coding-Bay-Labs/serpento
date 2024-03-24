'use client';

import { api } from "@/utils/api";
import { getComponentType } from "@/utils/getComponentType";
import { getOrdinal } from "@/utils/getOrdinal";
import { getSchoolName } from "@/utils/getSchool";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCallback } from "react";

const useSearchSpells = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const data = [{ id: "1", name: "Fireball", level: 3, spellSchool: "evocation", components: ["V", "S", "M"] }];

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
  const { results, onSearchChange } = useSearchSpells();
  const router = useRouter();
  const handleDisplaySpell = (spellId: string) => {
    return () => {
      void router.push(`/spells/${spellId}`);
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
          placeholder="Search spells"
          className="flex h-12 flex-1 rounded-tl-md rounded-tr-md bg-transparent text-white/50 focus:outline-none"
        ></input>
      </div>
      <div className="flex-col px-4 py-2">
        {results.map((spell) => {
          return (
            <div
              key={spell.id}
              onClick={handleDisplaySpell(spell.id)}
              className="rounded-4 mb-2 flex h-16 cursor-pointer rounded-md bg-neutral-800 px-2 py-1"
            >
              <div className="flex w-full flex-col">
                <h3 className="text-lg text-white">{spell.name}</h3>
                <div className="flex justify-between">
                  <div>
                    <span className="text-white/50">
                      {getOrdinal(spell.level)} level, {""}
                    </span>
                    <span className="text-white/50">
                      {getSchoolName(spell.spellSchool)} {""}
                    </span>
                  </div>
                  <span className=" text-white/50">
                    {spell.components
                      .map((c) => getComponentType(c))
                      .join(", ")}
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
