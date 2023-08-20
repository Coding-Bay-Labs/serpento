import { type HygraphSpecies } from "@/types/species";
import HygraphRichText from "../HygraphRichText";

const Details = ({ species }: { species: HygraphSpecies }) => {
  return (
    <div className="ml-8 h-[calc(100vh-14rem)] w-[calc(100%-32rem)] flex-col overflow-auto rounded-md bg-stone-900 ">
      <div className="flex h-12 w-full items-center justify-between rounded-tl-md rounded-tr-md bg-stone-800 px-4">
        <h2 className="text-lg text-white">{species.name}</h2>
        <div>
          <span className="font-semibold text-white">
            {species.extension.name}
          </span>
        </div>
      </div>
      <div className="w-full flex-col whitespace-pre-wrap break-words px-4 py-2">
        <div
          className="markdown
            prose-th:last-of-type dark prose prose-lg mt-4 flex max-w-none flex-col break-words
            dark:prose-invert prose-table:border-separate prose-table:border-spacing-0 prose-th:border-b prose-th:border-l
            prose-th:border-t prose-th:border-stone-600 prose-th:bg-stone-800 prose-th:pl-3 first:prose-th:rounded-tl-md
            last:prose-th:rounded-tr-md last:prose-th:border-r prose-td:border-b prose-td:border-l
            prose-td:border-stone-600 prose-td:pl-3 last:prose-td:border-r"
        >
          <HygraphRichText content={species.description.json} />
        </div>
      </div>
    </div>
  );
};

export default Details;
