import { HygraphItemType, type HygraphItem } from "@/types/items";
import HygraphRichText from "../HygraphRichText";
import { getItemRarity } from "@/utils/getItemRarity";

const Details = ({
  item: {
    name,
    costInGold,
    weightInPounds,
    description,
    itemType,
    itemDetails,
    baseItem,
  },
}: {
  item: HygraphItem;
}) => {
  return (
    <div className="ml-8 h-[calc(100vh-14rem)] w-[calc(100%-32rem)] flex-col rounded-md bg-stone-900">
      <div className="flex h-12 w-full items-center justify-between rounded-tl-md rounded-tr-md bg-stone-800 px-4">
        <h2 className="text-lg text-white">{name}</h2>
        <div>
          <span className="font-semibold text-white">{itemType.name}</span>
          {itemDetails.magicItemFields && (
            <>
              <span className="font-semibold text-white/50"> • </span>
              <span className="font-semibold text-white">
                {getItemRarity(itemDetails.magicItemFields.rarity)}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex-col px-4 py-2">
        <div className="rounded-lg bg-neutral-800">
          <div className="grid grid-cols-3  border-white/10">
            <div className="flex flex-col border-r border-white/10 px-4 py-2">
              <h4 className="font-semibold text-white">Item type</h4>
              <span className="text-white">{itemType.name}</span>
            </div>

            {baseItem && (
              <div className="flex flex-col border-r border-white/10 px-4 py-2">
                <h4 className="font-semibold text-white">
                  {itemType.type === HygraphItemType.Armor && "Armor type"}
                  {itemType.type === HygraphItemType.Weapon && "Weapon type"}
                </h4>
                <span className="text-white">{baseItem?.name}</span>
              </div>
            )}

            {!baseItem && (
              <>
                <div className="flex flex-col border-r border-white/10 px-4 py-2">
                  <h4 className="font-semibold text-white">Cost</h4>
                  <span className="text-white">{costInGold} GP</span>
                </div>
                <div className="flex flex-col border-white/10 px-4 py-2">
                  <h4 className="font-semibold text-white">Weight</h4>
                  <span className="text-white">{weightInPounds} lbs</span>
                </div>
              </>
            )}

            {itemDetails.magicItemFields && (
              <div className="flex flex-col px-4 py-2">
                <h4 className="font-semibold text-white">Rarity</h4>
                <span className="text-white">
                  {getItemRarity(itemDetails.magicItemFields.rarity)}
                </span>
              </div>
            )}
          </div>
        </div>
        <HygraphRichText content={description.json} />
      </div>
    </div>
  );
};

export default Details;
