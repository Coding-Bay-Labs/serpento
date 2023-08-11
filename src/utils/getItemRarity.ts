import { HygraphItemRarityType } from "@/types/items";

export const getItemRarity = (itemRarity: HygraphItemRarityType) => {
  switch (itemRarity) {
    case HygraphItemRarityType.Common:
      return "Common";
    case HygraphItemRarityType.Uncommon:
      return "Uncommon";
    case HygraphItemRarityType.Rare:
      return "Rare";
    case HygraphItemRarityType.VeryRare:
      return "Very Rare";
    case HygraphItemRarityType.Legendary:
      return "Legendary";
    case HygraphItemRarityType.Artifact:
      return "Artifact";
    case HygraphItemRarityType.Unknown:
      return "Unknown";
    case HygraphItemRarityType.Varies:
      return "Varies";
    default:
      return "Other";
  }
};
