import { HygraphItemType, type HygraphMagicItemType } from "@/types/items";

export const getItemType = (
  itemType: HygraphItemType,
  magicItemType: HygraphMagicItemType | null
) => {
  switch (itemType) {
    case HygraphItemType.Armor:
      return "Armor";
    case HygraphItemType.Weapon:
      return "Weapon";
    case HygraphItemType.Item:
      if (magicItemType) {
        return "Magic Item";
      }
    default:
      return "Other";
  }
};
