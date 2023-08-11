import { HygraphBaseWeaponType } from "@/types/items";

export const getBaseWeaponType = (baseWeaponType: HygraphBaseWeaponType) => {
  switch (baseWeaponType) {
    case HygraphBaseWeaponType.Battleaxe:
      return "Battleaxe";
    case HygraphBaseWeaponType.Boomerang:
      return "Boomerang";
    case HygraphBaseWeaponType.Club:
      return "Club";
    case HygraphBaseWeaponType.CrossbowHand:
      return "Crossbow (Hand)";
    case HygraphBaseWeaponType.CrossbowHeavy:
      return "Crossbow (Heavy)";
    case HygraphBaseWeaponType.CrossbowLight:
      return "Crossbow (Light)";
    case HygraphBaseWeaponType.Dagger:
      return "Dagger";
    case HygraphBaseWeaponType.DoubleBladedScimitar:
      return "Double-Bladed Scimitar";
    case HygraphBaseWeaponType.Flail:
      return "Flail";
    case HygraphBaseWeaponType.Glaive:
      return "Glaive";
    case HygraphBaseWeaponType.Greataxe:
      return "Greataxe";
    case HygraphBaseWeaponType.Greatclub:
      return "Greatclub";
    case HygraphBaseWeaponType.Greatsword:
      return "Greatsword";
    case HygraphBaseWeaponType.Halberd:
      return "Halberd";
    case HygraphBaseWeaponType.Handaxe:
      return "Handaxe";
    case HygraphBaseWeaponType.Javelin:
      return "Javelin";
    case HygraphBaseWeaponType.Lance:
      return "Lance";
    case HygraphBaseWeaponType.LightHammer:
      return "Light Hammer";
    case HygraphBaseWeaponType.Longbow:
      return "Longbow";
    case HygraphBaseWeaponType.Longsword:
      return "Longsword";
    case HygraphBaseWeaponType.Mace:
      return "Mace";
    case HygraphBaseWeaponType.Maul:
      return "Maul";
    case HygraphBaseWeaponType.Morningstar:
      return "Morningstar";
    case HygraphBaseWeaponType.Net:
      return "Net";
    case HygraphBaseWeaponType.Pike:
      return "Pike";
    case HygraphBaseWeaponType.Quarterstaff:
      return "Quarterstaff";
    case HygraphBaseWeaponType.Rapier:
      return "Rapier";
    case HygraphBaseWeaponType.Scimitar:
      return "Scimitar";
    case HygraphBaseWeaponType.Shortsword:
      return "Shortsword";
    case HygraphBaseWeaponType.Shortbow:
      return "Shortbow";
    case HygraphBaseWeaponType.Sickle:
      return "Sickle";
    case HygraphBaseWeaponType.Sling:
      return "Sling";
    case HygraphBaseWeaponType.Trident:
      return "Trident";
    case HygraphBaseWeaponType.Spear:
      return "Spear";
    default:
      return "Other";
  }
};
