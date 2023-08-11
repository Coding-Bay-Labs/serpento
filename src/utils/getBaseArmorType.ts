import { HygraphBaseArmorType } from "@/types/items";

export const getArmorType = (armorType: HygraphBaseArmorType | null) => {
  if (!armorType) {
    return "Other";
  }

  switch (armorType) {
    case HygraphBaseArmorType.Breastplate:
      return "Breastplate";
    case HygraphBaseArmorType.ChainMail:
      return "Chain Mail";
    case HygraphBaseArmorType.ChainShirt:
      return "Chain Shirt";
    case HygraphBaseArmorType.HalfPlate:
      return "Full Plate";
    case HygraphBaseArmorType.Hide:
      return "Hide";
    case HygraphBaseArmorType.Leather:
      return "Leather";
    case HygraphBaseArmorType.Padded:
      return "Padded";
    case HygraphBaseArmorType.Plate:
      return "Plate";
    case HygraphBaseArmorType.PrideSilkOutfit:
      return "Pride Silk Outfit";
    case HygraphBaseArmorType.RingMail:
      return "Ring Mail";
    case HygraphBaseArmorType.ScaleMail:
      return "Scale Mail";
    case HygraphBaseArmorType.Shield:
      return "Shield";
    case HygraphBaseArmorType.Splint:
      return "Splint";
    case HygraphBaseArmorType.StuddedLeather:
      return "Studded Leather";
    default:
      return "Other";
  }
};
