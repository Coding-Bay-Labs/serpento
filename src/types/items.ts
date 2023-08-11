import { type RichTextContent } from "@graphcms/rich-text-types";

export enum HygraphItemType {
  Armor = "armor",
  Weapon = "weapon",
  Item = "item",
}

export enum HygraphItemRarityType {
  Common = "common",
  Uncommon = "uncommon",
  Rare = "rare",
  VeryRare = "veryRare",
  Legendary = "legendary",
  Artifact = "artifact",
  Varies = "varies",
  Unknown = "unknown",
}

export enum HygraphMagicItemType {
  Potion = "potion",
  Ring = "ring",
  Rod = "rod",
  Scroll = "scroll",
  Staff = "staff",
  Wand = "wand",
  WondrousItem = "wondrousItem",
}

export enum HygraphBaseWeaponType {
  Battleaxe = "battleaxe",
  Boomerang = "boomerang",
  Club = "club",
  CrossbowHand = "crossbowHand",
  CrossbowLight = "crossbowLight",
  CrossbowHeavy = "crossbowHeavy",
  Dagger = "dagger",
  DoubleBladedScimitar = "doubleBladedScimitar",
  Flail = "flail",
  Glaive = "glaive",
  Greataxe = "greataxe",
  Greatclub = "greatclub",
  Greatsword = "greatsword",
  Halberd = "halberd",
  Handaxe = "handaxe",
  Javelin = "javelin",
  Lance = "lance",
  LightHammer = "lightHammer",
  Longbow = "longbow",
  Longsword = "longsword",
  Mace = "mace",
  Maul = "maul",
  Morningstar = "morningstar",
  Net = "net",
  Pike = "pike",
  Quarterstaff = "quarterstaff",
  Rapier = "rapier",
  Scimitar = "scimitar",
  Shortbow = "shortbow",
  Shortsword = "shortsword",
  Sickle = "sickle",
  Sling = "sling",
  Spear = "spear",
  Trident = "trident",
  WarPick = "warPick",
  Warhammer = "warhammer",
  Whip = "whip",
}

export enum HygraphBaseArmorType {
  Breastplate = "breastplate",
  ChainMail = "chainMail",
  ChainShirt = "chainShirt",
  HalfPlate = "halfPlate",
  Hide = "hide",
  Leather = "leather",
  Padded = "padded",
  Plate = "plate",
  PrideSilkOutfit = "prideSilkOutfit",
  RingMail = "ringMail",
  ScaleMail = "scaleMail",
  Shield = "shield",
  Splint = "splint",
  StuddedLeather = "studdedLeather",
}

export enum HygraphArmorDexterityBonusType {
  FullModifier = "fullModifier",
  Static = "static",
}

export type HygraphItem = {
  __typename: "Item";
  id: string;
  name: string;
  rarity: HygraphItemRarityType;
  itemType: HygraphItemType;
  magicItemType: HygraphMagicItemType | null;
  armorType: HygraphBaseArmorType | null;
  baseWeaponType: HygraphBaseWeaponType | null;
  dexterityBonusType: HygraphArmorDexterityBonusType;
  dexterityBonusStatic: number;
  minStrengthRequirement: number;
  isStealthCheckRequired: boolean;
  isAttunementRequired: boolean;
  attunementDescription: string | null;
  listingImage: {
    __typename: "Asset";
    url: string;
    width: number;
    height: number;
  };
  description: {
    __typename: "ItemDescriptionRichText";
    json: RichTextContent;
  };
};
