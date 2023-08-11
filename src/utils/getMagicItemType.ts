import { HygraphMagicItemType } from "@/types/items";

export const getMagicItemType = (magicItemType: HygraphMagicItemType) => {
  switch (magicItemType) {
    case HygraphMagicItemType.Potion:
      return "Potion";
    case HygraphMagicItemType.Ring:
      return "Ring";
    case HygraphMagicItemType.Rod:
      return "Rod";
    case HygraphMagicItemType.Scroll:
      return "Scroll";
    case HygraphMagicItemType.Staff:
      return "Staff";
    case HygraphMagicItemType.Wand:
      return "Wand";
    case HygraphMagicItemType.WondrousItem:
      return "Wondrous Item";
    default:
      return "Other";
  }
};
