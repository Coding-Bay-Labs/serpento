import { type HygraphSpecies } from "@/types/species";

const Details = ({ species }: { species: HygraphSpecies }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-white">{species.name}</h1>
    </div>
  );
};

export default Details;
