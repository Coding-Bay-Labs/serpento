import Details from "@/components/spells/Details";
import SearchPanel from "@/components/spells/SearchPanel";
import { getHygraphSpells } from "@/server/api/hygraph/spells";

const SpellDetails = async () => {
  const spells = await getHygraphSpells();

  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Spells</h1>
      <div className="mt-8 flex">
        <SearchPanel />
        <Details spell={spells[0]!} />
      </div>
    </>
  );
};

export default SpellDetails;
