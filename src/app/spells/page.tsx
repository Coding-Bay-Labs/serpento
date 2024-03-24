import { getFirstSpellId } from "@/server/api/hygraph/spell";
import Details from "@/components/spells/Details";
import SearchPanel from "@/components/spells/SearchPanel";

export const Spells = async () => {
  const spellId = await getFirstSpellId();
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Spells</h1>
      <div className="mt-8 flex">
        <SearchPanel />
      </div>
    </>
  );
}
