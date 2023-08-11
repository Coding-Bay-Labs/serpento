import { HygraphItemType, type HygraphItem } from "@/types/items";
import HygraphRichText from "../HygraphRichText";
import { getItemType } from "@/utils/getItemType";
import { getItemRarity } from "@/utils/getItemRarity";
import { getArmorType } from "@/utils/getBaseArmorType";
import { getBaseWeaponType } from "@/utils/getBaseWeaponType";
import { getMagicItemType } from "@/utils/getMagicItemType";

const Details = ({
  item: {
    name,
    description,
    itemType,
    magicItemType,
    rarity,
    baseWeaponType,
    armorType,
  },
}: {
  item: HygraphItem;
}) => {
  return (
    <div className="ml-8 h-[calc(100vh-14rem)] w-[calc(100%-32rem)] flex-col rounded-md bg-stone-900">
      <div className="flex h-12 w-full items-center justify-between rounded-tl-md rounded-tr-md bg-stone-800 px-4">
        <h2 className="text-lg text-white">{name}</h2>
        <div>
          <span className="font-semibold text-white">
            {getItemType(itemType, magicItemType)}
          </span>
          <span className="font-semibold text-white/50"> • </span>
          <span className="font-semibold text-white">
            {getItemRarity(rarity)}
          </span>
        </div>
      </div>
      <div className="flex-col px-4 py-2">
        <div className="rounded-lg bg-neutral-800">
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="flex flex-col border-r border-white/10 px-4 py-2">
              <h4 className="font-semibold text-white">Item type</h4>
              <span className="text-white">
                {getItemType(itemType, magicItemType)}
              </span>
            </div>
            <div className="flex flex-col border-r border-white/10 px-4 py-2">
              <h4 className="font-semibold text-white">
                {itemType === HygraphItemType.Armor && "Armor type"}
                {itemType === HygraphItemType.Weapon && "Weapon type"}
                {magicItemType && "Magic item type"}
              </h4>
              <span className="text-white">
                {itemType === HygraphItemType.Armor && getArmorType(armorType)}
                {itemType === HygraphItemType.Weapon &&
                  baseWeaponType &&
                  getBaseWeaponType(baseWeaponType)}
                {magicItemType && getMagicItemType(magicItemType)}
              </span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <h4 className="font-semibold text-white">Rarity</h4>
              <span className="text-white">{getItemRarity(rarity)}</span>
            </div>
          </div>
        </div>
        <HygraphRichText content={description.json} />
      </div>
    </div>
  );
};

export default Details;
