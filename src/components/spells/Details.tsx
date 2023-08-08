import { type HygraphSpell } from "@/server/api/hygraph/spells";
import HygraphRichText from "../HygraphRichText";

const Details = ({ spell: { name, description } }: { spell: HygraphSpell }) => {
  return (
    <div className="ml-8 h-[calc(100vh-14rem)] w-[calc(100%-32rem)] flex-col rounded-md bg-stone-900">
      <div className="flex h-12 w-full items-center rounded-tl-md rounded-tr-md bg-stone-800 px-4">
        <h2 className="text-lg text-white">{name}</h2>
      </div>
      <div className="flex-col px-4 py-2">
        <HygraphRichText content={description.json} />
      </div>
    </div>
  );
};

export default Details;
